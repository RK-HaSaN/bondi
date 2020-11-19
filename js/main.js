var config = document.querySelector('.filtering');
mixitup(config);

$(document).ready(function(){
    		$(".gallery-image").magnificPopup({
    			type : "image",
    			gallery : {
    				enabled : true
    			}
    	   });

    		$('a').click(function(){
				if(this.hash !== ""){
					var hash = this.hash;


					$('html, body').animate({
						scrollTop: $(hash).offset().top
					}, 900);
				}
			});

        });