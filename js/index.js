document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const thankYouMessage = document.getElementById("thank-you-message");

    // Yes button functionality
    yesButton.addEventListener("click", () => {
        thankYouMessage.style.display = "block"; // Show the thank you message
        setTimeout(() => {
            window.location.href = "flower.html"; // Redirect after 10 seconds
        }, 3000);
    });

    // No button functionality
    noButton.addEventListener("mouseover", () => {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    noButton.addEventListener("click", () => {
        const confirmExit = confirm("Really? 😢");
        if (confirmExit) {
            window.location.href = "index.html"; // Redirect to main page
        }
    });
});
