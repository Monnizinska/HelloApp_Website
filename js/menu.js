$(".scroll").each(function() {  
    $($(this)).click(function() { 
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
    });
  });
  
//   $(function(){
      
//       let mainNav = $('#main-nav');
//      $(window).scroll(function(){
         
//          if (window.scrollY > ($('#main-header').height()/10)) {
//             $("#main-nav").css("background-color", "rgba(37, 0, 126, 0.5)");
//             $('#logo').css("height", "30px");
//          }
         
//          if (window.scrollY < ($('#main-header').height()/10)) {
//             $("#main-nav").css("background-color", "transparent");
//             $('#logo').css("height", "50px");
//          }
         
//      });
      
//   });
  