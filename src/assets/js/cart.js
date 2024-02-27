
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('productName');
    const currentPrice = urlParams.get('currentPrice');
    const image = urlParams.get('image');
    // modal
    const color = urlParams.get('color');
    const size = urlParams.get('size');
   

    document.querySelector('.img-product-cart').src = decodeURIComponent(image);
    document.querySelector('.product-description').textContent = productName;
    document.querySelector('.price span').textContent = currentPrice;
    // modal
    document.querySelector('.product-modal-img').src = decodeURIComponent(image);
    document.querySelector('.product-description').textContent = productName;
    document.querySelector('.color-modal').textContent = color;
    document.querySelector('.color-size-cart span').textContent = size;
  });
  
  