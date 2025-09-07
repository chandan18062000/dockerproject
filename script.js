const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 129999,
    image: "https://via.placeholder.com/250x300?text=iPhone+15+Pro"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 119999,
    image: "https://via.placeholder.com/250x300?text=Galaxy+S24+Ultra"
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: 69999,
    image: "https://via.placeholder.com/250x300?text=OnePlus+12"
  }
];

let cartCount = 0;

function renderProducts() {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p>₹${product.price.toLocaleString()}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;
}

renderProducts();