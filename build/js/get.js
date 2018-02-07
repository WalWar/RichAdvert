var url_string = window.location.href;/*"http://www.example.com/t.html?pid=12&lid=13"; */
var url = new URL(url_string);
var pid = url.searchParams.get("pid");
document.getElementById("pid").value = pid;
var lid = url.searchParams.get("lid");
document.getElementById("lid").value = lid;


$(function(){
			$('.btnlink').on('click', function(e){
			  $('html,body').stop().animate({ scrollTop: $('#form').offset().top }, 1000);
			  e.preventDefault();
			});
		});