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

console.log("Available Screen Width: " + window.innerWidth + " pixels");
console.log("Available Screen Height: " + window.innerHeight + " pixels");

function exist(form_username) {
    return Object.values(user).some(u => form_username === u.UserName);
}

function verify_email(email) {
    return /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/.test(email)
}

function verify_password(password) {
    if (!(/[A-Z]/.test(password))) {
        return ["Password must contain at least 1 uppercase letter", false];
    }
    if (!(/[0-9]/.test(password))) {
        return ["Password must contain at least 1 number", false];
    }
    if (!(/[!@#$%^&*]/.test(password))) {
        return ["Password must contain at least 1 special character (!@#$%^&*)", false];
    }
    return ["", true]
}


const submit = document.getElementById("signupBtn");

let username, fname, email, password

const username_error = document.getElementById('username-error')
const fname_error = document.getElementById('fname-error')
const email_error = document.getElementById('email-error')
const password_error = document.getElementById('password-error')

document.addEventListener('DOMContentLoaded', function () {
    submit.addEventListener("click", function () {
        let redirect = []

        username = document.getElementById("username").value
        fname = document.getElementById("fname").value
        email = document.getElementById("email").value
        password = document.getElementById("password").value

        if (!username || !fname || !email || !password) {
            redirect[0] = false
            if (!username) { username_error.innerText = "Enter the username" }
            else { username_error.innerText = "" }

            if (!fname) { fname_error.innerText = "Enter Your Full Name" }
            else { fname_error.innerText = "" }

            if (!email) { email_error.innerText = "Enter the Your EmailId" }
            else { email_error.innerText = "" }

            if (!password) { password_error.innerText = "Enter your password" }
            else { password_error.innerText = "" }
        }
        else {
            username_error.innerText = ""
            fname_error.innerText = ""
            email_error.innerText = ""
            password_error.innerText = ""

            if (exist(username)) {
                redirect[0] = false
                username_error.innerText = "Username already exist"
            }
            else {
                redirect[0] = true
                username_error.innerText = ""
            }
            if (!verify_email(email)) {
                redirect[1] = false
                email_error.innerText = "Please enter a valid Email id"
            }
            else {
                redirect[1] = true
                email_error.innerText = ""
            }
            if (password.length < 8) {
                redirect[2] = false
                password_error.innerText = "Password should contain atleast 8 characters"
            }
            else if (password.length >= 8) {
                [password_error.innerText, redirect[2]] = verify_password(password)
            }
        }
        console.log(username, password, email, fname)
        let decide = redirect.values().some(redirect => redirect == false)
        if (decide == false) {
            localStorage.setItem('logged_in', true)
            console.log("not")
            window.location.href = localStorage.getItem('path')
        }
    });
})

const size = document.getElementById('size')

size.innerText = `${window.innerWidth}px, ${window.innerHeight}px`;