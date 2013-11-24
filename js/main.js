
$(document).ready(function(){
  //$('#createit').parallax("50%", 0.1);
  //$('#download').parallax("50%", 0.2);
  //$('#shown').parallax("50%", 0.3);
  //$('#whole-iphone').parallax("50%", 0.4);
  //$('#howto').parallax("50%", 0.5);
  //$('#banner').parallax("50%", 0.6);

// $(window).stellar();


  $('a.navigation').click(function(event) {
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top-14}, 800);
  });

// var c1 = new $.Color( 'rgb(246, 246, 246)' );
// var c2 = new $.Color( 'rgb(222, 246, 222)' );
// var c3 = new $.Color( 'rgb(218, 241, 231)' );
// var c4 = new $.Color( 'rgb(227, 217, 241)' );

// var scroll_pos = 0;
// var a0 = 0; 
// var a1 = $("#pg1").height(); 
// var a2 = a1+$("#pg2").height(); 
// var a3 = a2+$("#pg3").height(); 
// var a4 = $("body").height()

// $(document).scroll(function() {
//     pos = $(this).scrollTop(); 
//     if(pos >= a0 && pos <= a1 ) {
//         var scrolled = pos / ( a1 - a0 );
//         var newRed = c1.red() + ( ( c2.red() - c1.red() ) * scrolled );
//         var newGreen = c1.green() + ( ( c2.green() - c1.green() ) * scrolled );
//         var newBlue = c1.blue() + ( ( c2.blue() - c1.blue() ) * scrolled );
//         var newColor = new $.Color( newRed, newGreen, newBlue );
//         $('.bgColor').animate({backgroundColor: newColor},{duration: 1})
//     }
//     if(pos > a1 && pos <= a2 ) {
//         var scrolled = (pos / ( a2 - a1 ))-1;
//         var newRed = c2.red() + ( ( c3.red() - c2.red() ) * scrolled );
//         var newGreen = c2.green() + ( ( c3.green() - c2.green() ) * scrolled );
//         var newBlue = c2.blue() + ( ( c3.blue() - c2.blue() ) * scrolled );
//         var newColor = new $.Color( newRed, newGreen, newBlue );
//         $('.bgColor').animate({backgroundColor: newColor},{duration: 1})
//     }
//     if(pos > a2 && pos <= a3 ) {
//         var scrolled = (pos / ( a3 - a2 ))-2;
//         var newRed = c3.red() + ( ( c4.red() - c3.red() ) * scrolled );
//         var newGreen = c3.green() + ( ( c4.green() - c3.green() ) * scrolled );
//         var newBlue = c3.blue() + ( ( c4.blue() - c3.blue() ) * scrolled );
//         var newColor = new $.Color( newRed, newGreen, newBlue );
//         $('.bgColor').animate({backgroundColor: newColor },{duration: 1})
//     }
//     if(pos > a3 && pos <= a4 ) {
//         $('.bgColor').animate({backgroundColor: c4},{duration: 1})
//     } 
// });


})



