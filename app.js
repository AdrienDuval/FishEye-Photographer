
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".single-image img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
const errorMsg = document.querySelectorAll(".error-msg");
const likeBtn = document.querySelectorAll(".like-btn");
const likeCount = document.querySelectorAll(".like-count");

let isFormValide =  false;
let dislike = true;

// declaring a variable for the id to avoid to much code repetion

let id = (id) => document.getElementById(id);

let closeBtn = id("close-btn"),
     navBtn = id("nav-btn"),
     nextBtn = id("next-btn"),
     prevBtn = id("prev-btn"),
     modalForm = id("modal-form"),
     contactBtn =id("contact-btn"),
     closeBtnForm = id("close-btn-form"),
     form = id("form"),
     firstName = id("first-name"),
     lastName = id("last-name"),
     email = id("email"),
     receptioMsg = id("reception-msg");

   
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
        
        console.log("yo");
    });
});

// close button for imnage pop up

function closeBtns () {
    modal.classList.remove("open");
    original.classList.remove("open");
    navBtn.style.display = "none";
    closeBtn.style.display = "none";
}

// opening modal form 

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

// javascript for form validation only

const validatefirstNameInput = () => {
    if(!firstName.value) {
        errorMsg[0].classList.remove("display-none");
        isFormValide = false;
    } else {
        errorMsg[0].classList.add("display-none");
        isFormValide = true;
    }
}

const validatelastNameInput = () => {
    if(!lastName.value) {
        errorMsg[1].classList.remove("display-none");
        isFormValide = false;
    } else {
        errorMsg[1].classList.add("display-none");
        isFormValide = true;
    }
}

const validateemailInput = () => {
    if(!email.value) {
        errorMsg[2].classList.remove("display-none");
        isFormValide = false;
    } else {
        errorMsg[2].classList.add("display-none");
        isFormValide = true;
    }
}

form.addEventListener('submit', (e) => {
//    prevent deffaut behavior of the form by preventing it from reloding the page after submition
    e.preventDefault();
    validatefirstNameInput();
    validatelastNameInput();
    validateemailInput();
    if (isFormValide) {
        form.remove();
        receptioMsg.classList.remove("display-none");
    }
    // printing form value in the console log 

    console.log('first name ' + firstName.value );
    console.log('last name ' + lastName.value );
    console.log('email ' + email.value);
});
lastName.addEventListener("input", () => {
    validatelastNameInput();
});
firstName.addEventListener("input", () => {
    validatefirstNameInput();
});
email.addEventListener("input", () => {
    validateemailInput();
});


// increment likes on like button on photographer single page

var valueCount

function incrementLikes(nbr) {
        valueCount = likeCount[nbr].value;
        valueCount++;
        likeCount[nbr].value = valueCount;
        dislike = false;

}

function decrementLikes(nbr) {
        valueCount = likeCount[nbr].value;
        valueCount--;
        likeCount[nbr].value = valueCount;
        dislike = true;
}
function addlikecolor(nbr) {
    likeBtn[nbr].classList.add("like");
}
function removelikecolor(nbr) {
    likeBtn[nbr].classList.remove("like");
}



likeBtn[0].addEventListener('click', () => {
    
    if (dislike) {
        incrementLikes(0);
        addlikecolor(0);
    } else {
        decrementLikes(0);
        removelikecolor(0);
    };
});

likeBtn[1].addEventListener('click', () => {
    
    if (dislike) {
        incrementLikes(1);
        addlikecolor(1);
    } else {
        decrementLikes(1);
        removelikecolor(1);
    };
});
likeBtn[2].addEventListener('click', () => {
    
    if (dislike) {
        incrementLikes(2);
        addlikecolor(2);
    } else {
        decrementLikes(2);
        removelikecolor(2);
    };
});
likeBtn[3].addEventListener('click', () => {
    
    if (dislike) {
        incrementLikes(3);
        addlikecolor(3);
    } else {
        decrementLikes(3);
        removelikecolor(3);
    };
});
likeBtn[4].addEventListener('click', () => {
    
    if (dislike) {
        incrementLikes(4);
        addlikecolor(4);
    } else {
        decrementLikes(4);
        removelikecolor(4);
    };
});
likeBtn[5].addEventListener('click', () => {
    
    if (dislike) {
        incrementLikes(5);
        addlikecolor(5);
    } else {
        decrementLikes(5);
        removelikecolor(5);
    };
});
likeBtn[6].addEventListener('click', () => {
    
    if (dislike) {
        incrementLikes(6);
        addlikecolor(6);
    } else {
        decrementLikes(6);
        removelikecolor(6);
    };
});

photographers = [
    {
      "name": "Mimi Keel",
      "id": 243,
      "city": "London",
      "country": "UK",
      "tags": ["portrait", "events", "travel", "animals"],
      "tagline": "Voir le beau dans le quotidien",
      "price": 400,
      "portrait": "MimiKeel.jpg"
    },
    {
      "name": "Ellie-Rose Wilkens",
      "id": 930,
      "city": "Paris",
      "country": "France",
      "tags": ["sports", "architecture"],
      "tagline": "Capturer des compositions complexes",
      "price": 250,
      "portrait": "EllieRoseWilkens.jpg"
    },
    {
      "name": "Tracy Galindo",
      "id": 82,
      "city": "Montreal",
      "country": "Canada",
      "tags": ["art", "fashion", "events"],
      "tagline": "Photographe freelance",
      "price": 500,
      "portrait": "TracyGalindo.jpg"
    },
    {
      "name": "Nabeel Bradford",
      "id": 527,
      "city": "Mexico City",
      "country": "Mexico",
      "tags": ["travel", "portrait"],
      "tagline": "Toujours aller de l'avant",
      "price": 350,
      "portrait": "NabeelBradford.jpg"
    },
    {
      "name": "Rhode Dubois",
      "id": 925,
      "city": "Barcelona",
      "country": "Spain",
      "tags": ["sport", "fashion", "events", "animals"],
      "tagline": "Je crée des souvenirs",
      "price": 275,
      "portrait": "RhodeDubois.jpg"
    },
    {
      "name": "Marcel Nikolic",
      "id": 195,
      "city": "Berlin",
      "country": "Germany",
      "tags": ["travel", "architecture"],
      "tagline": "Toujours à la recherche de LA photo",
      "price": 300,
      "portrait": "MarcelNikolic.jpg"
    }
  ]










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
