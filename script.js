document.getElementById('enterButton').addEventListener('click', function() {
    document.querySelector('.entry-page').style.display = 'none';
    document.querySelector('.video-page').style.display = 'flex';
    showDoorImage();
});

const videos = [
    "porte2.mp4",
    "dark.mp4",
    "porte2.mp4",
    "dark2.mp4",
    "porte2.mp4",
    "dark3.mp4",
    "porte2.mp4",
    "dark4.mp4",
    "porte2.mp4",
    "dark5.mp4",
    "porte2.mp4",
    "dark6.mp4",
    "porte2.mp4",
    "dark7.mp4",
    "porte2.mp4",
    "dark8.mp4",
    "porte2.mp4",
    "dark9.mp4",
    "porte2.mp4",
    "dark10.mp4",
    "porte2.mp4",
    "car2.mp4",
    "porte2.mp4",
    "dark11.mp4",
];
let currentVideoIndex = 0;

function showDoorImage() {
    const doorImage = document.getElementById('doorImage');
    const videoPlayer = document.getElementById('videoPlayer');
    
    doorImage.style.display = 'block';
    setTimeout(function() {
        doorImage.style.display = 'none';
        videoPlayer.play();
    }, 2000); // Affiche l'image de la porte pendant 2 secondes
}

document.getElementById('videoPlayer').addEventListener('ended', function() {
    currentVideoIndex++;
    if (currentVideoIndex < videos.length) {
        this.src = videos[currentVideoIndex];
        this.load();
        showDoorImage();
    } else {
        // Fin de la dernière vidéo
        alert("Fin de l'expérience.");
    }
});