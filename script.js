const card_img = document.querySelectorAll('.card-img');
card_img.forEach(elm => {
    elm.onmouseenter = () => {
        for (const img of card_img) {
            img.classList.remove("active");
        }
        elm.classList.add('active');
    }
});