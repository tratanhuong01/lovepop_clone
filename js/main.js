const listItemMenu = document.getElementsByClassName('item-menu');
const frontMenuActive = document.getElementById('front-menu-active');
const btnOpenMenuMobie = document.getElementById('btn-menu-mobile');
const menuMain = document.getElementById('menu-main');
const btnCloseMenuMobile = document.getElementsByClassName('btn-close-menu-mobile');
const modal = document.getElementById('modal');
const subMenuMobile = document.getElementById('sub-menu-mobile');
const subMenuMobileDisplay = document.getElementById('sub-menu-display-mobile');
const returnMenuMain = document.getElementById('return-menu-main');
const labelSubMenuDisplay = document.getElementById('label-sub-menu-display');

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
        menuMain.classList.add('menu-mobile', 'transition-menu-mobile');
        subMenuMobile.classList.add('menu-mobile', 'transition-menu-mobile');
        menuMain.classList.add('transition-menu-mobile-active');
        modal.classList.add('modal-active');
        document.body.classList = 'fixed top-0 left-0 right-0 bottom-0';
    }
    else {
        subMenuMobile.classList.remove('menu-mobile-main', 'transition-menu-mobile-active');
        menuMain.classList.remove('transition-menu-mobile-active');
        modal.classList.remove('modal-active');
        document.body.classList = '';
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
    if (window.innerWidth < 1024) {
        menuMain.classList.add('menu-mobile', 'transition-menu-mobile');
        subMenuMobile.classList.add('menu-mobile', 'transition-menu-mobile', 'menu-mobile-main',);
    }
    else {
        menuMain.classList.remove('menu-mobile', 'transition-menu-mobile');
        subMenuMobile.classList.remove('menu-mobile', 'transition-menu-mobile', 'menu-mobile-main');
    }
}

window.addEventListener('resize', resizeEvent);

resizeEvent();
