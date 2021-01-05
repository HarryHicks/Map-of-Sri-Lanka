$(document).ready(function(){
  $('.svg-menu__path__seleccion').on("click", function(e){
    $('.active').removeClass('active');
    $(this).addClass('active');
    //alert('evento');
  });
});