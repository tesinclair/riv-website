var galleryOrder = ["1", "2", "3", "4", "5"]

function changeCard(){
    galleryOrder.push(galleryOrder.shift());
    console.log(galleryOrder)
    newCard = document.getElementById(galleryOrder[0]);
    currentCard = document.getElementById(galleryOrder[galleryOrder.length -1]);
    newCard.classList.toggle("active");
    currentCard.classList.toggle("active");
}

