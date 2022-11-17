window.addEventListener("DOMContentLoaded", () => {
    const userImg = document.querySelector(".userImage");
    const card = document.querySelector(".card__box_items");
    const darkBody = document.body;

    userImg.addEventListener("click", () => {

        if (!userImg.classList.contains("userImgZoom")) {
            userImg.classList.add("userImgZoom");
            card.classList.add("cardImgZoom");
            darkBody.classList.add("dark");
            userImg.title = "";
            card.title = "";
        }

        document.addEventListener("click", e => {
            if (e.target !== userImg) {
                userImg.classList.remove("userImgZoom");
                card.classList.remove("cardImgZoom");
                darkBody.classList.remove("dark");
            }
        });
    });
});