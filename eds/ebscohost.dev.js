(function($){
	var bcm_domain="https://library.berklee.edu";
	var footer_control="#footerControl";
	var $bcm_temp_container=$('<div />');
	var $toolbar_control=$("#toolbarControl");
	var $bcm_header_wrapper=$('<div id="bcm-header-wrapper" class="bcm-header-wrapper">Loading...</div>');
			$toolbar_control.after($bcm_header_wrapper);
	$bcm_temp_container.load(bcm_domain+" section", function(){
		$bcm_temp_container.html(function(index,html){
			return html.replace(new RegExp('f="/','g'),'f="'+bcm_domain+'/');
		});
		$bcm_temp_container.html(function(index,html){
			return html.replace(new RegExp('c="/sites','g'),'c="'+bcm_domain+'/sites');
		});
		//var $offscreen=$bcm_temp_container.find("#off-screen");
		var $topnav=$bcm_temp_container.find(".region-top-nav");
		var $header=$bcm_temp_container.find(".region-header");
		var $footer=$bcm_temp_container.find(".region-footer");
		var $emblock=$bcm_temp_container.find(".region-emergency-bar");
		$loginMenu = $($topnav.find("#block-menu-menu-menu-login-menu a"));
		$loginMenu.text("Logout");
		$loginMenu.attr("href", "https://library.berklee.edu/user/logout");
		$topnav.find("#block-search-api-page-search-site").remove();
		//$offscreen.find("#off-screen-sidebar").append($bcm_temp_container.find('section.region-off-screen-sidebar'));
		//$(toolbar_control).before($emblock, $topnav, $header, $offscreen);
		$header.find('.sub-title a').html("<i class=\"icon fa-search\" aria-hidden=\"true\"></i>[SITE NAME ?] SEARCH");
		$bcm_header_wrapper.before($emblock, $topnav, $header).remove();
		$topnav.find('.container').html($toolbar_control);
		$(footer_control).replaceWith($footer);
		jQuery.getScript("https://cdn.jsdelivr.net/jquery.cookie/1.4.1/jquery.cookie.min.js", function(data, textStatus, jqxhr){console.log(textStatus+": cookie" );});
		jQuery.getScript(bcm_domain+"/sites/all/themes/jjamerson_lb/js/jjamerson_lb.min.js", function(data, textStatus, jqxhr){
			if($(window).width() < 768) $('#logo>img').attr('src', '//lrweb.berklee.edu/sites/all/themes/jjamerson_lb/logo-lb-mobile.svg');
			else $('#logo>img').attr('src', '//lrweb.berklee.edu/sites/all/themes/jjamerson_lb/logo.png');
			console.log(textStatus+": jjamerson");
		});
		$("div.bh-container").remove();
	});
})(jQuery);

// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-73068663-1', 'auto', {'allowLinker': true});
ga('require', 'linker');
ga('linker:autoLink', ['eds.a.ebscohost.com'] );
ga('send', 'pageview');
