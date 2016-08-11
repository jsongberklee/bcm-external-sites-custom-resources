/* JAVASCRIPT: On Application Load */


jQuery('a.homeLink').text('Library Home');jQuery('a.course-reserves-link').attr('href', '//drive.google.com/drive/u/0/folders/0BxGv2MwTy4BpMzk4YzE4NGEtMzViZC00NjdmLTliN2QtNzM1YzI0YzE1ODcz');jQuery('ul.nav-pills').append('<li><a class="jsong-reference" href="https://docs.google.com/leaf?id=0BxGv2MwTy4BpMTZlNWVmMTktMTZmMy00N2ZlLTgxYjYtYTg3YzhjZWM4OGZj&hl=en_US">Reference</a></li>','<li><a class="jsong-periodicals" href="//sites.google.com/a/bostonconservatory.edu/portal/academic-resources/library-resources/periodicals">Periodicals</a></li>','<li><a class="jsong-search-tips" href="//sites.google.com/a/bostonconservatory.edu/portal/academic-resources/library-resources/library-tips-for-research">Research Tips</a></li>');if(document.referrer.search("albert-alphin-library") > -1) setTimeout(function() {angular.element('.pull-right.login .ng-scope').scope().loginDlgOpen();}, 1000);


/* / JAVASCRIPT: On Application Load */



/* JAVASCRIPT: opacuserjs */
$(document).ready(function(){
$(".yui-u #login").hide();
$("#auth div").html("<h5>Don\'t have a library account?</h5><p>Try your Boston Conservatory login.  If you still have trouble, please contact the library.</p><p><h5>Don\'t have a password yet?</h5><p>The default password for new accounts is library.  Please change it after your first login.  If you have forgotten your password, contact the library to have it reset.</p>");
$('#moresearches a:eq(3)').attr('href', '//drive.google.com/drive/u/0/folders/0BxGv2MwTy4BpMzk4YzE4NGEtMzViZC00NjdmLTliN2QtNzM1YzI0YzE1ODcz');
$('#moresearches').prepend('<a class="jsong-home" href="/">Library Home</a>').append('<a class="jsong-reference" href="https://docs.google.com/leaf?id=0BxGv2MwTy4BpMTZlNWVmMTktMTZmMy00N2ZlLTgxYjYtYTg3YzhjZWM4OGZj&hl=en_US">Reference</a>','<a class="jsong-periodicals" href="//sites.google.com/a/bostonconservatory.edu/portal/academic-resources/library-resources/periodicals">Periodicals</a>','<a class="jsong-search-tips" href="//sites.google.com/a/bostonconservatory.edu/portal/academic-resources/library-resources/library-tips-for-research">Research Tips</a>').appendTo($('#header-wrapper'));
});

