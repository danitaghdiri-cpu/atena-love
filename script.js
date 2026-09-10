
/* =========================
   گرفتن عناصر صفحه
========================= */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionCard = document.getElementById("questionCard");
const successCard = document.getElementById("successCard");

const heartRain = document.querySelector(".heart-rain");


/* =========================
   ساخت بارش قلب
========================= */

function createHeart() {

    const heart = document.createElement("span");

    heart.innerHTML = "💙";

    // جای تصادفی در عرض صفحه
    heart.style.left =
        Math.random() * 100 + "%";

    // سرعت تصادفی
    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    // تأخیر تصادفی
    heart.style.animationDelay =
        Math.random() * 3 + "s";

    heartRain.appendChild(heart);


    // بعد از تمام شدن انیمیشن حذف شود
    setTimeout(() => {
        heart.remove();
    }, (duration + 3) * 1000);
}


/* ساخت قلب‌ها */

setInterval(createHeart, 350);


/* =========================
   دکمه آره
========================= */

yesBtn.addEventListener("click", function () {

    questionCard.style.display = "none";

    successCard.style.display = "block";

});


/* =========================
   فرار کردن دکمه نه
========================= */

function escapeButton() {

    // اندازه دکمه
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;


    // محدوده امن صفحه
    const maxX =
        window.innerWidth - buttonWidth - 20;

    const maxY =
        window.innerHeight - buttonHeight - 20;


    // موقعیت تصادفی
    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;


    // تبدیل به fixed تا بتواند
    // هرجای صفحه برود
    noBtn.style.position = "fixed";

    noBtn.style.left =
        Math.max(10, randomX) + "px";

    noBtn.style.top =
        Math.max(10, randomY) + "px";
}


/* کامپیوتر */

noBtn.addEventListener(
    "mouseenter",
    escapeButton
);


/* موبایل */

noBtn.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        escapeButton();

    }
);

