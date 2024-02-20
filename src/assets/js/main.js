fetch('dados.json')
      .then(response => response.json())
      .then(jsonData => {
        function createCarousel(containerId, items) {
          const container = document.getElementById(containerId);
          const swiperWrapper = document.createElement('div');
          swiperWrapper.classList.add('swiper-wrapper');

          items.forEach(item => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide', 'card');
            console.log(items)

            // Adaptação para o formato do card
            slide.innerHTML = `<div class="card">
            <img src="${item.image}" alt="${item.product_name}" />
                               <div class="card-info">
                                  <p>${item.product_name}</p>
                                  <div class="price-btn">
                                    <span>${item.current_price}</span>
                                    <span>${item.previous_price}</span>
                                    <button><img src="src/assets/icons/+.svg" alt="" /></button>
                                  </div>
                               </div>`;

            swiperWrapper.appendChild(slide);
          });

          container.appendChild(swiperWrapper);

          new Swiper(`#${containerId}`, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            navigation: {
              nextEl: `#${containerId}-next`,
              prevEl: `#${containerId}-prev`,
            },
          });
        }

        // Filtrar itens por classe e criar carrosséis
        const conjuntos = jsonData.find(category => category.class === 'Conjunto');
        const tshirts = jsonData.find(category => category.class === 'T-shirts');
        const casacos = jsonData.find(category => category.class === 'Casacos');

        createCarousel('conjuntos-carousel', conjuntos.product);
        createCarousel('tshirts-carousel', tshirts.product);
        createCarousel('casacos-carousel', casacos.product);
      });

//   let swiper = new Swiper(".mySwiper", {
//       slidesPerView: 5,
//       spaceBetween: 30,
//       pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//           type: "bullets"
//       },
//       grabCursor: true,
//       loop: true,
//       simulateTouch: true,
//       breakpoints: {
//           480: {
//               slidesPerView: 1,
//               spaceBetween: 10,
//               // ... outras configurações para dispositivos móveis ...
//           },
//           768: {
//               slidesPerView: 2,
//               spaceBetween: 15,
//               // ... outras configurações para tablets ...
//           },
//           1024: {
//               slidesPerView: 3,
//               spaceBetween: 20,
//               // ... outras configurações para tablets maiores ou desktops menores ...
//           }
//       }
//   });

