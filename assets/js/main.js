//스크롤 부드럽게
const lenis = new Lenis()

lenis.on('scroll', (e) => {})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

window.onload = function () {
    $('body, html').animate({
        scrollTop: (0, 0)
    });
}

//gnb
$('.header .btn_allMenu').click(function () {
    $(this).toggleClass('on');
    $('.all_menu').toggleClass('open');
    $('.header').toggleClass('allMenu_open');
    $('.header .btn_allMenu .ico_open').toggleClass('hide')
})

let lastScroll = 0;
$(window).scroll(function () {
    current = $(this).scrollTop();
    if (current > lastScroll) {
        //내릴 때
        $('.header').removeClass('show')
        $('.header').addClass('hide')
        $('.sc_benefit .txt_area').removeClass('on')
        $('.sc_infusion .head h2').removeClass('on')
    } else {
        //올릴 때
        $('.header').addClass('show');
        $('.sc_benefit .txt_area').addClass('on')
        $('.sc_infusion .head h2').addClass('on')
    }
    if (current == 0) {
        $('.header').removeClass('show');
        $('.header').removeClass('hide')
    }
    lastScroll = current;
})

//visual
const introTl = gsap.timeline({})
introTl.to('.sc_visual', {
    delay: 1,
    '--opacity': 0
}, 'a')
introTl.from('.sc_visual .bounce', 1, {
    delay: 1,
    yPercent: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(2)",
}, 'a')
introTl.to('.sc_visual .btn_link', {
    opacity: 1,
    transform: 'translateY(0)'
})
introTl.to('.sc_visual .btn_link', {
    clipPath: 'inset(0% 0% 0% 0% round 30px 30px 30px 30px)',
    color: '#000'
})

const visSlide = new Swiper('.visual_slider', {
    effect: "fade",
    autoplay: {
        delay: 5000,
    },
    loop: true,
    touchRatio: 0,
})

visSlide.on("slideChange", function () {
    idx = this.realIndex;
    $('.sc_visual .txt_box .txt').eq(idx).addClass('show').siblings().removeClass('show')
})

barTl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_visual",
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0,
        //markers: true,
    },
    defaults: {
        ease: 'none'
    }
})

let mediaMatch = gsap.matchMedia();

barTl4.to('.sc_visual .swiper', {
    yPercent: 30
}, 'a')
barTl4.to('.sc_visual .btn_link', {}, 'a')

//product
barTl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_visual",
        start: "0% 40%",
        end: "100% 50%",
        scrub: 0,
        //markers: true,
    },
})

ScrollTrigger.create({
    trigger: '.sc_product .product_wrap',
    start: "0% -100%",
    end: "100% 100%",
    // markers: true,
    onEnter: function () {
        $(".sc_product .head").addClass('on')
    },
    onLeaveBack: function () {
        $(".sc_product .head").removeClass('on')
    }
})

gsap.to('.sc_product .slider_inner', {
    scrollTrigger: {
        trigger: ".sc_product",
        start: "0% -20%",
        end: "100% 100%",
        // markers: true,
        scrub: 0,
        invalidateOnRefresh: true,
    },
    xPercent: -101,
})

//benefit
ScrollTrigger.create({
    trigger: '.sc_benefit',
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    onEnter: function () {
        $(".sc_product .head").addClass('on')
    },
})

gsap.set('.sc_benefit .head h2 span:first-child', {
    xPercent: 0
})
gsap.set('.sc_benefit .head h2 span:nth-of-type(2)', {
    xPercent: 0
})
barTl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc_benefit',
        start: "0% 80%",
        end: "100% 95%",
        // markers: true,
        scrub: 0,
    },
})
barTl6.from('.sc_benefit .head h2 span:first-child', {
    xPercent: -40
}, 'a')
barTl6.from('.sc_benefit .head h2 span:nth-of-type(2)', {
    xPercent: 100
}, 'a')

barTl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".benefit_cont",
        start: "0% 10%",
        end: "100% 100%",
        scrub: 0,
        // markers: true,
    },
})
barTl7.to('.sc_benefit .clippath .clip_box1', {
    clipPath: 'inset(0% 0% 0% 0% round 0px 0% 0px 0px)'
}, 'a')
barTl7.to('.sc_benefit .clippath .clip_box2', {
    clipPath: 'inset(0% 0% 0% 0% round 0% 0px 0px 0px)'
}, 'a')
barTl7.to('.sc_benefit .path_wrap .layer', {
    opacity: 0.5
})
barTl7.to('.sc_benefit .txt_area', {
    opacity: 1
})

barTl8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".benefit_cont",
        start: "100% 100%",
        end: "100% 80%",
        scrub: 0,
        //markers: true,
    },
})

//faq
$('.sc_faq .faq_list button').click(function () {
    if ($(this).hasClass('on')) {
        $('.sc_faq .faq_list button').removeClass('on').siblings('.answer_box').stop().slideUp();
    } else {
        $('.sc_faq .faq_list button').removeClass('on').siblings('.answer_box').stop().slideUp();
        $(this).addClass('on').siblings('.answer_box').stop().slideDown();
    }
});

//footer
$('.footer .main_nav .depth1:nth-child(2)').click(function (e) {
    e.preventDefault();
    $('.footer .main_nav .depth2').slideToggle()
})
