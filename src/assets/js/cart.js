const subtractBtn = document.querySelector("#btn-subtract");
const sumBtn = document.querySelector("#btn-sum");
let inputValue = document.querySelector('#input-value');
console.log(inputValue);

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get('productName');
  const currentPrice = urlParams.get('currentPrice');
  const image = urlParams.get('image');
  const color = urlParams.get('color');
  const size = urlParams.get('size');
  
  console.log('productName:', productName);
  console.log('currentPrice:', currentPrice);
  console.log('image:', image);
  console.log('color:', color);
  console.log('size:', size);
  
  document.querySelector('.img-product-cart').src = decodeURIComponent(image);
  document.querySelector('#product-description').innerText = productName;
  document.querySelector('#corrent-price').innerText = currentPrice;
  document.querySelector('#selected-color').innerText = color;
  document.querySelector('#selected-size').innerText = size;
});

subtractBtn.addEventListener('click', () => {
  if (inputValue.value > 0) {
    inputValue.value--;
  }
});

sumBtn.addEventListener('click', () => {
  inputValue.value++;
});
