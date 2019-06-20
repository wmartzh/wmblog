
import $ from 'jquery';

$(document).ready(function(){
   if($(window).width < 900){
        $('#normal-nav').hide()
        $('#wrap-logo').removeClass('brand-logo').addClass('brand-logo-wraped');
   }
   $('#test').val('test');

});