const subtractBtn = document.querySelector("#btn-subtract");
const sumBtn = document.querySelector("#btn-sum");
const totalValue = document.querySelector('.total-value');
const inputValue = document.querySelector('#input-value');
const trashImg = document.querySelector('.btn-input-trash .trash-img img'); // Ajuste aqui

function updateTotalValue() {
  const currentPrice = parseFloat(document.querySelector('#corrent-price').innerText);
  const inputValueInt = parseInt(inputValue.value);
  const totalPrice = currentPrice * inputValueInt;
  totalValue.innerText = `$${totalPrice.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get('productName');
  const currentPrice = urlParams.get('currentPrice');
  const image = urlParams.get('image');
  const color = urlParams.get('color');
  const size = urlParams.get('size');

  document.querySelector('.img-product-cart').src = decodeURIComponent(image);
  document.querySelector('#product-description').innerText = productName;
  document.querySelector('#corrent-price').innerText = parseFloat(currentPrice).toFixed(2);
  document.querySelector('#selected-color').innerText = color;
  document.querySelector('#selected-size').innerText = size;

  updateTotalValue();
});

subtractBtn.addEventListener('click', () => {
  if (inputValue.value > 0) {
    inputValue.value--;
    updateTotalValue();
  }
});

sumBtn.addEventListener('click', () => {
  inputValue.value++;
  updateTotalValue();
});

trashImg.addEventListener('click', () => {

  const productName = document.querySelector('#product-description').innerText;
  const currentPrice = parseFloat(document.querySelector('#corrent-price').innerText);
  const quantity = parseInt(inputValue.value);

  const totalPriceToRemove = currentPrice * quantity;


  let cart = localStorage.getItem('cart');
  cart = cart ? JSON.parse(cart) : [];

  const indexToRemove = cart.findIndex(item => item.productName === productName);


  if (indexToRemove !== -1) {
    cart.splice(indexToRemove, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const productContainer = document.querySelector('.left-container-modal');
  productContainer.innerHTML = ''; 

  
  inputValue.value = 1;
  totalValue.innerText = '$0.00'; 
});
