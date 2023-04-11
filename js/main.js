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

    // // 풀페이지
    // $(document).ready(function() {
    //     $('#fullpage').fullpage({
    //         //options here
    //         licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    //         autoScrolling:true,
    //         scrollHorizontally: true
    //     });
    // });
    // new fullpage('#fullpage', {
    //     sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
        
    //     // Get your license at https://alvarotrigo.com/fullPage/pricing/
    //     licenseKey: 'YOUR LICENSE KEY HERE '
    // });
});