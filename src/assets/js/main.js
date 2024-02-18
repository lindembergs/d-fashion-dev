
  let swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
      },
      grabCursor: true,
      loop: true,
      simulateTouch: true,
      breakpoints: {
          480: {
              slidesPerView: 1,
              spaceBetween: 10,
              // ... outras configurações para dispositivos móveis ...
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 15,
              // ... outras configurações para tablets ...
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 20,
              // ... outras configurações para tablets maiores ou desktops menores ...
          }
      }
  });

