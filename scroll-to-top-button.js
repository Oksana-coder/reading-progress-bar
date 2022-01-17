const scrollToTopButton = document.querySelector("#MEW_scroll_to_top_wrapper");
const progressBar = document.querySelector("#progress-bar");

let lastScrollTop = 0;

const showScrollToTopButton = () => {
    const currPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currPosition > lastScrollTop) {
        // console.log("Scrolling down!")
        scrollToTopButton.style.display = "none";
        progressBar.style.opacity = "1";
    } else {
        // console.log("Scrolling up!")
        scrollToTopButton.style.display = "block";
    }
    lastScrollTop = currPosition <= 0 ? 0 : currPosition;
}

window.addEventListener("scroll", showScrollToTopButton);

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

scrollToTopButton.addEventListener("click", scrollToTop);
