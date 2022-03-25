
const clickOutSide = () => {
    modalCart.classList.remove('modal-cart-active');
    subMenuMobileDisplay.innerHTML = '';
    subMenuMobile.classList.remove('menu-mobile-main', 'transition-menu-mobile-active');
    menuMain.classList.remove('transition-menu-mobile-active');
    modal.classList.remove('modal-active');
    document.body.classList = '';
}

const numberResizeNewRelease = () => {
    if (window.innerWidth < 640) return 1;
    else if (window.innerWidth >= 640 && window.innerWidth < 768) return 2;
    else if (window.innerWidth >= 768 && window.innerWidth < 1024) return 3;
    else if (window.innerWidth >= 1024) return 4;
}

const numberResizeMagicalMoment = () => {
    // if (window.innerWidth < 1024) return 1;
    // else return 1;
    return 1;
}


const generatePagination = (sliders, pagination, numberResize) => {
    if (!sliders || !pagination) return;
    let length = sliders.children.length;
    let arr = [];
    if (typeof numberResize === "function") {
        for (let index = 0; index < Math.floor(length / numberResize()); index++) {
            arr.push(index);
        }
    }
    pagination.innerHTML = arr.reduce((prev, next) => prev +
        `<li class="bg-gray-400 w-2 h-2 rounded-full cursor-pointer"></li>`
        , "")
}