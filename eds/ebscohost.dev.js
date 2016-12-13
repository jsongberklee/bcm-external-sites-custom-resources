	var $bcm_container=jQuery('<div />'),$bcm_domain="https://library.berklee.edu",$bcm_header="#toolbarControl",$bcm_footer="#footerControl";
	jQuery(document).ready(function($){
		$bcm_container.load($bcm_domain+" section", function(){
			$bcm_container.html(function(index,html){return html.replace(new RegExp('f="/','g'),'f="'+$bcm_domain+'/');});
			$bcm_container.html(function(index,html){return html.replace(new RegExp('c="/sites','g'),'c="'+$bcm_domain+'/sites');});
			var $offscreen=$bcm_container.find("#off-screen"),$topnav=$bcm_container.find(".region-top-nav"),$header=$bcm_container.find(".region-header"),$footer=$bcm_container.find(".region-footer"),$emblock=$bcm_container.find(".region-emergency-bar");
			$loginMenu = jQuery($topnav.find("#block-menu-menu-menu-login-menu a"));
			$loginMenu.text("Logout");
			$loginMenu.attr("href", "https://library.berklee.edu/user/logout");
			$topnav.find("#block-search-api-page-search-site").remove();
			$offscreen.find("#off-screen-sidebar").append($bcm_container.find('section.region-off-screen-sidebar'));
			jQuery($bcm_header).before($emblock, $topnav, $header, $offscreen);
			$topnav.find('.container').html(jQuery($bcm_header));
			jQuery($bcm_footer).before($footer);
			jQuery($bcm_footer).remove();
			console.log("REMOVE CALLED~~! 2");
			jQuery.getScript("https://cdn.jsdelivr.net/jquery.cookie/1.4.1/jquery.cookie.min.js", function(data, textStatus, jqxhr){console.log(textStatus+": cookie" );});
			jQuery.getScript($bcm_domain+"/sites/all/themes/jjamerson_lb/js/jjamerson_lb.min.js", function(data, textStatus, jqxhr){
				if(jQuery(window).width() < 768) jQuery('#logo>img').attr('src', '//lrweb.berklee.edu/sites/all/themes/jjamerson_lb/logo-lb-mobile.svg');
				else jQuery('#logo>img').attr('src', '//lrweb.berklee.edu/sites/all/themes/jjamerson_lb/logo.png');
				console.log(textStatus+": jjamerson");
			});
		});
	});


// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-73068663-1', 'auto', {'allowLinker': true});
ga('require', 'linker');
ga('linker:autoLink', ['eds.a.ebscohost.com'] );
ga('send', 'pageview');










































<!-- EDS Link List -->
<!-- song drop down -->
<script type="text/javascript" src="http://gss.ebscohost.com/ecollier/scripts/berklee_dropdown.js"></script>

<!-- streaming limiter -->
<script type="text/javascript" src="http://widgets.ebscohost.com/prod/simplekey/customlimiters/limiter.php?modifier=AND%20((PT%20Audio)%20OR%20(PT%20Audiobooks)%20OR%20(PT%20Audiocassettes)%20OR%20(PT%20Audiovisual)%20OR%20(PT%20Music)%20OR%20(PT%20(Sound%20Recordings))%20OR%20(PT%20DVDs)%20OR%20(PT%20Motion%20Pictures)%20OR%20(PT%20Videos))&label=Audio and Video&id=stream"></script>

<!-- journal limiter for pubfinder -->
<script type="text/javascript" src="//widgets.ebscohost.com/prod/simplekey/customlimiters/limiter.php?default=y&modifier=NOT%20ZT%20book&label=Search%20Journals%20Only&id=jnsearch&interface=pfi"></script>

<!-- audio radio buttons -->
<script type="text/javascript" src="//gss.ebscohost.com/ecollier/scripts/berklee_pub.js"></script>



<script type="text/javascript">
var linklistInterval = setInterval(function () {
    try {
        jQuery("div.branding-linklist");
        clearInterval(linklistInterval);
        if (document.URL.indexOf("/search") == -1) {
            jQuery("div.branding-linklist").remove();
            jQuery("div.branding-carousel").remove();
        }
    } catch (err) {

    }
},500);
</script>

<div class="branding-linklist">
<script type="eptemplate/linklist">
{
    "width": "500px",
    "linkTarget": "_blank",
    "columns": [
        {
            "header": "Quick Links",
            "linklist": [
                {
                    "label": "Interlibrary Loan Request ",
                    "URL": "https://library.berklee.edu/about-us/services/interlibrary-loan-request-form"
                },
                {
                    "label": "Ask a librarian",
                    "URL": "https://library.berklee.edu/#"
                },
                {
                    "label": "FAQ",
                    "URL": "https://library.berklee.edu/about-us/faq"
                },
                {
                    "label": "Contact Us",
                    "URL": "https://library.berklee.edu/about-us/contact-us"
                }
            ]
        },
        {
            "header": "",
            "linklist": [
                {
                    "label": "Berklee.edu",
                    "URL": "http://www.berklee.edu/"
                },
                {
                    "label": "Library",
                    "URL": "https://library.berklee.edu/"
                },
                {
                    "label": "Learning Center",
                    "URL": "http://learningcenter.berklee.edu/"
                },
                {
                    "label": "Tutoring Services",
                    "URL": "http://learningcenter.berklee.edu/Core_Music_Tutoring/"
                }
            ]
        }
    ]
}
</script>
</div>
<div class="branding-carousel">
<!--[if IE]>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<![endif]-->
<!-- BEGIN: Carousel
Profile: s8976594.main.ebook_eit.ebs11
AuthType: ip,uid
QueryValue: LO+system.nl-s8976594
-->
<style>
#carousel,#scrollfix {width: 100%;}
#carouselContainer {width: 1px;min-width: 100%;}
</style>

