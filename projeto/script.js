const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const popup = document.querySelector(".popup-none");

const User = {
    email: ["joao@gmail.com", "matheus@gmail.com", "jose@gmail.com"],
    password: [12345, 9875623, 5050]
};

function btn() {
    for (let n = 0; n < User.email.length; n++) {
        for (let j = 0; j < User.password.length; j++) {
            if (email.value == User.email[n] && pass.value == User.password[j]) {
                 return  setInterval(msgV,300);
            } else {
                return  setInterval(msgInv,300);
            }
        }
    }
}

function msgV(){
    popup.innerHTML = `<h1>Login Válido!</h1>`;
    popup.classList.add('popup');
}
function msgInv(){
    popup.innerHTML = `<h1>Login inválido!</h1>`
    popup.classList.add('popup');
}