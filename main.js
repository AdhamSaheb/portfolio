
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navbar").css("background-color" , "#008785");
          $(".navbar a").css("color" , "white");
          $(".navbar-brand").css("color" , "white");
          $(".navbar-toggler-icon ").css("background-image" , "");

        }
  
        else{
            $(".navbar").css("background-color" , "transparent");  	
            $(".navbar a").css("color" , "#7C7C7C");
            $(".navbar-brand").css("color" , "#008785");
        }
    })
  }
  
  )


//   window.onload = function() {
//     document.getElementById('bzu-logo').classList.remove('notLoaded');
//   }