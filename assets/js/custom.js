$(document).ready(function () {
  

  if ($(window).width() > 992) {
    $(".navbarMenu  .dropdown").hover(
      function () {
        $(this).find(".dropdown-menu").first().stop(true, true).slideDown(150);
        $(this).children(".dropdown-toggle").addClass("active");
      },
      function () {
        $(this).find(".dropdown-menu").first().stop(true, true).slideUp(105);
        $(this).children(".dropdown-toggle").removeClass("active");
      }
    );
  }




});



/*



class="clickable" data-area="Riyadh"
class="clickable" data-area="Jouf"

class="clickable" data-area="AlBaha"
class="clickable" data-area="Makkah"
class="clickable" data-area="Asir"
class="clickable" data-area="northernBorderRegion"
class="clickable" data-area="Najran"
class="clickable" data-area="Jazan"
class="clickable" data-area="easternRegion"
*/



$(".mission-vision .inner-cont >div").click(function () {
 $(".mission-vision .inner-cont >div").removeClass("activ").addClass("remove-cont")
  $(this).toggleClass("activ").removeClass("remove-cont");

});





// top functions

$(document).ready(function () {

  // color func
  $(".black-white").on("click", function (e) {
    $("body").toggleClass("contrast");
  
    e.stopPropagation();
   
  });
  
  
  
    /* --- Font sizing Function --- */
    $('#increase-font').click(function(){
      modifyFontSize('html','increase');
    });
    $('#decrease-font').click(function(){
      modifyFontSize('html','decrease')
    });
    $('#reset-font').click(function(){
      modifyFontSize('html','reset')
    });
  
  });
  
    function modifyFontSize(MyElement,flag){
  
      var HtmlElement = $(MyElement);
      var currentFontSize = parseInt (HtmlElement.css('font-size'));
      
      if (flag =='increase' & currentFontSize < 18 )
          currentFontSize += 1;
      else if (flag == 'decrease' & currentFontSize >= 15 )
          currentFontSize -= 1;
      else if (flag == 'reset')
      currentFontSize = 16;
  
      HtmlElement.css('font-size', currentFontSize);
  
      // console.log(currentFontSize);
  
    }