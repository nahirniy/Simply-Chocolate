const playButton = document.getElementById("playButton");
const videoOverlay = document.getElementById("videoOverlay");
const iframe = videoOverlay.querySelector("iframe");
let isPlaying = false;

playButton.addEventListener("click", function (event) {
    event.stopPropagation();
    videoOverlay.classList.toggle("show-video");
    isPlaying = !isPlaying;

    if (isPlaying) {
        iframe.src = "https://www.youtube.com/embed/ZtMfiWDQHT8?autoplay=1";
    } else {
        iframe.src = "";
    }
});

document.addEventListener("click", function (event) {
    if (isPlaying && !videoOverlay.contains(event.target)) {
        videoOverlay.classList.remove("show-video");
        iframe.src = "";
        isPlaying = false;
    }
});
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();
