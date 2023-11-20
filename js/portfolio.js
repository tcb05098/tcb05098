$(document).ready(function(){
  let screen = $('.video-wrap li')
  console.log(screen)
  screen.each(function(index,screen){
    
    $(this).click(function(){
      // console.log($(this))
      $('.window-mask, .modal-content').fadeIn(500)
      // console.log(index)
      
      // swiper-slide
      new Swiper(".sw-modal", {
        initialSlide:index,
        
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        effect: "fade"
      })
    });        
  })
  $('.window-mask').click(function(){
    $('.window-mask, .modal-content').fadeOut(500)   
         
})
})