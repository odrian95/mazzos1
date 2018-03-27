var monkeyList = new List('test-list', { 
  valueNames: ['name']
});

$(function () {
  $('[data-toggle="popover"]').popover({
      trigger: 'hover'
    
      
        });
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.cover').css({
        'transform' : 'translate(0px, '+ wScroll /-25 + '%)'
    });
    if(wScroll >= 333) {
    
     //console.log('Hi!');
        $('.banner').addClass('scrolled');
    }

});

        
       

    
