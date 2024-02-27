
const addToCartBtn = document.querySelector('#add-cart-btn')
const openCartBtn = document.querySelector('#open-cart-btn')
const colorOptionTargets = document.querySelectorAll('.color-option-target');
let selectedColor = ''
const sizeOptionTargets = document.querySelectorAll('.size-option-target');
let selectedSize = ''

for (let i = 0; i < colorOptionTargets.length; i++) {
  const colorOption = colorOptionTargets[i];
  
  colorOption.addEventListener('click', (e) => {
   selectedColor = e.target.getAttribute('data-color');
    console.log(selectedColor);
    let productColor = document.querySelector("#product-color")
    productColor.textContent = `Cor: ${selectedColor}`
  });

  
}
for (let i = 0; i < sizeOptionTargets.length; i++) {
  const sizeOption = sizeOptionTargets[i];
  
  sizeOption.addEventListener('click', (e) => {
   selectedSize = e.target.textContent
    console.log(selectedSize);
  });

  
}





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
  document.querySelector('.price span').innerHTML = currentPrice;
  document.querySelector('.old-price').innerHTML = oldPrice;
});



const addToCart = () => {
  alert('Produto adicionado ao carrinho')
  
}

addToCartBtn.addEventListener('click', addToCart)

function attCartUrl () {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get('productName');
  const currentPrice = urlParams.get('currentPrice');
  const image = urlParams.get('image');
  const color = urlParams.get('color');
  const size = urlParams.get('size');
  
  
  
  if (productName && currentPrice && image && color && size) {
    const cartLink = document.getElementById('openModalBtn');
    const cartHref = `./cart.html?productName=${encodeURIComponent(productName)}&currentPrice=${encodeURIComponent(currentPrice)}&image=${encodeURIComponent(image)}&color=${encodeURIComponent(selectedColor)}&size=${encodeURIComponent(selectedSize)}`;
    cartLink.parentElement.setAttribute('href', cartHref);
  }
}
openCartBtn.addEventListener('click', attCartUrl)



