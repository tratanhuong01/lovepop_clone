const listItemMenu = document.getElementsByClassName('item-menu');
        const frontMenuActive = document.getElementById('front-menu-active');
        let isClick;
        let indexClick;
        [...listItemMenu].forEach((el, index) => {
            el.addEventListener('click', () => {
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
            });
        })