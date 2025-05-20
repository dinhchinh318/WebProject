let cart = [];

function addToCart(button) {
  const product = button.closest('.product');
  const name = product.getAttribute('data-name');
  const price = parseInt(product.getAttribute('data-price'));

  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toLocaleString()} VND`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = total.toLocaleString();
}

function submitCart() {
  const input = document.getElementById('orderData');
  input.value = JSON.stringify(cart);
  return true;
}
