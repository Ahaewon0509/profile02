$(function(){

    'use strict';
    
    var $window = $(window);
    
    function run()
    {
        var fName = arguments[0],
            aArgs = Array.prototype.slice.call(arguments, 1);
        try {
            fName.apply(window, aArgs);
        } catch(err) {
        }
    };
    
    /* chart
    ================================================== */
    function _chart ()
    {
        $('.b-skills').appear(function() {
            setTimeout(function() {
                $('.chart').easyPieChart({
                    easing: 'easeOutElastic',
                    delay: 3000,
                    barColor: '#369670',
                    trackColor: '#eee',
                    scaleColor: false,
                    lineWidth: 21,
                    trackWidth: 21,
                    size: 250,
                    lineCap: 'round',
                    onStep: function(from, to, percent) {
                        this.el.children[0].innerHTML = Math.round(percent);
                    }
                });
            }, 300);
        });
    };
    
    $(document).ready(function() {
        run(_chart);
        
    });
        
        //  탑버튼
        $(window).scroll(function(){
        
            if( $(this).scrollTop() > 100 ){
                $(".goToTop").addClass("on");
            }
            else{
                $(".goToTop").removeClass("on");
            }
            
        });
            
        $(".goToTop").click(function(){
            window.scrollTo({top : 0, behavior: 'smooth'}); 
        });

        // 풀페이지
        window.onload = function () {
            var elm = ".full";
            $(elm).each(function (index) {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var nextindex = index;
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } 
                    else if (event.detail)
                        delta = -event.detail / 3;
                    var moveTop = $(window).scrollTop();
                    var elmSelecter = $(elm).eq(index);
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {
                            nextindex++;
                            try{
                                moveTop = $(elmSelecter).next().offset().top;
                            }catch(e){}
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
                            nextindex--;
                        try{
                            moveTop = $(elmSelecter).prev().offset().top;
                        }catch(e){}
                        }
                    }
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 700, complete: function () {
                            $("#nav > a").eq(nextindex).addClass("active").siblings().removeClass("active");
                        }
                    });
                });
            });
        }
    
        // 디자인 슬라이드
        var swiper = new Swiper("#design .mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
            el: "#design .swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: "#design .swiper-button-next",
            prevEl: "#design .swiper-button-prev"
        },
        observer : true, //옵션
        observerParents :true
        });
        
        // 리객트 프로젝트 슬라이드
        var swiper = new Swiper("#react .mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            keyboard: {
                enabled: true,
            },
            pagination: {
                el: "#react  .swiper-pagination",
                clickable: true,
            },
            observer : true, //옵션
            observerParents :true
            });
    });