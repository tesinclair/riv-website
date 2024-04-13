var emailBox = document.querySelector(".email");
var nameBox = document.querySelector(".name");
var descBox = document.querySelector(".description");

if (emailBox && nameBox && descBox){
    emailBox.addEventListener('focusout', (e) => {
        if (emailBox.value.length < 5){
            emailBox.style.width = "15%";
            return;
        }
        emailBox.style.width = String(emailBox.value.length) + "ch";
    });

    emailBox.addEventListener('focusin', (e) => {
        emailBox.style.width = "100%";
    });

    nameBox.addEventListener('focusout', (e) => {
        if (nameBox.value.length < 5){
            nameBox.style.width = "15%";
            return;
        }
        nameBox.style.width = String(nameBox.value.length) + "ch";
    });

    nameBox.addEventListener('focusin', (e) => {
        nameBox.style.width = "100%";
    });

    descBox.addEventListener('focusout', (e) => {
        if (descBox.value.length > 0){

            descBox.style.height = "20vh";
            descBox.style.width = "100%";
        }
    });


    var timelapse = document.querySelector('.timelapse');

    timelapse.playbackRate = 3.0;
    timelapse.play();

}


var titleLink = document.querySelector(".title");

titleLink.addEventListener('click', (e) => {
    console.log(window.location.pathname);
    if (window.location.pathname.endsWith("shop")){
        window.location.href = "/shop/#top";
        return;
    }
    window.location.href = "/#top";
});
