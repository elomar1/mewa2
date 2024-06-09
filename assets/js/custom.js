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
