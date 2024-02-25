
const addToCartBtn = document.querySelector('#add-cart-btn')

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('productName');
    const currentPrice = urlParams.get('currentPrice');
    const oldPrice = urlParams.get('oldPrice');
    const image = urlParams.get('image');
   

    document.querySelector('.left-container img').src = decodeURIComponent(image);
    document.querySelector('.right-container p').textContent = productName;
    document.querySelector('.price span').textContent = currentPrice;
    document.querySelector('.old-price').textContent = oldPrice;
    document.querySelector('.right-container p').textContent = productName;
    document.querySelector('.price span').textContent = currentPrice;
    document.querySelector('.old-price').textContent = oldPrice;
  });

  document.addEventListener('DOMContentLoaded',  ()  => {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('myModal');
  
    openModalBtn.addEventListener('click',  ()  => {
      modal.style.display = 'block';
    });
  
    closeModalBtn.addEventListener('click',  ()  => {
      modal.style.display = 'none';
    });

    window.addEventListener('click',  (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  const addToCart = () => {
   alert('Produto adicionado ao carrinho')
  }
  
  addToCartBtn.addEventListener('click', addToCart)
  