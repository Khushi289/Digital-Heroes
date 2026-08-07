const contactForm = document.querySelector(".contact-form");

if (contactForm) {
contactForm.addEventListener("submit", function (event) {
event.preventDefault();


    alert("Thanks! Your message has been received.");

    contactForm.reset();
});


}
