
let loginBtn = document.getElementById('loginBtn')
let submitBtn = document.getElementById('submitBtn')

let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let userName = document.getElementById('userName')
let userPass = document.getElementById('userPass')

let users;

if (localStorage.getItem('_db') == null) {
    users = [];
} else {
    JSON.parse(localStorage.getItem('_db'))
}

function submit() {
    userInputValidation()
    isExist()
    if (userInputValidation() == true && isExist() == false) {
        let user = {
            firstname: firstName.value,
            lastname: lastName.value,
            username: userName.value,
            userpass: userPass.value
        }
        users.push(user)
        localStorage.setItem('_db', JSON.stringify(users))
    }
}