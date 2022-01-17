const progressBar = document.querySelector("#progress-bar");
const article = document.querySelector("article");
const progressValue = document.querySelector(".progress-value");

let progressWidthValue = 0;

const animateProgressBar = () => {
    const scrollDistance = -article.getBoundingClientRect().top;
    const progressWidth = (scrollDistance / (article.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    progressWidthValue = Math.floor(progressWidth);
    progressBar.style.width = progressWidthValue + "%";
    progressValue.textContent = progressWidthValue  + "%";

    if (progressWidthValue < 0) {
        progressBar.style.width = "0%";
    };

    if (progressWidthValue === 25 || progressWidthValue === 50 || progressWidthValue === 75 || progressWidthValue === 100) {
        progressValue.style.opacity = "1";
    } else {
        progressValue.style.opacity = "0";
    };

    if (progressWidthValue > 100) {
        progressBar.style.display = "none";
    } else {
        progressBar.style.display = "block";
    };
};

window.addEventListener("scroll", animateProgressBar);
