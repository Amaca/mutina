/* jshint esversion: 6 */

export default class Sliders {

    static init() {
        let sliders = document.querySelectorAll('.swiper-container');

        if (sliders !== null) {
            Array.prototype.forEach.call(sliders, function (slider, i) {

                let parentWrap = slider.parentNode;

                //Slider Carousel
                if (parentWrap.classList.contains('slider--carousel') === true) {

                    //Init Swiper
                    var options = {
                        grabCursor: true,
                        watchOverflow: true,
                        centeredSlides: true,
                        loop: true,
                        //initialSlide: 1,
                        //slidesPerView: 1.8,
                        slidesPerView: 'auto',
                        spaceBetween: 60,
                        freeMode: true,
                        freeModeMomentumRatio: 1,
                        freeModeMomentumVelocityRatio: 0.3,
                        speed: 400,
                        // breakpoints: {
                        //     575: {
                        //         slidesPerView: 1,
                        //         spaceBetween: 15,
                        //     },
                        //     768: {
                        //         slidesPerView: 2,
                        //         spaceBetween: 30
                        //     }
                        // }
                    }

                    //Cover Slider
                } else if (parentWrap.classList.contains('cover__slider') === true) {

                    // //init Dots
                    // let sliderDots = 'swiper-pagination-' + i;
                    // let dotsContainer = document.createElement('div');
                    // dotsContainer.className = sliderDots;
                    // parentWrap.appendChild(dotsContainer);


                    // //Init Swiper
                    // const options = {
                    //     direction: 'horizontal',
                    //     loop: true,
                    //     spaceBetween: 0,
                    //     dynamicBullets: true,
                    //     watchOverflow: true,
                    //     parallax: true,
                    //     speed: 1000,
                    //     slidesPerView: 1,
                    //     autoplay: {
                    //         delay: 4000,
                    //     },
                    //     allowTouchMove: true,
                    //     pagination: {
                    //         el: '.' + sliderDots,
                    //         clickable: true
                    //     },
                    //     navigation: {
                    //         nextEl: '.swiper-button-next',
                    //         prevEl: '.swiper-button-prev',
                    //     },
                    //     on: {
                    //         init: function () {
                    //             animationStart();
                    //         },
                    //         transitionEnd: function () {
                    //             animationStart();
                    //         }
                    //     },
                    // }

                    // function animationStart() {
                    //     var othersChar = document.querySelectorAll('.swiper-slide .char'),
                    //         otherWords = document.querySelectorAll('.swiper-slide .text span'),
                    //         activeChar = document.querySelectorAll('.swiper-slide-active .char'),
                    //         activeWord = document.querySelectorAll('.swiper-slide-active .text span');

                    //     TweenMax.set(othersChar, { yPercent: +100, scaleY: 0 });
                    //     TweenMax.set(otherWords, { yPercent: -100 });

                    //     TweenMax.staggerTo(activeChar, 1.5, { yPercent: -100, scaleY: 1, ease: Power3.easeInOut }, 0.05);
                    //     TweenMax.staggerTo(activeChar, 1.5, { scaleY: 1, delay: .3, ease: Power3.easeInOut }, 0.05);
                    //     TweenMax.staggerTo(activeWord, 1.0, { delay: .5, yPercent: +100, ease: Power3.easeInOut });
                    // }

                }

                try {
                    new Swiper(slider, options);
                } catch (e) {}

            });
        }
    }

}