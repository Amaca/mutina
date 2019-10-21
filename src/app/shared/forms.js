/* jshint esversion: 6 */
import SidePanel from "./side.panel";

$.validator.defaults.getDataToSend = function (form) {
    return {
        data: GetJsonData(form)
    };
};
$.validator.defaults.callbackHandler = function (data, form) {
    if (data.d.Status) {
        $(form).find(".form-results").removeClass("error");
    } else {
        $(form).find("[type=submit]").show();
        $(form).find(".form-results").addClass("error");
    }
    $(form).find(".form-results").html(data.d.HTML);
}
$.validator.defaults.sendActionsToGTM = function (data, form) {
    if (data.d.Status && data.d.Actions)
        sendActionsToGTM(data.d.Actions);
}
$.validator.defaults.errorPlacement = function (label, element) {}

$.validator.defaults.submitHandler = function () {
    var validator = this,
        form = validator.currentForm;
    $(form).find(".form-results").html('<img src="/assets/img/loading.gif" />');
    $(form).find("[type=submit]").css('pointer-events', 'none');

    $.ajax({
        type: "POST",
        url: $(form).attr('action'),
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(validator.settings.getDataToSend(form)),
        dataType: "json",
        success: function (data) {
            try {
                validator.settings.sendActionsToGTM(data, form);
            } catch (ex) {}
            validator.settings.callbackHandler(data, form);
        },
        error: function (data) {
            $(form).find(".form-results").html('');
            $(form).find("[type=submit]").css('pointer-events', 'unset');
            alert("Web-Service Error!!");
        }
    });

    return false;
}

$.validator.defaults.ignore = ':hidden:not(select):not([type=checkbox])';

$.validator.defaults.highlight_base = $.validator.defaults.highlight;
$.validator.defaults.highlight = function (element, errorClass, validClass) {
    $.validator.defaults.highlight_base.call(this, element, errorClass, validClass);

    if ($(element).hasClass("require-one")) {
        var elName = $(element).attr("name");
        $(this.currentForm).find('[name=' + elName + ']').removeClass(validClass).addClass(errorClass);
    }

    var select = $(element).filter('select');
    if (select.length && select.data('selectpicker'))
        select.data('selectpicker').button.removeClass(validClass).addClass(errorClass);
};

$.validator.defaults.unhighlight_base = $.validator.defaults.unhighlight;
$.validator.defaults.unhighlight = function (element, errorClass, validClass) {
    $.validator.defaults.unhighlight_base.call(this, element, errorClass, validClass);

    if ($(element).hasClass("require-one")) {
        var elName = $(element).attr("name");
        $(this.currentForm).find('[name=' + elName + ']').removeClass(errorClass).addClass(validClass);
    }

    var select = $(element).filter('select');
    if (select.length && select.data('selectpicker'))
        select.data('selectpicker').button.removeClass(errorClass).addClass(validClass);
};

$.validator.addMethod('require-one', function (value, element) {
    var elName = $(element).attr("name");
    return $(this.currentForm).find('[name=' + elName + '].require-one:checked').length > 0;
});

function GetJsonData(formObj) {
    var d = {};
    var form = $(formObj);
    var fields = form.find("input[name!=''][type!=submit][type!=reset]") /*.filter("[type=email], [type=text], [type=password], [type=checkbox], [type=radio], [type=hidden]")*/ ;

    fields.each(function () {
        var
            type = $(this).attr("type"),
            name = $(this).attr("name"),
            value;

        switch (type) {
            case "checkbox":
            case "radio":
                var list = fields.filter('[name=' + name + '][type=' + type + ']');
                if (list.length === 1)
                    value = $(this).is(':checked');
                else {
                    if (d[name]) return;

                    var values = [];
                    list.each(function () {
                        if ($(this).is(':checked')) values.push($(this).val());
                    });
                    value = values.join(',');
                }
                break;

            default:
                value = $(this).val();
                value = $.trim(value);
                break;
        }

        d[name] = value;
    });

    form.find("select[name!=''], textarea[name!='']").each(function () {
        var name = $(this).attr("name");
        d[name] = $(this).val();
    });

    return d;
}

