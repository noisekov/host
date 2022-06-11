import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper();


const menuBody = document.querySelector('.menu__burger');
document.addEventListener('click', burger);

function burger(event) {
    if (event.target.closest('.header__burger')) {
        menuBody.classList.toggle('.active');
    }
    if (!event.target.closest('.header__burger')) {
        menuBody.classList.remove('.active');
    }
}

