// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

//namespace
const portfolioModal = function () { };

//variables
portfolioModal.openBtnTargeter = document.querySelector("#modalOpener");
portfolioModal.modal = document.querySelector("#myModal");
portfolioModal.modalCloseButton = document.querySelector(".closeButton");

//eventListner to open portfolio modal
portfolioModal.openBtnTargeter.addEventListener("click", function () {
    //open modal
    portfolioModal.modal.style.display = "block"

});

//eventLitner to close portfolio modal
portfolioModal.modalCloseButton.addEventListener("click", function () {
    portfolioModal.modal.style.display = "none"
});

portfolioModal.modalCloseButton.addEventListener("mouseover", function(){
    portfolioModal.modalCloseButton.classList.toggle("closeMute");
});

portfolioModal.modalCloseButton.addEventListener("mouseleave", function () {
    portfolioModal.modalCloseButton.classList.toggle("closeMute");
});








