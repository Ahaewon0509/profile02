$(function() {
    //mouse cursor
let mouseX
let mouseY
const cursor = document.querySelector('#cursor')

document.addEventListener('mousemove', function(e){
    mouseX = e.clientX
    mouseY = e.clientY
    cursor.style.left = mouseX + 'px'
    cursor.style.top = mouseY + 'px'
})

// const circle = document.querySelector('.cursor') 
// console.log(circle)
// let mouseX
// let mouseY
// window.addEventListener('mousemove',function(e){
//     mouseX = e.clientX
//     mouseY = e.clientY
//     circle.style.left = mouseX+'px'
//     circle.style.top = mouseY+'px'
// })
// document.addEventListener("mousemove", (e) => {
//     const cursorwidth = $(".cursor").outerWidth()/2;
//     const cursorHeight = $(".cursor").outerHeight()/2;
    
//     $(window).mousemove(function(e){
//         gsap.to(".cursor", {duration: 0.5, left: e.pageX - cursorwidth, top: e.pageY - cursorHeight});
//     });
// });
// var pointSize = $(".pointer").width()/2;
// $("#wrap").mousemove(function(e){    
//     $('.pointer').css("top", e.pageY-pointSize);
//     $('.pointer').css("left", e.pageX-pointSize);
//     $('.pointer').fadeIn();
// });
//     $("#wrap").on("mouseleave", function(){
//     $('.pointer').fadeOut();
// });

    /*따라다니는 마우스*/


/*스크롤 풀 페이지*/
    // const $slider = $('.slider');
    
    // $slider.slick({
    //     infinite: false,
    //     arrows: false,
    //     vertical: true,
    //     dots: true,
    //     speed: 1200,
    //     cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)'
    // });

    // $slider.mousewheel(function(e) {
    //     e.preventDefault()
    //     if (e.deltaY < 0) {

    //         if ($(this).slick('slickCurrentSlide') === $(this).find('.slick-slide').length - 1) {
    //         return
    //         }

    //         $(this).slick('slickNext');

    //     } else {

    //         if ($(this).slick('slickCurrentSlide') === 0) {
    //         return
    //         }

    //         $(this).slick('slickPrev')
    //     }
    // });
});