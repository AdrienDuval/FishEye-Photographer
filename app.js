const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".single-image img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
const closeBtn = document.getElementById("close-btn");
const navBtn = document.getElementById("nav-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const modalForm = document.getElementById("modal-form");
const contactBtn =document.getElementById("contact-btn");
const closeBtnForm = document.getElementById("close-btn-form")
const form = document.getElementById("form");
// looping throw the images to get all the images together and add click event listener

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        navBtn.style.display = "none";
        // show close btn
        closeBtn.style.display = "block";
        // dynamic change text and image
        const originalSrc = preview.getAttribute("data-original");
        original.src = originalSrc;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

function closeBtns () {
    modal.classList.remove("open");
    original.classList.remove("open");
    navBtn.style.display = "none";
    closeBtn.style.display = "none";
}
function openModalForm () {
    modalForm.classList.remove("display-none");
    form.classList.add("open");
}

function closeModalForm () {
    modalForm.classList.add("display-none");
    form.classList.remove("open");
}

modal.addEventListener('click', (e) => {
   if (e.target.classList.contains("modal")) {
       modal.classList.remove("open");
       original.classList.remove("open");
       closeBtn.style.display = "none";
       navBtn.style.display = "none";
   }
});
modalForm.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-form")) {
    modalForm.classList.add("display-none");
    form.classList.remove("open");
    }
})
closeBtn.addEventListener("click", closeBtns);
contactBtn.addEventListener("click", openModalForm);
closeBtnForm.addEventListener("click", closeModalForm);















// var modalBtn = document.getElementById("modal");
// var closeBtn = document.getElementById("close-btn");
// var imageContainer = document.getElementById("image-container");

// function enlargeImage () {
//     modalBtn.classList.add("enlarge-image");
//     closeBtn.style.display = "block";
//     imageContainer.classList.remove('image-container-hover');
// }

// modalBtn.addEventListener("click", enlargeImage);
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   const previews = document.querySelectorAll(".single-image img");
//   if (n > previews.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = previews.length}
//   for (i = 0; i < previews.length; i++) {
//       previews[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   previews[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
