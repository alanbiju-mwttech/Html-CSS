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

function exist_username(form_username) {
    return Object.values(user).some(u => form_username === u.UserName);
}

function exist_password(form_username, form_password) {
    return Object.values(user).some(u => form_username === u.UserName && form_password === u.Password);
}

const login = document.getElementById('loginBtn')
let login_username, login_password

const login_password_error = document.getElementById('login-password-error')
const login_username_error = document.getElementById('login-username-error')

    login.addEventListener("click", function () {
        login_username = document.getElementById("login-username").value
        login_password = document.getElementById("login-password").value

        if (!login_username || !login_password) {
            if (!login_username) { login_username_error.innerText = "Enter the username" }
            else { login_username_error.innerText = "" }

            if (!login_password) { login_password_error.innerText = "Enter the password" }
            else { login_password_error.innerText = "" }
        }

        else {
            if (!exist_username(login_username)) {
                redirect = false
                login_username_error.innerText = "Username doesn't exist"
            }
            else {
                login_username_error.innerText = ""
                if (!exist_password(login_username, login_password)) {
                    redirect = false
                    login_password_error.innerText = "Wrong Password"
                }
                else {
                    redirect = true
                    login_password_error.innerText = ""
                }
            }
        }
        if (redirect) {
            window.location.href = "../../index.html"
        }
    })
