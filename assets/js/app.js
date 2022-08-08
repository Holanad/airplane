
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

// Swiper slider RECALL
const swiperStocks = new Swiper(".portfolio-slider", {
    navigation: {
      nextEl: ".portfolio-slider-manager__button_next",
      prevEl: ".portfolio-slider-manager__button_prev",
    },
    slidesPerView: 4,
    spaceBetween: 25,
    pagination: {
        el: ".portfolio-slider-pagination",
        clickable: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        768: {
            spaceBetween: 25,
        },
        320: {
            //slidesPerView: 1,
            spaceBetween: 0,
            slidesPerView: "auto",
            centeredSlides: true,
            initialSlide : 1,
        },
        
    }
});

/*function heightMainWindow() {
    let headerHeight = $('.header').height()
    let heightWindow = $(window).height();
    let res = heightWindow - headerHeight
    $('.intro').css({'height': res + 'px'});
}

if($(window).innerWidth() < 992) {
    heightMainWindow();
}*/

$(window).resize(function() {
    widthAdvantageImage();

   /* if($(window).innerWidth() < 992) {
        heightMainWindow();
    }*/
    
    if($(window).innerWidth() > 992) {
        widthIntroImage();
        widthDescrImage();
        widthAboutImage();
        widthServiceImage();
        setTimeout(() => {
            heightAdvantageBackground();
        }, 300);
    }
    if($(window).innerWidth() > 1240) {
        widthAdvantageBackground();
    }
});
//width intro-image

if($(window).innerWidth() > 992) {
    widthIntroImage();
    widthDescrImage();
    widthAboutImage();
   
    widthServiceImage();
    setTimeout(() => {
        heightAdvantageBackground();
    }, 300);
}
if($(window).innerWidth() > 1240) {
    widthAdvantageBackground();
}

function widthIntroImage () {
    let marginLeft = ($('.intro .container').outerWidth(true) - $('.intro .container').outerWidth()) / 2;
    let paddingLeft = ($('.intro .container').innerWidth() - $('.intro .container').width()) / 2;
    let marginLeftHeaderList = ($('.header-navigation').outerWidth(true) - $('.header-navigation').outerWidth());
    let widthHeaderLogo = $('.header__logo').width();
    let result = marginLeft + paddingLeft + marginLeftHeaderList + widthHeaderLogo;
    $('.intro-image').css({"left": result + 'px'});
    $('.intro-image').css({"width": `calc(100% - ${result}px)`});
}


function widthDescrImage () {
    let marginLeft = ($('.descr .container').outerWidth(true) - $('.descr .container').outerWidth()) / 2;
    let paddingLeft = ($('.descr .container').innerWidth() - $('.descr .container').width()) / 2;
    let widthDescrList = $('.descr-list').width();
    let paddingDescrList = ($('.descr-list').innerWidth() - $('.descr-list').width());
    let result = marginLeft + paddingLeft + paddingDescrList + widthDescrList + 17;
    $('.descr-statistic-image').css({"width": result + 'px'});
}

function widthAdvantageImage () {
    let marginLeft = ($('.advantages .container').outerWidth(true) - $('.advantages .container').outerWidth()) / 2;
    let paddingLeft = ($('.advantages .container').innerWidth() - $('.advantages .container').width()) / 2;
    let widthAdvantagesBlock = $('.advantages-block').width();
    let marginBlock = ($('.advantages-block').outerWidth(true) - $('.advantages-block').outerWidth());
    let result = marginLeft + paddingLeft + widthAdvantagesBlock + marginBlock;
    $('.advantages-image').css({"width": `calc(100% - ${result}px)`});
}
widthAdvantageImage();

