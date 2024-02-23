var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
   grabCurser:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let slider = tns({
    container :'#my-sliderr',
    "sliderBy" : "1",
    "speed" : 400,
    "nav": false,
    autoplay: true,
    controls: false,


  })