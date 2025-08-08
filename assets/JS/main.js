const sidebar = document.getElementById("sidebar");
let products = {}

console.log(2342342)

function myFunction(x) {
    x.classList.toggle("change");
    sidebar.classList.toggle("active");
    let userName = prompt("Please enter your name:");
    console.log(userName)
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        const image = this.querySelector('img').src;
        const name = this.querySelector('.text-head').innerText;
        const price = this.querySelector('.text-body').innerText;

        products = { image, name, price };
        sessionStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = '/assets/HTML/products.html';
    });
});

const product = JSON.parse(sessionStorage.getItem('selectedProduct'))

// if (product) {
//        document.getElementById('product-details').innerHTML = `
//       <img src="${product.image}" alt="${product.name}" width="300">
//       <h2>${product.name}</h2>
//       <p style="font-size: 1.1rem, color: red !important">Price: ${product.price}</p>
//     `;
// } else {
//        document.getElementById('product-details').innerHTML = `<p>No product found.</p>`;
// }

function decrease() {
    value = document.getElementById('number').innerText
    if (value == 0) {
        document.getElementById('number').innerText = value
    }
    else {
        document.getElementById('number').innerText = --value
    }
}

function increase() {
    value = document.getElementById('number').innerText
    document.getElementById('number').innerText = ++value
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.incrementor').forEach(incrementor => {
        const numberDiv = incrementor.querySelector('.number');
        const lessBtn = incrementor.querySelector('.less');
        const moreBtn = incrementor.querySelector('.more');
        const removeBtn = incrementor.querySelector('.remove');

        moreBtn.addEventListener('click', () => {
            let count = parseInt(numberDiv.textContent) || 0;
            count++;
            numberDiv.textContent = count;
        });

        lessBtn.addEventListener('click', () => {
            let count = parseInt(numberDiv.textContent) || 0;
            if (count > 0) {
                count--;
                numberDiv.textContent = count;
            }
        });

        if (removeBtn) {
            removeBtn.addEventListener('click', () => {
                const productElement = removeBtn.closest('.each-products');
                if (productElement) {
                    productElement.remove(); // or .remove() if you want to delete it
                }
            });
        }
    });
});

