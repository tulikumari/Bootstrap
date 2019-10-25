(function($){
				$(document).ready(function(){
					// add items for bootstrap dropdown's
					
					/*$("#scroll_top").click(function(){
						jQuery('html,body').animate({scrollTop : 0},800);
					});*/
					       
						   
						 
						 
						 
						 if($(".practice_tab").length>0)
						   {
								$( 'ul.nav.nav-tabs  a' ).click( function ( e ) {
									e.preventDefault();
									$( this ).tab( 'show' );
								  } );
								   fakewaffle.responsiveTabs(['xs']);
						   }
						   
							$(".owl-carousel1").owlCarousel({
								items: 1,
								loop: true,
								center: true,
								margin: 5,
								navigation: true,
								dots: false,
								autoplay: 3000,
								autoplayHoverPause: false,
								rewindNav:false
							});
							
							$(".owl-carousel2").owlCarousel({
								items: 1,
								loop: true,
								center: true,
								margin: 5,
								navigation: true,
								dots: false,
								autoplay: 3000,
								autoplayHoverPause: false,
								rewindNav:false
							});
						  
							function initialize() {
							var mapOptions = {
				
								disableDefaultUI: true,
								scrollwheel: false,
								zoom: 13,
								styles: [
									{
										"featureType": "all",
										"elementType": "geometry",
										"stylers": [
											{
												"lightness": "-9"
											},
											{
												"visibility": "simplified"
											},
											{
												"saturation": "-100"
											}
										]
									},
									{
										"featureType": "landscape",
										"elementType": "labels",
										"stylers": [
											{
												"visibility": "off"
											}
										]
									},
									{
										"featureType": "poi",
										"elementType": "labels",
										"stylers": [
											{
												"visibility": "off"
											}
										]
									},
									{
										"featureType": "road",
										"elementType": "geometry",
										"stylers": [
											{
												"lightness": 57
											}
										]
									},
									{
										"featureType": "road",
										"elementType": "labels.text.fill",
										"stylers": [
											{
												"visibility": "on"
											},
											{
												"lightness": "26"
											},
											{
												"saturation": "0"
											},
											{
												"color": "#818181"
											}
										]
									},
									{
										"featureType": "road",
										"elementType": "labels.icon",
										"stylers": [
											{
												"visibility": "off"
											}
										]
									},
									{
										"featureType": "transit",
										"elementType": "labels",
										"stylers": [
											{
												"visibility": "off"
											}
										]
									},
									{
										"featureType": "water",
										"elementType": "labels",
										"stylers": [
											{
												"visibility": "off"
											}
										]
									}
								]


							};
				
							
							
								var center1 = {
									lat: 29.045089,
									lng: -95.452510
								};
				
								mapOptions['center'] = center1;
				
								var map1 = new google.maps.Map(document.getElementById('map_area'), mapOptions);
				
								var marker = new google.maps.Marker({
									position: {
										lat: 29.045089,
									    lng: -95.452510
									},
									map: map1,
									title: 'Boulder',
									icon: 'images/map_pin.png'
								});
				
								google.maps.event.addDomListener(window, 'resize', function() {
								  map1.setCenter(center1);
								});
							
								
							
						}
				
						google.maps.event.addDomListener(window, 'load', initialize);
				
							
				});
				
				
})(jQuery);