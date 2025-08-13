const sidebar = document.getElementById("sidebar");
const loginBtn = document.getElementById('login')
const signoutBtn = document.getElementById('signout')
const sideloginBtn = document.getElementById('side-bar-login')
const sidesignoutBtn = document.getElementById('side-bar-logout')
let products = {}

let loggedIn = false;

function myFunction(x) {
    x.classList.toggle("change");
    sidebar.classList.toggle("active");
}

if (loggedIn === false) {
    signoutBtn.classList.toggle("active");
    sidesignoutBtn.classList.toggle("active")
}
else {
    loginBtn.classList.toggle("active");
    sideloginBtn.classList.toggle("active")
}

[sidesignoutBtn, signoutBtn].forEach(btn => {
    btn?.addEventListener('click', function() {
        loggedIn = !loggedIn;
        console.log(loggedIn);
        if (loggedIn === false) {
            signoutBtn.classList.toggle("active");
            sidesignoutBtn.classList.toggle("active")
            loginBtn.classList.toggle("active");
            sideloginBtn.classList.toggle("active")
        }
        else {
            loginBtn.classList.toggle("active");
            sideloginBtn.classList.toggle("active")
            signoutBtn.classList.toggle("active");
            sidesignoutBtn.classList.toggle("active")
        }
    })
}) 

// [sideloginBtn, loginBtn].forEach(btn => {
//     btn?.addEventListener('click', function () {
//         loggedIn = !loggedIn;
//         console.log(loggedIn);
//         if (loggedIn === false) {
//             signoutBtn.classList.toggle("active");
//             sidesignoutBtn.classList.toggle("active")
//             loginBtn.classList.toggle("active");
//             sideloginBtn.classList.toggle("active")
//         }
//         else {
//             loginBtn.classList.toggle("active");
//             sideloginBtn.classList.toggle("active")
//             signoutBtn.classList.toggle("active");
//             sidesignoutBtn.classList.toggle("active")
//         }
//     })
// })

// document.querySelectorAll('.login').addEventListener('click', function (){
//     loggedIn = !loggedIn
// })

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        // const image = this.querySelector('img').src;
        // const name = this.querySelector('.text-head').innerText;
        // const price = this.querySelector('.text-body').innerText;

        // products = { image, name, price };
        // sessionStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = './assets/HTML/products.html';
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
console.log("masnidjansd")
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupid");

    // existing users
    let user = {
        user1: {
            UserName: "Alan@123",
            FullName: "Alan Biju",
            Emailid: "alan1@gmail.com",
            Password: "Alan@123"
        },
        user2: {
            UserName: "Albert@123",
            FullName: "Albert Biju",
            Emailid: "albert@gmail.com",
            Password: "Albert@123"
        }
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop refresh

        // get form values
        const username = form.username.value.trim();
        const fullname = form.fullname.value.trim();
        const emailid = form.emailid.value.trim();
        const password = form.password.value;

        // validation checks
        if (!username || !fullname || !emailid || !password) {
            alert("Please fill all the credentials");
            return; // stop execution but keep form values
        }

        // check if username already exists
        const exists = Object.values(user).some(u => u.UserName === username);
        if (exists) {
            alert("Username already exists");
            return;
        }

        // password requirements
        if (password.length < 8) {
            alert("Password must contain at least 8 characters");
            return;
        }
        if (!(/[A-Z]/.test(password))) {
            alert("Password must contain at least 1 uppercase letter");
            return;
        }
        if (!(/[0-9]/.test(password))) {
            alert("Password must contain at least 1 number");
            return;
        }
        if (!(/[!@#$%^&*]/.test(password))) {
            alert("Password must contain at least 1 special character (!@#$%^&*)");
            return;
        }

        // add new user
        const user3 = {
            [`user${Object.keys(user).length + 1}`]: {
                UserName: username,
                FullName: fullname,
                Emailid: emailid,
                Password: password
            }
        };
        user = { ...user, ...user3 };

        alert("Account created successfully!");
        window.location.href = "../../index.html";
    });
});