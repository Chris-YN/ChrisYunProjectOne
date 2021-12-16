


//namespace
const portfolioModal = function () {};

//portfoli modal main method
portfolioModal.formModal = function() {
    //variables
    portfolioModal.openBtnTargeter = document.querySelector("#modalOpener");
    portfolioModal.modal = document.querySelector("#myModal");
    portfolioModal.modalCloseButton = document.querySelector(".closeButton");

    //eventListner to open portfolio modal
    portfolioModal.openBtnTargeter.addEventListener("click", function () {
        portfolioModal.modal.style.display = "block"
    });
    
    //eventLitner to close portfolio modal
    portfolioModal.modalCloseButton.addEventListener("click", function () {
        portfolioModal.modal.style.display = "none"
    });
    
    //close button mouse over styling
    portfolioModal.modalCloseButton.addEventListener("mouseover", function(){
        portfolioModal.modalCloseButton.classList.toggle("closeMute");
    });
    
    portfolioModal.modalCloseButton.addEventListener("mouseleave", function () {
        portfolioModal.modalCloseButton.classList.toggle("closeMute");
    });
};

//init
portfolioModal.init = function() {
    portfolioModal.formModal();
};


portfolioModal.init();




