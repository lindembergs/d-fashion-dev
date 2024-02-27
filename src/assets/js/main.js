

 export function getData(){
    fetch('dados.json')
    .then(response => response.json())
    .then(data => {
      function createCarousel(containerId, items) {
        const container = document.getElementById(containerId);
        const swiperWrapper = document.createElement('div');
        swiperWrapper.classList.add('swiper-wrapper');
       
  
        items.map(item => {
          const slide = document.createElement('div');
          slide.classList.add('swiper-slide', 'card');
  
          slide.innerHTML = `<img src="${item.image}" alt="${item.product_name}" />
                             <div class="card-info">
                                <p>${item.product_name}</p>
                                <div class="price-btn">
                                  <span>${item.current_price}</span>
                                  <span class="old-price">${item.old_price}</span>
                                  <button><a href="./product.html?productName=${encodeURIComponent(item.product_name)}&currentPrice=${encodeURIComponent(item.current_price)}&oldPrice=${encodeURIComponent(item.old_price)}&image=${encodeURIComponent(item.image)}&color=${encodeURIComponent('Branco')}&size=${encodeURIComponent('M')}"><img src="src/assets/icons/+.svg" alt="" /></a></button>
                                </div>
                             </div>`;
  
          swiperWrapper.appendChild(slide);
        });
  
        container.appendChild(swiperWrapper);
  
        new Swiper(`#${containerId}`, {
          // effect: 'coverflow',
          slidesPerView: 5,
          parallax: true,
          bulletActiveClass: true,
          dynamicBullets: true,
          updateOnWindowResize: true,
          spaceBetween: 30,
          rewind: true,
          loop: false,
          longSwipes: true,
          grabCursor: true,
          type: 'bullets',
          freeMode: true,
          freeModeMomentum: false,
          freeModeMomentumRatio: 0.5,
          freeModeMomentumBounce: false,  
          freeModeSticky: true,           
          freeMode: {
            enabled: true,
            sticky: true,
          },
          // autoplay: {
          //   delay: 20000,
          // },
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
          controller: {
            inverse: true,
          },
          pagination: {
            el: `.swiper-pagination`,
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
              // effect: 'cards'
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            }
          }
        });
      }
  
      const conjuntos = data.find(category => category.class === 'Conjunto');
      const tshirts = data.find(category => category.class === 'T-shirts');
      const casacos = data.find(category => category.class === 'Casacos');
  
      createCarousel('conjuntos-carousel', conjuntos.product);
      createCarousel('tshirts-carousel', tshirts.product);
      createCarousel('casacos-carousel', casacos.product);
    });
  }
  getData()


