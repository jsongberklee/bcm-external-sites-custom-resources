// minification process by https://jscompress.com/

var track_call = setInterval(function () {

  try {
    jQuery().jquery;
    clearInterval(track_call);
    edsBcm();
  }
  catch (err) {
	  console.log('wait to load jQuery.');
  }

}, 10);

function edsBcm(){

	var bcm_domain="https://library.berklee.edu";

	var $bcm_temp_container=$('<div />');

	var $toolbar_control=$("#toolbarControl");

	var $footer_control=$("#footerControl");
	var $mobile_site=$footer_control.find('#footerLinks a[data-mobilesitelink]').parent();

	var $bcm_header_wrapper=$('<div id="bcm-header-wrapper" class="bcm-header-wrapper">Loading...</div>');

	var $guest_login = $('.guest-login');
			$toolbar_control.after($bcm_header_wrapper).find('#menuList').before($guest_login);

	$bcm_temp_container.load(bcm_domain+" section", function(){

		$("div.bh-container").remove();

		$bcm_temp_container.html(function(index,html){
			return html.replace(new RegExp('f="/','g'),'f="'+bcm_domain+'/');
		});

		$bcm_temp_container.html(function(index,html){
			return html.replace(new RegExp('c="/sites','g'),'c="'+bcm_domain+'/sites');
		});

		var $topnav=$bcm_temp_container.find(".region-top-nav");
		var $header=$bcm_temp_container.find(".region-header");
		var $footer=$bcm_temp_container.find(".region-footer");
		var $feed_back_simple=$bcm_temp_container.find(".region-stripes #feedback_simple");
		var $emblock=$bcm_temp_container.find(".region-emergency-bar");

		$topnav.find("#block-search-api-page-search-site").remove();

		//$header.find('.sub-title a').html("<i class=\"icon fa-search\" aria-hidden=\"true\"></i>[SITE NAME ?] SEARCH"); // to change site title
		$bcm_header_wrapper.before($emblock, $topnav, $header, $feed_back_simple).remove();
		$topnav.find('.container').html($toolbar_control);
		$footer.find('.footer-block ul.bar').append($mobile_site);
		$footer_control.replaceWith($footer);

		$.getScript("https://cdn.jsdelivr.net/jquery.cookie/1.4.1/jquery.cookie.min.js", function(data, textStatus, jqxhr){
			//console.log(textStatus+": cookie loaded" );
		}); // end getScript

	}); // end onLoad

}// end edsBcm()

// google analytics
/*
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-73068663-1', 'auto', {'allowLinker': true});
ga('require', 'linker');
ga('linker:autoLink', ['ebscohost.com'] );
ga('send', 'pageview');
*/
