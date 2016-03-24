(function($){

	// Defining our jQuery plugin

	$.fn.ws_modal_box = function(prop){

		// Default parameters

		var options = $.extend({
			height : "550",
			width : "500",
			title:"",
			description: '<div class="container"><h1 style="font-size: 1.5em;">Shoot me a message!</h1><form id="contact" action="formdata.php" method="post"><fieldset><input placeholder="Your name" type="text" tabindex="1" name="name" required autofocus></fieldset><fieldset><input placeholder="Your Email Address" type="email" name="email" tabindex="2" required></fieldset><fieldset><input placeholder="Your Phone Number" type="tel" name="phone" tabindex="3" required></fieldset><fieldset><textarea placeholder="Type your Message Here...." name="info" tabindex="5" required></textarea></fieldset><fieldset><button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button></fieldset></form></div>',
			top: "5%",
			left: "35%",
		},prop);
				
		return this.click(function(e){
			add_block_page();
			add_popup_box();
			add_styles();
			
			$('.ws_modal_box').fadeIn();
		});
		
		 function add_styles(){			
			$('.ws_modal_box').css({ 
				'position':'absolute', 
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'border':'1px solid #fff',
				'box-shadow': '0px 2px 7px #292929',
				'-moz-box-shadow': '0px 2px 7px #292929',
				'-webkit-box-shadow': '0px 2px 7px #292929',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px',
				'background': '#f2f2f2', 
				'z-index':'50',
			});
			$('.ws_modal_close').css({
				'position':'relative',
				'top':'-5px',
				'left':'20px',
				'float':'right',
				'display':'block',
				'height':'50px',
				'width':'50px',
				'background': 'url(img/cross.png) no-repeat',
			});
                        /*Block page overlay*/
			var pageHeight = $(document).height();
			var pageWidth = $(window).width();

			$('.ws_block_page').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.6)',
				'height':pageHeight,
				'width':pageWidth,
				'z-index':'10'
			});
			$('.ws_inner_modal_box').css({
				'background-color':'#fff',
				'height':(options.height - 50) + 'px',
				'width':(options.width - 50) + 'px',
				'padding':'10px',
				'margin':'15px',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px'
			});
		}
		
		 function add_block_page(){
			var block_page = $('<div class="ws_block_page"></div>');
						
			$(block_page).appendTo('body');
		}
		 		
		 function add_popup_box(){
			 var pop_up = $('<div class="ws_modal_box"><a href="#" class="ws_modal_close"></a><div class="ws_inner_modal_box">' + options.title +  options.description + '</div></div>');
			 $(pop_up).appendTo('.ws_block_page');
			 			 
			 $('.ws_modal_close').click(function(){
				$(this).parent().fadeOut().remove();
				$('.ws_block_page').fadeOut().remove();				 
			 });
		}

		return this;
	};
	
})(jQuery);