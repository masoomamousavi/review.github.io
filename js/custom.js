let inputRange = document.querySelector("input[type=number]");
let inputPassword = document.querySelector("input[type=text]");
let checkboxes = document.querySelectorAll("input.form-check-input");
let copyBtn = document.getElementById("copy");
let showPassword = document.getElementById("show")
// set value
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

// declaration variables
let password = "";
let charset = "";
// generate password with specific length.
inputPassword.setAttribute("type", "password")
function generatePassword(length) {
    password = "";
    charset = "";
    if (length > 0 && length <= 50) {
        checked();
        for (let i = 0; i < length; i++) {
            password += charset[randomNumber()]
        }
    } else {
        alert("You arr out of range");
    }
}
// generate a random number with charSet variable length
function randomNumber() {
    return Math.floor(Math.random() * charset.length);
}
// we call the generatePassword when the input change.
inputRange.addEventListener("change", function () {
    let length = inputRange.value;
    generatePassword(length);
    inputPassword.value = password;
})
function checked() {
    checkboxes.forEach(function (box) {
        if (box.checked) {
            if (box.id == "uppercase") charset += uppercase;
            if (box.id == "lowercase") charset += lowercase;
            if (box.id == "number") charset += number;
            if (box.id == "symbol") charset += symbol;
        }
    })
}
window.addEventListener("DOMContentLoaded", function () {
    let length = inputRange.value;
    generatePassword(length);
    inputPassword.value = password;
})

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        let count = 0;
        checkboxes.forEach(function (box) {
            if (box.checked) count++;
        })
        if (count == 0) {
            checkbox.checked = true;
        }
        console.log(count)
    })
})
copyBtn.addEventListener('click', function () {
    inputPassword.select();
    document.execCommand("copy")
})
let check = true;
showPassword.addEventListener("click", function () {
    if (check) {
        inputPassword.removeAttribute("type");
        check = false;
    } else {
        inputPassword.setAttribute("type", "password");
        check = true;
    }

})
