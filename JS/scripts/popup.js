// Get the required elements
let aboutButton = document.getElementById("about-button");
let portfolioButton = document.getElementById("portfolio-button");
let blogButton = document.getElementById("blog-button");
let contactButton = document.getElementById("contact-button");

let aboutPage = document.getElementById("about-modal-area");
let portfolioPage = document.getElementById("portfolio-modal-area");
let blogPage = document.getElementById("blog-modal-area");
let contactPage = document.getElementById("contact-modal-area");

let closeAboutPage = document.getElementById("close-about-page");
let closePortfolioPage = document.getElementById("close-portfolio-page");
let closeBlogPage = document.getElementById("close-blog-page");
let closeContactPage = document.getElementById("close-contact-page");


// Add event listeners
aboutButton.addEventListener("click", openAbout);
portfolioButton.addEventListener("click", openPortfolio);
blogButton.addEventListener("click", openBlog);
contactButton.addEventListener("click", openContact);



function openAbout() {
    aboutPage.style.visibility = "visible";
    aboutPage.style.opacity = "1";
    aboutPage.style.transition = "all 0.4s ease-in";
    //aboutButton.removeEventListener("click", openAbout);
    closeAboutPage.addEventListener("click", closeAbout);
}
function openPortfolio() {
    portfolioPage.style.visibility = "visible";
    portfolioPage.style.opacity = "1";
    portfolioPage.style.transition = "all 0.4s ease-in";
    //portfolioButton.removeEventListener("click", openPortfolio);
    closePortfolioPage.addEventListener("click", closePortfolio);
}
function openBlog() {
    blogPage.style.visibility = "visible";
    blogPage.style.opacity = "1";
    blogPage.style.transition = "all 0.4s ease-in";
    //blogButton.removeEventListener("click", openBlog);
    closeBlogPage.addEventListener("click", closeBlog);
}
function openContact() {
    contactPage.style.visibility = "visible";
    contactPage.style.opacity = "1";
    contactPage.style.transition = "all 0.4s ease-in";
    //contactButton.removeEventListener("click", openContact);
    closeContactPage.addEventListener("click", closeContact);
}



function closeAbout() {
    aboutPage.style.visibility = "hidden";
    aboutPage.style.opacity = "0";
    aboutPage.style.transition = "all 0.4s ease-out";
    //closeAboutPage.removeEventListener("click", closeAbout);
    aboutButton.addEventListener("click", openAbout);
}
function closePortfolio() {
    portfolioPage.style.visibility = "hidden";
    portfolioPage.style.opacity = "0";
    portfolioPage.style.transition = "all 0.4s ease-out";
    //closePortfolioPage.removeEventListener("click", closePortfolio);
    portfolioButton.addEventListener("click", openPortfolio);
}
function closeBlog() {
    blogPage.style.visibility = "hidden";
    blogPage.style.opacity = "0";
    blogPage.style.transition = "all 0.4s ease-out";
    //closeBlogPage.removeEventListener("click", closeBlog);
    blogButton.addEventListener("click", openBlog);
}
function closeContact() {
    contactPage.style.visibility = "hidden";
    contactPage.style.opacity = "0";
    contactPage.style.transition = "all 0.4s ease-out";
    //closeContactPage.removeEventListener("click", closeContact);
    contactButton.addEventListener("click", openContact);
}
