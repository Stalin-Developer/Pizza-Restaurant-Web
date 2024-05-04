/**Variables */
let sliderCounter = 0; //Will count how many slider have moved.
let quantitySliders = 5; //It saves the total quantity of sliders.
let waitTime = false; //We will use it to wait 2 seconds before to continue with the next code.
















// MENU RESPONSIVE
/**We concatenate variables. */
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("menuClose"),

    /**The menu that we want to open and close. */
    menuResponsive = document.getElementById("menuBar"),

    /*We create a button to redirect into each link. */
    links = document.getElementById("links");


// Click open.
btnMenuOpen.addEventListener("click", function () {
    //Here we have to clarify that we don't want any delay.
    menuResponsive.style.transitionDelay = "0s";

    menuResponsive.classList.add("active");
});

// Click close.
btnMenuClose.addEventListener("click", function () {
    //Here we have to clarify that we don't want any delay.
    menuResponsive.style.transitionDelay = "0s";

    menuResponsive.classList.remove("active");
});

// Close the mobie menu with the links.
/**Note.- regarding to the menu and the mobile menu of the pizza web. 
 * The actions relate to the class active doesn’t affect to the menu because the class active is 
 * inside a media query that means, that only affect to the mobile menu. */
links.addEventListener("click", function () {
    //Here it creates a property delay.
    menuResponsive.style.transitionDelay = "0.5s";

    menuResponsive.classList.remove("active");
});
























/**NANUAL SLIDER. */
/**We can also get access to a element with query selector, whether be with its id or class. */
/**We concatenate variables. */
var sliderContainer = document.querySelector('.slider')
btnLeft = document.getElementById("btn-left"),
    btnRight = document.getElementById("btn-right");




/**Event for the left button. */
btnLeft.addEventListener("click", function () {
    /**The counter will serve us when we are in the first slider. We go to the last one. */
    if (sliderCounter > 0) {
        sliderCounter--;

        /**From the width you have, you subtract a width of the container. */
        sliderContainer.scrollLeft -= sliderContainer.offsetWidth;

    } else {
        /**We go to the last slider. */
        sliderCounter = 4;

        sliderContainer.scrollLeft += (sliderContainer.offsetWidth) * (quantitySliders - 1);
    }

});





/**This function will serve us whether be the manual or automatic slider. */
function moveRight() {
    /**The counter will serve us when we are in the last slider to restart from the first one. */
    if (sliderCounter < 4) {
        sliderCounter++;

        /**From the width you have, you add a width of the container. */
        sliderContainer.scrollLeft += sliderContainer.offsetWidth;

    } else {
        /**We restart. */
        sliderCounter = 0;

        sliderContainer.scrollLeft -= (sliderContainer.offsetWidth) * (quantitySliders - 1);
    }
}


/**We add functionality to the arrow buttons. */
/**Event for the right button. */
btnRight.addEventListener("click", function () {
    /**We call to the function to move to the right. */
    moveRight();

    /**We stop the interval. */
    clearInterval(interval);

    /**We reset the interval. */
    interval = setInterval(moveRight, 10000);

});



/**Automatic slider. */
/**We assing the function to a variable, because we want to use it inside the btnRight as well. */
let interval = setInterval(moveRight, 10000);






























/**FORM VALIDATION. */
var form = document.getElementById("form1");


/**With e, we manage the event. */
function validate(e) {
    let inputName = document.getElementById("name"),
        inputEmail = document.getElementById("email"),
        inputComments = document.getElementById("comments"),
        /**Stylized Alerts. */
        alertSuccess = document.getElementById("alertSuccess"),
        alertError = document.getElementById("alertError");


    if (inputName.value == 0 || inputEmail.value == 0 || inputComments.value == 0) {
        /**We prevent that the form run the event submit. */
        e.preventDefault();

        /**We show the alertError. */
        alertError.classList.remove("hide");
        alertError.classList.add("show");

        /**After 2 seconds, we remove the alertError. */
        setTimeout(() => {
            alertError.classList.remove("show");
            alertError.classList.add("hide");
        }, 2000);

    } else {
        /**We prevent that the form run the event submit. */
        e.preventDefault();


        /**We show the alertSuccess. */
        alertSuccess.classList.remove("hide");
        alertSuccess.classList.add("show");

        /**After 1.8 seconds, we remove the alertSuccess. */
        setTimeout(() => {
            alertSuccess.classList.remove("show");
            alertSuccess.classList.add("hide");

            /**After the alertSuccess was shown. We run the event. */
            setTimeout(() => {
                e.target.submit();
            }, 1000);
        }, 1800);



        /**How to clean the fields:
        inputName.value= "";
        inputEmail.value= "";
        inputComments.value= "";
        */

    }

}



/**Form Event. 
 * The sumit event does the form, not the button.
*/
form.addEventListener("submit", validate);










/**Copyright year dynamically. */
// Obtain the current year.
let currentYear = new Date().getFullYear();

//Insert the current year in the copyrightBar.
document.getElementById('year-placeholder').textContent = currentYear;











/**Copy developer's email. */
/**We access to the container. */
let contentModal = document.querySelector(".content-modal");

/**We set the actions when the user press the button copy. */
contentModal.querySelector(".buttons-modal .btn-copy").addEventListener("click", function () {
    /**We select the input text. */
    let input = contentModal.querySelector("input.text");

    /**We select the value of the input. */
    input.select();

    //Copy the selected text.
    document.execCommand("copy");

    //We remove the selected text once we copied to the clipboard.
    //We do this because i don't like that the text keeps selected.
    input.setSelectionRange(0, 0);

    //We show this icon to let the user know that the text have been copied.
    let icon = contentModal.querySelector(".fa-circle-check");
    icon.style.display = "inline-flex";
});

























/**Button up in the scroll top. */
let btnTop = document.getElementById("btn-top");


/**We detect the scroll of our page. */
window.addEventListener("scroll", function () {
    /**With documentElement we call the father html. */
    let scroll = document.documentElement.scrollTop,
        /**The full height of the web page.*/
        fullSize= document.documentElement.scrollHeight,
        /**The height of the device screeen. */
        sizeVP = document.documentElement.clientHeight;



    /**If we made more than 100px. The botton up will appear */
    if (scroll > 100) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }


    let reducedFullSize= fullSize - 100;



    /**Move the button up, when it is almost to the bottom. */
    /**The scroll + sizeVP are equal to fullSize. */
    /**If we compare with the reducedFullSize, it works in the most scenarios. */
    if (reducedFullSize <= (scroll + sizeVP)) {
        btnTop.classList.add("scrollFinal");
    } else {
        btnTop.classList.remove("scrollFinal");
    }


});


/**We scroll to the beginning when the user does click on the button up. */
btnTop.addEventListener("click", function () {
    /**The scrollTo has two params, scroll in x, and scroll in y. */
    window.scrollTo(0, 0);
});


















/**Logo click event. */
let logo= document.getElementById("logo");

/**We scroll to the beginning when the user does click on the logo. */
logo.addEventListener("click", function () {
    /**The scrollTo has two params, scroll in x, and scroll in y. */
    window.scrollTo(0, 0);
});
