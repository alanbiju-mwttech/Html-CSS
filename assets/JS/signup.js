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
        let redirect = false

        username = document.getElementById("username").value
        fname = document.getElementById("fname").value
        email = document.getElementById("email").value
        password = document.getElementById("password").value

        if (!username || !fname || !email || !password) {
            redirect = false
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
                redirect = false
                username_error.innerText = "Username already exist"
            }
            else {
                redirect = true
                username_error.innerText = ""
            }
            if (!verify_email(email)) {
                redirect = false
                email_error.innerText = "Please enter a valid Email id"
            }
            else {
                redirect = true
                email_error.innerText = ""
            }
            if (password.length < 8) {
                redirect = false
                password_error.innerText = "Password should contain atleast 8 characters"
            }
            else if (password.length >= 8) {
                [password_error.innerText, redirect] = verify_password(password)
            }
        }
        console.log(username, password, email, fname)
        if (redirect) {
            localStorage.setItem('logged_in', true)
            window.location.href = localStorage.getItem('path')
        }
    });
})