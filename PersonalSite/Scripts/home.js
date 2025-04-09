// Delay the logo video with a DOM event listener.
// Helps with the page to load faster before playing the logo animation.
document.addEventListener("DOMContentLoaded", () => {
    const logoVideo = document.querySelector(".logo");

    if (logoVideo && logoVideo.tagName === "VIDEO") {
        logoVideo.pause(); // Pauses video from initially starting
        setTimeout(() => {
            logoVideo.play(); 
        }, 1500); // <-- Timer to delay the logo video start
    }
});

// helps handle the the page CSS animation
document.addEventListener("DOMContentLoaded", () => {
    const bannerImage = document.querySelector(".banner-image");
    const contentSection = document.querySelector(".content");
    const signupButton = document.querySelector(".signup-button");

    const handleScroll = () => {
        const bannerRect = bannerImage.getBoundingClientRect();
        const contentRect = contentSection.getBoundingClientRect();

        const bannerVisible = bannerRect.top < window.innerHeight && bannerRect.bottom >= 0;
        const contentVisible = contentRect.top < window.innerHeight && contentRect.bottom >= 0;

        if (bannerVisible) {
            bannerImage.classList.add("visible");
            signupButton.classList.add("visible"); // Add visible class to the button
        }

        if (contentVisible) {
            contentSection.classList.add("visible");
        }

        // Removes event listener if both elements are visible
        if (bannerVisible && contentVisible) {
            window.removeEventListener("scroll", handleScroll);
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});