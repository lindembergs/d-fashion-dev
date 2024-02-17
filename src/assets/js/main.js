document.addEventListener("DOMContentLoaded",  () => {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      grabCursor: true,
      loop: true,
    });
  });