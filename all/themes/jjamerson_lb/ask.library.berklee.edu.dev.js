// minification process by https://jscompress.com/
(function($){

	var $bcm_container=$("<div />");
	var $bcm_domain="https://library.berklee.edu";
	var $bcm_header="#bcm-lib-header";
	var $bcm_footer="#bcm-lib-footer";

	$(document).ready(function($){

		$bcm_container.load($bcm_domain+" section", function(){

			$bcm_container.html(function(index,html){
				return html.replace(new RegExp('f="/','g'),'f="'+$bcm_domain+'/');
			});

			$bcm_container.html(function(index,html){
				return html.replace(new RegExp('c="/sites','g'),'c="'+$bcm_domain+'/sites');
			});

			var $offscreen=$bcm_container.find("#off-screen");
			var $topnav=$bcm_container.find(".region-top-nav");
			var $header=$bcm_container.find(".region-header");
			var $footer=$bcm_container.find(".region-footer");
			var $feed_back_simple=$bcm_container.find(".region-stripes #feedback_simple");
			var $emblock=$bcm_container.find(".region-emergency-bar");

			$loginMenu = $($topnav.find("#block-menu-menu-menu-login-menu a"));
			$loginMenu.text("Logout");
			$loginMenu.attr("href", "https://library.berklee.edu/user/logout");
			$topnav.find("#block-search-api-page-search-site").remove();
			$offscreen.find("#off-screen-sidebar").append($bcm_container.find('section.region-off-screen-sidebar'));
			$("#s-la-public-footer").remove();
			$($bcm_header).append($emblock, $topnav, $header, $offscreen, $feed_back_simple);
			$($bcm_header+" .region-header .container").css("width","90%");
			$($bcm_header+" .region-header .container a i").css("color","90%");
			$($bcm_footer).append($footer);
			$($bcm_footer+" .footer-menus .content p").css("text-align","center");
			$.getScript("https://cdn.jsdelivr.net/jquery.cookie/1.4.1/jquery.cookie.min.js", function(data, textStatus, jqxhr){});
			$.getScript($bcm_domain+"/sites/all/themes/jjamerson_lb/js/jjamerson_lb.min.js", function(data, textStatus, jqxhr){
				if($(window).width() < 768) $('#logo>img').attr('src', '//lrweb.berklee.edu/sites/all/themes/jjamerson_lb/logo-lb-mobile.svg');
				else $('#logo>img').attr('src', '//lrweb.berklee.edu/sites/all/themes/jjamerson_lb/logo.png');
			});

		});

	});

})(jQuery);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-73068663-1', 'auto', {'allowLinker': true});
ga('require', 'linker');
ga('linker:autoLink', ['guides.library.berklee.edu'] );
ga('send', 'pageview');