function sendActionsToGTM(obj) {
    if (obj === null) return;

    try {
        var actions;
        if (!jQuery.isArray(obj))
            actions = [obj];
        else
            actions = obj;

        for (var i = 0; i < actions.length; i++) {
            dataLayer.push({
                "event": "Action Complete",
                "wsActionComplete": actions[i]
            });
        }
    } catch (ex) {}
}

export default class Forms {

    constructor(element, index) {
        this.element = element;
        this.index = index;
        this.initForm();
    }

    initForm() {
        var option = {};
        if (this.element.attributes['data-nosubmit']) {
            option.submitHandler = null;
        }
        if (this.element.attributes['data-submithandler']) {
            option.submitHandler = this[this.element.attributes['data-submithandler'].value];
        }
        if (this.element.attributes['data-callbackhandler']) {
            option.callbackHandler = this[this.element.attributes['data-callbackhandler'].value];
        }
        this.validator = $(this.element).validate(option);
    }

    submitGetInTouch() {
        var validator = this,
            form = validator.currentForm;

        $.ajax({
            type: "POST",
            url: $(form).attr('action'),
            cache: false,
            contentType: "application/json; charseta=utf-8",
            data: JSON.stringify(validator.settings.getDataToSend(form)),
            dataType: "json",
            success: function (data) {
                document.querySelector(".side-panel__results").innerHTML = data.d.HTML;
                Forms.destroyAll();
                Forms.init();
            },
            error: function (data) {
                $(form).find(".side-panel__results").html('');
                $(form).find("[type=submit]").css('pointer-events', 'unset');
                alert("Web-Service Error!!");
            }
        });

        return false;
    }
    callbackLogin(data, form) {
        $(form).find(".form-results").removeClass("error");
        if (data.d.Status) {
            $(".nav__login").attr("data-islogged", 1);
            location.href = $(form).attr("data-reloadurl");
        } else {
            if (data.d.Props.DoReset) {
                SidePanel.reset();
                $(form).find("[type=submit]").css('pointer-events', 'unset');
                $(form).find(".form-results").html('');
            } else {
                $(form).find("[type=submit]").css('pointer-events', 'unset');
                $(form).find(".form-results").addClass("error");
                $(form).find(".form-results").html(data.d.HTML);
            }
        }
    }

    static viewLogin(e) {
        document.querySelector('#form-login').style.display = 'block';
        document.querySelector('#form-lostpassword').style.display = 'none';
        e.preventDefault();
    }
    static viewPasswordRecovery(e) {
        document.querySelector('#form-login').style.display = 'none';
        document.querySelector('#form-lostpassword').style.display = 'block';
        e.preventDefault();
    }
    static logout(e) {
        $.ajax({
            type: "POST",
            url: "/WS/wsUsers.asmx/Logout",
            cache: false,
            contentType: "application/json; charset=utf-8",
            data: '{"w":"s"}',
            dataType: "json",
            success: function (data) {
                if (data != null) {
                    if (data.d.Status) {
                        document.location.reload();
                    }
                }
            },
            error: function (data) {
                alert("Web-Service Error!!");
            }
        });
        e.preventDefault();
    }

    static init() {
        Forms.items = [...document.querySelectorAll('.contact-form')]
            .map((element, index) => new Forms(element, index));

        if (document.querySelector("#lost-password-button"))
            document.querySelector("#lost-password-button").addEventListener('click', this.viewPasswordRecovery);

        if (document.querySelector("#annulla-forgot-password"))
            document.querySelector("#annulla-forgot-password").addEventListener('click', this.viewLogin);

        [...document.querySelectorAll('.btn-logout')].forEach(x => {
            x.addEventListener('click', this.logout);
        });

        debug__('Forms: ', Forms.items);
    }

    static destroyAll() {
        Forms.items.forEach(form => {
            form.validator.destroy();
        });

        if (document.querySelector("#lost-password-button"))
            document.querySelector("#lost-password-button").removeEventListener('click', this.viewPasswordRecovery);

        if (document.querySelector("#annulla-forgot-password"))
            document.querySelector("#annulla-forgot-password").removeEventListener('click', this.viewLogin);

        [...document.querySelectorAll('.btn-logout')].forEach(x => {
            x.removeEventListener('click', this.logout);
        });

    }

}