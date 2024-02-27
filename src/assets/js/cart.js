
document.addEventListener('DOMContentLoaded', () => {
  // Aqui você pode carregar os itens do carrinho e exibi-los na página do carrinho
  loadCartItems();

  function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Exemplo: exibir os itens na console
    console.log(cartItems);
    // Agora você deve adicionar lógica para exibir os itens na página do carrinho
  }
});


  document.addEventListener('DOMContentLoaded', function () {
    // Verifique se há parâmetros na URL
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('productName');
    const currentPrice = urlParams.get('currentPrice');
    const oldPrice = urlParams.get('oldPrice');
    const image = urlParams.get('image');
    const color = urlParams.get('color');
    const size = urlParams.get('size');

    // Se houver parâmetros, atualize o link do carrinho
    if (productName && currentPrice && oldPrice && image && color && size) {
      const cartLink = document.getElementById('openModalBtn');
      const cartHref = `./product.html?productName=${encodeURIComponent(productName)}&currentPrice=${encodeURIComponent(currentPrice)}&oldPrice=${encodeURIComponent(oldPrice)}&image=${encodeURIComponent(image)}&color=${encodeURIComponent(color)}&size=${encodeURIComponent(size)}`;
      cartLink.parentElement.setAttribute('href', cartHref);
    }
  });








const addToCartBtn = document.querySelector('#add-cart-btn')


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('productName');
    const currentPrice = urlParams.get('currentPrice');
    const oldPrice = urlParams.get('oldPrice');
    const image = urlParams.get('image');
    // modal
    const color = urlParams.get('color');
    const size = urlParams.get('size');
   

    document.querySelector('.left-container img').src = decodeURIComponent(image);
    document.querySelector('.right-container p').textContent = productName;
    document.querySelector('.price span').textContent = currentPrice;
    document.querySelector('.old-price').textContent = oldPrice;
    document.querySelector('.right-container p').textContent = productName;
    document.querySelector('.price span').textContent = currentPrice;
    document.querySelector('.old-price').textContent = oldPrice;
    // modal
    document.querySelector('.product-modal-img').src = decodeURIComponent(image);
    document.querySelector('.product-description').textContent = productName;
    document.querySelector('.color-modal').textContent = encodeURIComponent(color)
    document.querySelector('.selected-size').textContent = encodeURIComponent(size)
  });
  
  const addToCart = () => {
   alert('Produto adicionado ao carrinho')
  }
  
  addToCartBtn.addEventListener('click', addToCart)
  