const sidebar = document.getElementById("sidebar");
let products = {}

function myFunction(x) {
       x.classList.toggle("change");
       sidebar.classList.toggle("active");
}

document.querySelectorAll('.card').forEach(card => {
       card.addEventListener('click', function () {
              const image = this.querySelector('img').src;
              const name = this.querySelector('.text-head').innerText;
              const price = this.querySelector('.text-body').innerText;

              products = { image, name, price };
              sessionStorage.setItem('selectedProduct', JSON.stringify(product));
              window.location.href = './products.html';
       });
});

const product = JSON.parse(sessionStorage.getItem('selectedProduct'))

if (product) {
       document.getElementById('product-details').innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="300">
      <h2>${product.name}</h2>
      <p style="font-size: 1.1rem, color: red !important">Price: ${product.price}</p>
    `;
} else {
       document.getElementById('product-details').innerHTML = `<p>No product found.</p>`;
}