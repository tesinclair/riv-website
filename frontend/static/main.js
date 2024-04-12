var emailBox = document.querySelector(".email");
var nameBox = document.querySelector(".name");

var descBox = document.querySelector(".description");

emailBox.addEventListener('focusout', (e) => {
    emailBox.style.width = String(emailBox.value.length) + "ch";
});

emailBox.addEventListener('focusin', (e) => {
    emailBox.style.width = "100%";
});

nameBox.addEventListener('focusout', (e) => {
    nameBox.style.width = String(nameBox.value.length) + "ch";
});

nameBox.addEventListener('focusin', (e) => {
    nameBos.style.width = "100%";
});



