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
  });