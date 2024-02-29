document.addEventListener('DOMContentLoaded', () => {
  const colorOptionTargets = document.querySelectorAll('.color-option-target');
  const sizeOptionTargets = document.querySelectorAll('.size-option-target');
  const addToCartBtn = document.querySelector('#add-cart-btn');
  const openCartBtn = document.querySelector('#open-cart-btn');
  const productColor = document.querySelector("#product-color");
  const leftContainerImg = document.querySelector('.left-container img');
  const rightContainerP = document.querySelector('.right-container p');
  const priceSpan = document.querySelector('.price span');
  const oldPriceSpan = document.querySelector('.old-price');
  const cartLink = document.getElementById('openModalBtn');

  let selectedColor = '';
  let selectedSize = '';

  const updateProductDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('productName');
    const currentPrice = urlParams.get('currentPrice');
    const oldPrice = urlParams.get('oldPrice');
    const image = urlParams.get('image');

    leftContainerImg.src = decodeURIComponent(image);
    rightContainerP.textContent = productName;
    priceSpan.textContent = currentPrice;
    oldPriceSpan.textContent = oldPrice;
  };

  const updateProductColor = () => {
    productColor.textContent = `Cor: ${selectedColor}`;
  };

  const toggleSizeSelection = (e) => {
    selectedSize = e.target.textContent;
    console.log(selectedSize);
    e.target.classList.toggle('selected');
  };

  const addToCart = () => {
    alert('Produto adicionado ao carrinho');
    updateCartUrl();
  };

  const updateCartUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('productName');
    const currentPrice = urlParams.get('currentPrice');
    const image = urlParams.get('image');

    if (productName && currentPrice && image && selectedColor && selectedSize) {
      const cartHref = `./cart.html?productName=${encodeURIComponent(productName)}&currentPrice=${encodeURIComponent(currentPrice)}&image=${encodeURIComponent(image)}&color=${encodeURIComponent(selectedColor)}&size=${encodeURIComponent(selectedSize)}`;
      cartLink.parentElement.setAttribute('href', cartHref);
    }
  };

  // Event Listeners
  addToCartBtn.addEventListener('click', addToCart);
  openCartBtn.addEventListener('click', updateCartUrl);

  colorOptionTargets.forEach(colorOption => {
    colorOption.addEventListener('click', (e) => {
      selectedColor = e.target.getAttribute('data-color');
      console.log(selectedColor);
      updateProductColor();
    });
  });

  sizeOptionTargets.forEach(sizeOption => {
    sizeOption.addEventListener('click', toggleSizeSelection);
  });

  // Initial Updates
  updateProductDetails();
});
