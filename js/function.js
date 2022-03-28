
const clickOutSide = () => {
    //
    modalCart.classList.remove('modal-cart-active');
    //
    //
    subMenuMobileDisplay.innerHTML = '';
    subMenuMobile.classList.remove('menu-mobile-main', 'transition-menu-mobile-active');
    menuMain.classList.remove('transition-menu-mobile-active');
    //
    //
    modal.classList.remove('modal-active');
    //
    document.body.classList = '';
}

// magical moment
const numberResizeMagicalMoment = (isLength) => {
    if (window.innerWidth > 1024) return isLength ? sliderMagicalMoment.children.length : 1;
    else {
        let length = 0;
        [...sliderMagicalMoment.children].forEach(e => {
            length += e.children[0].children.length;
        });
        return isLength ? length : 1;
    }
}
const handleSliderMagicalMoment = () => {
    let listItemMagicalMomentMain = document.getElementsByClassName('item-magical-moment-main');
    if (window.innerWidth > 1024) {
        for (let i = 0; i < Math.ceil(listItemMagicalMomentMain.length / 3); i++) {
            sliderMagicalMoment.children[i].children[0].style = '';
        }
    }
    generatePaginationMagicalMoment();
    [...listItemMagicalMomentMain].forEach((el, index) => {
        el.addEventListener('click', () => {
            if (window.innerWidth > 1024) {
                indexCurrentMagicalMoment.value = index;
                sliderMagicalMoment.style.transform = `translateX(-${index * 100}%)`
            }
            else {
                if (index === 0) {
                    sliderMagicalMoment.children[0].children[0].style.transform = `translateX(0%)`
                    sliderMagicalMoment.style.transform = `translateX(-0%)`
                }
                for (let i = 0; i < listItemMagicalMomentMain.length; i++) {
                    if (i % 3 === 0) {
                        sliderMagicalMoment.children[Math.floor((index) / 3) - 1 < 0 ? 0 : Math.floor((index) / 3) - 1]
                            .children[0].style.transform = `translateX(-${200}%)`
                    }
                }
                sliderMagicalMoment.style.transform = `translateX(-${(Math.floor(index / 3)) * 100}%)`
                sliderMagicalMoment.children[Math.floor((index) / 3)]
                    .children[0].style.transform = `translateX(-${index === 0 ? 0 : index % 3 * 100}%)`
                indexCurrentMagicalMoment.value = index;
            }
            generatePaginationMagicalMoment();
            handleSliderMagicalMoment();
        })
    })
}
const generatePaginationMagicalMoment = () => {
    if (!sliderMagicalMoment || !sliderMagicalMomentPagination) return;
    let length = numberResizeMagicalMoment(true);
    let arr = [];
    for (let index = 0; index < Math.floor(length / numberResizeMagicalMoment()); index++) {
        arr.push(index);
    }
    sliderMagicalMomentPagination.innerHTML = arr.map((item, index) =>
        `<li class="item-magical-moment-main ${index === Number(indexCurrentMagicalMoment.value)
            ? 'bg-main' : 'bg-gray-400'} w-2 h-2 rounded-full cursor-pointer"></li>`, "");
    sliderMagicalMomentPagination.innerHTML = sliderMagicalMomentPagination.innerHTML.replaceAll(',', '');
}
// magical moment

//new release
const numberResizeNewRelease = (isBlog) => {
    if (window.innerWidth < 640) return isBlog ? 2 : 1;
    else if (window.innerWidth >= 640 && window.innerWidth < 768) return 2;
    else if (window.innerWidth >= 768 && window.innerWidth < 1024) return 3;
    else if (window.innerWidth >= 1024) return 4;
}
const hanleSliderNewRelease = (isBlog) => {
    if (sliderNewRelease) {
        sliderNewRelease.style.transform = `translateX(0%)`;
        generatePaginationNewRelease(isBlog);
        let listItemNewReleaseMain = document.getElementsByClassName('item-new-release-main');
        [...listItemNewReleaseMain].forEach((el, index) => {
            el.addEventListener('click', () => {
                sliderNewRelease.style.transform = `translateX(-${index * 100}%)`
                indexCurrentNewRelease.value = index;
                generatePaginationNewRelease();
                hanleSliderNewRelease();
            })
        })
    }
}
const generatePaginationNewRelease = (isBlog) => {
    if (!sliderNewRelease || !sliderNewReleasePagination) return;
    let length = sliderNewRelease.children.length;
    let arr = [];
    for (let index = 0; index < Math.floor(length / numberResizeNewRelease(isBlog)); index++) {
        arr.push(index);
    }
    sliderNewReleasePagination.innerHTML = arr.map((item, index) =>
        `<li class="item-new-release-main ${index === Number(indexCurrentNewRelease.value)
            ? 'bg-main' : 'bg-gray-400'} w-2 h-2 rounded-full cursor-pointer"></li>`, "");
    sliderNewReleasePagination.innerHTML = sliderNewReleasePagination.innerHTML.replaceAll(',', '');
}
//new release