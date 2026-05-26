let cartCount = 0;
function addToCart() {
  cartCount++;
  const badge = document.getElementById('cart-count');
  badge.textContent = cartCount;
  
  badge.classList.remove('pop');
  void badge.offsetWidth;
  badge.classList.add('pop');
}
