window.addEventListener("scroll",function() {
	var header=document.querySelector("header");
	header.classList.toggle("sticky",window.scrollY>0);

});

function toggleMenu(){
	var menuToggle=document.querySelector(".toggle");
	var menu=document.querySelector(".menu");
	menuToggle.classList.toggle("active");
	menu.classList.toggle("active");
}
/*

$(document).ready(function(){
		var bottom=$("header").outerHeight();
		var header=$("header").offset().top + bottom;
     $(window).scroll(function(){
          // header fixed only when window width greater than 991px
         if($(window).width()>991){
     	if($(window).scrollTop()>=header){
     		$("header").addClass("sticky")
     	}
     	else{
     	 $("header").removeClass("sticky")	
     	}
     }
     })

     // navbar active link

     $(".navbar ul li a").click(function(){
     	 $(".navbar ul li a").removeClass("active")
     	 $(this).addClass("active");
     })
  
    $(".ham-burger").click(function(){
    	$(this).toggleClass("active")
    	$(".navbar").toggleClass("open");
    })

	})
    */