$(document).ready(function () {
    var swiper = new Swiper('.nav_top', {
        freeMode: true,
        slidesPerView: 'auto',
        preventClicks: false
    });
    var swiper2 = new Swiper('.mod_focus', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        autoplay: 2000,
        preventClicks: false
    });
    var tabsSwiper = new Swiper('#tabs-container', {
        speed: 500,
        onSlideChangeStart: function () {
            $(".nav_tab .cur").removeClass('cur')
            $(".nav_tab li").eq(tabsSwiper.activeIndex).addClass('cur')
        }
    })
    $(".nav_tab li").on('touchstart mousedown', function (e) {
        e.preventDefault()
        $(".nav_tab .cur").removeClass('cur')
        $(this).addClass('cur')
        tabsSwiper.slideTo($(this).index())
    })
    $(".nav_tab li").click(function (e) {
        e.preventDefault()
    })
})