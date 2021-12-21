if(screen.width >= 768) {
document.querySelectorAll(".slidesContainer").forEach(slidesContainer =>
    slidesContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        slidesContainer.scrollLeft += evt.deltaY;
    }))
}
