var app = {
    //初始化
    init: function () {
        var _ts = this;

        // 滑动导航
        _ts.nav_top.init();

        // 专区焦点图
        _ts.zq_focus.init();

        // 下一批视频
        _ts.zq_focus.init();

        // 下方tab切换
        _ts.tab.init();

    },
    nav_top: {
        init: function () {
            var _ts = this;

            // 执行滑动
            _ts.run();

        },
        run: function () {
            var swiper = new Swiper('.nav_top', {
                freeMode: true,
                slidesPerView: 'auto',
                preventClicks: false
            });
        }
    },

    zq_focus: {
        init: function () {
            var _ts = this;

            // 执行焦点图滑动
            _ts.run();

        },
        run: function () {
            var swiper2 = new Swiper('.mod_focus', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplayDisableOnInteraction: false,
                autoplay: 2000,
                preventClicks: false
            });
        }
    },
    replace: {
        init: function () {
            var _ts = this;

            // 下一批
            _ts.run();

        },
        run: function () {

        }
    },
    tab: {
        init: function () {
            var _ts = this;

            // tab切换
            _ts.run();

        },
        run: function () {

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
            // $(".nav_tab li").click(function (e) {
            //     e.preventDefault()
            // })
        }
    }

}




$(document).ready(function () {
    // 入口
    app.init();





})