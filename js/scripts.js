/*contact form*/
$(document).ready(function(){

   // jQuery methods go here...



$(".emailIcon").click(function(){
	$(".emailIcon").hide();
    $(".container").show(1000);
});


$("#contact").onsubmit(function(){
	$("form").hide(1000);
    $(".contactContainer").append("<h2>Thanks!  Talk to you soon!</h2>");
});



});