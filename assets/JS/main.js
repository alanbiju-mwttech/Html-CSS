const sidebar = document.getElementById("sidebar");
const sideloginBtn = document.getElementById('side-bar-login')
const login = document.getElementById('login')

if (localStorage.getItem('logged_in') === null) {
    localStorage.setItem('logged_in', false);
}

function myFunction(x) {
    x.classList.toggle("change");
    sidebar.classList.toggle("active");
}

if (localStorage.getItem('logged_in') == 'true'){
    login.innerText = 'Logout'
    sideloginBtn.innerText = 'Logout'
}
else {
    login.innerText = 'Login'
    sideloginBtn.innerText = 'Login'
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        window.location.href = './assets/HTML/products.html';
    });
});

const product = JSON.parse(sessionStorage.getItem('selectedProduct'))

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
    [sideloginBtn, login].forEach(btn => {
        btn.addEventListener('click', function () {
            if (localStorage.getItem('logged_in') === 'true') {
                // console.log(localStorage.getItem('logged_in'), "qweqweqsad3")
                localStorage.setItem('logged_in', false);
                sideloginBtn.innerText = 'Login'
                login.innerText = 'Login'
            }
            else {
                // console.log(localStorage.getItem('logged_in'), "werwerwer")
                let path = window.location.pathname;
                localStorage.setItem("path",path)
                if (path.endsWith("index.html")) {
                    window.location.href = "./assets/HTML/signup.html";
                }
                else if (path.endsWith("/")){
                    window.location.href = "assets/HTML/signup.html";
                }
                else {
                    window.location.href = "./signup.html";
                }
            }
        })
    })

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
                    productElement.remove();
                }
            });
        }
    });
});

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function () {
        console.log("asdasdasd")
        window.location.href = './products.html';
    });
});

document.querySelectorAll('.each-products > img').forEach(card => {
    card.addEventListener('click', function () {
        window.location.href = './products.html';
    });
});