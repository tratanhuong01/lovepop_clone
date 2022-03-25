
let isClick;
let indexClick;
let statusClickMenu;

[...listItemMenu].forEach((el, index) => {
    el.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
            labelSubMenuDisplay.innerHTML = el.children[0].innerHTML;
            subMenuMobileDisplay.innerHTML = (el.children[2].innerHTML);
            subMenuMobile.classList.add('menu-mobile-main', 'transition-menu-mobile-active');
        }
        else {
            const reset = () => {
                [...listItemMenu].forEach(el_ => {
                    if (el_.children[2]) {
                        el_.children[2].style.transform = 'scaleY(0)';
                        el_.children[1].style.transform = 'rotate(0deg)';
                    }
                })
            }
            const show = () => {
                frontMenuActive.style.visibility = 'visible';
                frontMenuActive.style.opacity = '1';
                el.children[2].style.transform = 'scaleY(1)';
                el.children[1].style.transform = 'rotate(180deg)';
                if (listItemMenu.length - 1 === index) {
                    el.children[2].style.marginLeft = '-120px';
                    el.children[2].style.gap = '12px';
                }
            }
            // reset();
            if (!isClick) {
                reset();
                show();
            }
            else {
                if (indexClick !== index) {
                    reset();
                    show();
                }
                else {
                    frontMenuActive.style.opacity = '0';
                    frontMenuActive.style.visibility = 'hidden';
                    reset();
                }
            }

            indexClick = index;
            isClick = !isClick;
        }
    });
});

const menuStatus = () => {
    if (!statusClickMenu) {
        menuMain.classList.add('menu-mobile', 'transition-menu-mobile', 'transition-menu');
        subMenuMobile.classList.add('menu-mobile', 'transition-menu-mobile', 'transition-menu');
        menuMain.classList.add('transition-menu-mobile-active');
        modal.classList.add('modal-active');
        document.body.classList = 'fixed top-0 left-0 right-0 bottom-0';
        modal.addEventListener('click', clickOutSide)
    }
    else {
        clickOutSide();
        modal.removeEventListener('click', clickOutSide)
    }
    statusClickMenu = !statusClickMenu;
}

btnOpenMenuMobie.addEventListener('click', menuStatus);

btnCloseMenuMobile[0].addEventListener('click', menuStatus);
btnCloseMenuMobile[1].addEventListener('click', menuStatus);

returnMenuMain.addEventListener('click', () => {
    subMenuMobile.classList.remove('menu-mobile-main', 'transition-menu-mobile-active');
});


const resizeEvent = () => {
    generatePagination(sliderNewRelease, sliderNewReleasePagination, numberResizeNewRelease);
    generatePagination(sliderMagicalMoment, sliderMagicalMomentPagination, numberResizeMagicalMoment);
    if (window.innerWidth < 1024) {
        document.body.classList = 'preload';
        menuMain.classList.add('menu-mobile', 'transition-menu-mobile');
        subMenuMobile.classList.add('menu-mobile', 'transition-menu-mobile', 'menu-mobile-main');
    }
    else {
        sliderMagicalMoment && (sliderMagicalMoment.style.transform = 'translate(0%)')
        modal.classList.remove('modal-active');
        subMenuMobileDisplay.innerHTML = '';
        menuMain.classList.remove('menu-mobile', 'transition-menu-mobile', 'transition-menu-mobile-active', 'transition-menu');
        subMenuMobile.classList.remove('menu-mobile', 'transition-menu-mobile', 'transition-menu-mobile-active',
            'menu-mobile-main', 'transition-menu');
    }
}

window.addEventListener('resize', resizeEvent);

resizeEvent();