function widthAdvantageBackground () {
    let marginLeft = ($('.advantages .container').outerWidth(true) - $('.advantages .container').outerWidth()) / 2;
    let paddingLeft = ($('.advantages .container').innerWidth() - $('.advantages .container').width()) / 2;
    let widthItem = $('.advantages-dop-list').innerWidth() - ($('.advantages-dop-item').outerWidth() * 4)
    let marginItem = ($('.advantages-dop-item').outerWidth(true) - $('.advantages-dop-item').outerWidth()) * 3;
    /*if(window.innerWidth > 1500) {
        widthItem = $('.advantages-dop-item').outerWidth() * 4
    } else {
        widthItem = $('.advantages-dop-list').width() - ($('.advantages-dop-item').outerWidth() * 4);
    }*/
    let widthAdvantagesBlock = $('.advantages-dop-list').width() - ($('.advantages-dop-item').outerWidth() * $('.advantages-dop-item').length);
    let marginBlock = ($('.advantages-block').outerWidth(true) - $('.advantages-block').outerWidth());
    let result = marginLeft + paddingLeft + (widthItem - marginItem);
    //+ widthAdvantagesBlock + marginBlock
    $('.advantages-background').css({"width": `calc(100% - ${result}px)`});
}

function heightAdvantageBackground () {
    let height = $('.about').height() - 141 + 'px';
    $('.about').css({"height": height});
}


function widthAboutImage () {
    let marginLeft = ($('.about .container').outerWidth(true) - $('.about .container').outerWidth()) / 2;
    let paddingLeft = ($('.about .container').innerWidth() - $('.about .container').width()) / 2;
    let widthAboutBlock = $('.about-wrapper').width();
    let paddingLeftWrapper = ($('.about-wrapper').innerWidth() - $('.about-wrapper').width()) / 3;
    let result = marginLeft + paddingLeft + widthAboutBlock + paddingLeftWrapper;
    $('.about-image').css({"width": `calc(100% - ${result}px)`});
}

function widthServiceImage () {
    let marginLeft = ($('.service .container').outerWidth(true) - $('.service .container').outerWidth()) / 2;
    let paddingLeft = ($('.service .container').innerWidth() - $('.service .container').width()) / 2;
    let widthServiceList = $('.service__descr').width();
    let marginServiceLeft = ($('.service__descr').outerWidth(true) - $('.service__descr').outerWidth());
    let result = marginLeft + paddingLeft + widthServiceList + marginServiceLeft;
    $('.service-image').css({"width": `calc(100% - ${result}px)`});
}



// jQuery function
$(document).ready(function() {
    function hoverService() {
        $('.service-item').hover(function() {
            $('.service-item').removeClass('service-item-active')
            $(this).addClass('service-item-active');
        })
    }
    hoverService()
    // navPosition RECALL
    function navPosition() {
        if ($('.portfolio-wrapper').length) {
            if ($(window).width() <= 768) {
                function navAbsolute() {
                    let sectionWidth = $('.portfolio').width();
                    let contWidth = $('.portfolio .container').width();
    
                    let totalRight = (sectionWidth - contWidth) / 2;
    
                    $('.portfolio-slider').css("padding-left", totalRight);
                    $('.portfolio-slider').css("padding-right", totalRight);
                    $('.portfolio-slider').css("margin-left", -totalRight);
                    $('.portfolio-slider').css("margin-right", -totalRight);
                };
                navAbsolute();
                $(window).on('load resize', function() {
                    navAbsolute();
                })
            } else {
               // navAbsolute();
            }
        }
    };
    navPosition();
    //////////////////////////////////////////
    //Бургер меню
    function headerBurger (){
        $('.header-burger').click(function () {
            $('.header-burger').toggleClass('open');
            $('.header-menu').toggleClass('open');
            $('.header-mobile').toggleClass('open');
            $('html').toggleClass('hidden');
        });
    };
    headerBurger();

    //Валидации сайта
    function formValidate() {
        $('.consultation-form-inner').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    minlength: 3
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                company: {
                    required: true,
                    minlength: 5
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                email: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 3 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                },
                company: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                },
                message: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 10 символов"
                }
            }
        });
        $('.footer-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    minlength: 3
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                company: {
                    required: true,
                    minlength: 5
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                email: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 3 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                },
                company: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                },
                message: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 10 символов"
                }
            }
        });
    };
    formValidate();
});