/* global $, alert, console*/

// loader
$(document).ready(function(){
  $(".loader").delay(2000).fadeOut('slow');
});

// Go to top
var mybutton = document.getElementById('myBtn');

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




$(function() {

    'use strict';
      // Trigger Nice Scroll Plugin 

    $('html').niceScroll({
      cursorcolor: '#f7600e',
      cursorwidth: 10,
      cursorborderradius: 0,
      cursorborder: '1px solid #f7600e'
  
    });

     // Change Header Height
  
    $('.header').height($(window).height());
  

    // Scroll To Features  

    $('.header .arrow i').click(function() {

      $('html, body').animate({

        scrollTop: $('.features').offset().top

      }, 1000);
  });

  $('.hire').click(function(){
    $('html, body').animate({

      scrollTop: $('.our-team').offset().top

    }, 1000);
  });

      // Show Hidden Item From Work
    
    $('.show-more').click(function(){
      $('.our-work .hidden').slideDown(1000);
    });
    
  });
  
  function sub(){
   let x =  $('#validation').val();

   if(x == ''){
     $('#validation').css('border', '1px solid red');
     $('#attention').text('Please Enter Your Email');
   } else{
     $('#validation').css('border', '1px solid #fff');
     $('#attention').text('Loading....');
   }
  }
      
 // Check testmonials
  
  let leftArrow  = $('.testmonials .fa-chevron-left');  
      rightArrow = $('.testmonials .fa-chevron-right');
  
  function checkClients(){
    if($('.client:first').hasClass('active')){
    leftArrow.fadeOut();
    }else{
    leftArrow.fadeIn();
    }
  
    if($('.client:last').hasClass('active')){
      rightArrow.fadeOut();
      }else{
      rightArrow.fadeIn();
      }
      
    }
  
    // $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
    // $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
  
  
  // $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn(); e5tsar le IF 
  
  checkClients();
  
  $('.testmonials i').click(function(){
    if($(this).hasClass('fa-chevron-right')){
      $('.testmonials .active').fadeOut(100, function(){
        $(this).removeClass('active').next('.client').addClass('active').fadeIn();
        checkClients();
      });
    }else{
      $('.testmonials .active').fadeOut(100, function(){
        $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
        checkClients();
      });
    }
  
  });

  function validation(){
    let x = $('#input1').val();
        y = $('#input2').val();

    if(x == '' && y == '') {
      $('#input1').css('border', '1px solid red');
      $('#input2').css('border', '1px solid red');
      $('#p-validation').text('Please Enter Your Email');
    } else if(x == ''){
      $('#input1').css('border', '1px solid red');
      $('#input2').css('border', '1px solid #fff');
    } else if(y == ''){
      $('#input2').css('border', '1px solid red');
      $('#input1').css('border', '1px solid #fff');
    }else{

      $('#input1').css('border','1px solid #fff');
      $('#input2').css('border','1px solid #fff');
      $('#p-validation').text('Loading...');
        
       
    }
  }
  

  

  
