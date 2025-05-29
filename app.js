const body = document.getElementById("body");
const githubButton = document.getElementById("github-button");

// create the UI first, this step is unnecessary you can create the mockup on HTML and hide it by default with css.
createModalUi();

// EVENT LISTNERS --------------
githubButton.addEventListener("click", showModal)

// FUNCTIONS -------------------
// show modal FN
function showModal() {
    const modal = document.querySelector(".modal");
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
}

// hide modal FN
function hideModal() {
    const modal = document.querySelector(".modal");
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
}

// create modal UI FN
function createModalUi() {

    // create the container and assign a modal class to it.
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal");

    // create the close icon image tag, set src, alt and class.
    const closeIcon = document.createElement("img");
    closeIcon.classList.add("close");
    closeIcon.setAttribute("src", "images/close.svg");
    closeIcon.setAttribute("alt", "close icon");
    closeIcon.addEventListener("click", hideModal);

    // create the avatar image and set the src and alt attributes
    const avatarImage = document.createElement("img");
    avatarImage.setAttribute("src", "images/avatar.png")
    avatarImage.setAttribute("alt", "the avatar image")

    // create the heading element and set the inner text
    const heading = document.createElement("h3");
    heading.innerText = "MPHDigitalRSA";

    // create the description paragraph
    const paragraph = document.createElement("p");
    paragraph.innerText = "This is my GitHub account and other social media links"

    // create the socials container
    const socials = document.createElement("div");
    socials.classList.add("socials");


    // #TODO: Append socials links to the socials container

    // facebook
    const facebookIcon = document.createElement("img");
    facebookIcon.setAttribute("src", "images/facebook.svg")
    facebookIcon.setAttribute("alt", "facebook icon")

    // facebook
    const twitterIcon = document.createElement("img");
    twitterIcon.setAttribute("src", "images/twitter.svg")
    twitterIcon.setAttribute("alt", "twitter icon")

    // facebook
    const instagramIcon = document.createElement("img");
    instagramIcon.setAttribute("src", "images/instagram.svg")
    instagramIcon.setAttribute("alt", "instagram icon")


    // append the social icons to the socials container

    socials.appendChild(facebookIcon);
    socials.appendChild(twitterIcon);
    socials.appendChild(instagramIcon);

    // append everything to the modal container

    modalContainer.appendChild(closeIcon);
    modalContainer.appendChild(avatarImage);
    modalContainer.appendChild(heading);
    modalContainer.appendChild(paragraph);
    modalContainer.appendChild(socials);

    // append modal to the body element
    body.appendChild(modalContainer);
}

