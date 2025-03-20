onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", () => {
        const audio = document.getElementById("background-music");
    
        // Ensure the audio plays automatically without user interaction restrictions
        audio.volume = 0.5; // Set volume (optional)
        
        // Some browsers block autoplay until user interaction, so add a fallback
        document.body.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
            }
        });
    
        console.log("Background music is playing...");
    });