<div id="scrollfix" style="height:160px;">
<iframe id="carouselContainer" height="300px" src="https://widgets.ebscohost.com/prod/encryptedkey/eit/eit.php?t=themes%2Fflipster_carousel_slick%2Fxsl_auth_id.php%3Fcss%3D%2F%2Fimageserver.ebscohost.com%2Fbranding%2FFlipsterCarousel%2Fcss%2Fslick-app-theme.css&q=http%3A%2F%2Fwidgets.ebscohost.com%2Fprod%2Fencryptedkey%2Fehis%2Fwidget.php%3Fprof%3Ds8976594.main.ebook_eit%26pwd%3Debs11%26query%3DLO%252Bsystem.nl-s8976594%26db%3Dnlebk%26numrec%3D50%26format%3Dxml%26protect%3Dno%26removeehis%3D1%26pl%3D1%26smode%3D%26forcehttp%3D%26proxy%3D%26rcounturl%3D&h=&custid=s8976594&authtype=ip,uid" style="margin-top:-15px;" frameborder="0">You need a Frame Capable browser to view this content.</iframe>
</div>
<!-- END: Carousel -->
</div>
<!-- END EDS Link List -->






























<!-- BACKUP -->
<!-- Custom JS/CSS section : ebscohost.com -->
<link rel="shortcut icon" href="//library.berklee.edu/sites/all/themes/jjamerson_lb/favicon.ico" type="image/vnd.microsoft.icon">
<link rel='stylesheet' href="https://lrweb.berklee.edu/sites/all/themes/jjamerson/bcm-jj-all.css">
<link rel='stylesheet' href="https://lrweb.berklee.edu/sites/all/themes/jjamerson_lb/stylesheets/jjamerson_lb_screen.css">
<link rel='stylesheet' href="https://lrweb.berklee.edu/sites/all/themes/jjamerson_lb/stylesheets/guides.library.berklee.edu.css">
<style>#s-lib-footer-public{display:none;}</style>
<script type="text/javascript">
(function(jQuery){
	var $bcm_container=jQuery('<div class="bcm-container"></div>'),$bcm_domain="https://library.berklee.edu",$bcm_header="#toolbarControl",$bcm_footer="#footerControl";
	jQuery(document).ready(function($){
		$bcm_container.load($bcm_domain+" section", function(){
			$bcm_container.html(function(index,html){return html.replace(new RegExp('f="/','g'),'f="'+$bcm_domain+'/');});
			$bcm_container.html(function(index,html){return html.replace(new RegExp('c="/sites','g'),'c="'+$bcm_domain+'/sites');});
			var $offscreen=$bcm_container.find("#off-screen"),$topnav=$bcm_container.find(".region-top-nav"),$header=$bcm_container.find(".region-header"),$footer=$bcm_container.find(".region-footer"),$emblock=$bcm_container.find(".region-emergency-bar");
			$loginMenu = jQuery($topnav.find("#block-menu-menu-menu-login-menu a"));
			$loginMenu.text("Logout");
			$loginMenu.attr("href", "https://library.berklee.edu/user/logout");
			$topnav.find("#block-search-api-page-search-site").remove();
			$offscreen.find("#off-screen-sidebar").append($bcm_container.find('section.region-off-screen-sidebar'));
			jQuery("#s-la-public-footer").remove();
			jQuery($bcm_header).before($emblock, $topnav, $header, $offscreen);
			jQuery($bcm_header+" .region-header .container").css("width","90%");
			jQuery($bcm_header+" .region-header .container a i").css("color","90%");
			jQuery($bcm_footer).before($footer);
			jQuery($bcm_footer+" .footer-menus .content p").css("text-align","center");
			jQuery.getScript("https://cdn.jsdelivr.net/jquery.cookie/1.4.1/jquery.cookie.min.js", function(data, textStatus, jqxhr){console.log(textStatus+": cookie" );});
			jQuery.getScript($bcm_domain+"/sites/all/themes/jjamerson_lb/js/jjamerson_lb.min.js", function(data, textStatus, jqxhr){
				if(jQuery(window).width() < 768) jQuery('#logo>img').attr('src', '//lrweb.berklee.edu/sites/all/themes/jjamerson_lb/logo-lb-mobile.svg');
				else jQuery('#logo>img').attr('src', '//lrweb.berklee.edu/sites/all/themes/jjamerson_lb/logo.png');
				console.log(textStatus+": jjamerson");
			});
		});
	});
})(jQuery);
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-73068663-1', 'auto', {'allowLinker': true});
  ga('require', 'linker');
  ga('linker:autoLink', ['eds.a.ebscohost.com'] );
  ga('send', 'pageview');
</script>
<!-- END Custom JS/CSS section -->