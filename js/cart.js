btnCart.addEventListener('click', () => {
    modal.addEventListener('click', clickOutSide);
    modalCart.classList.add('modal-cart-active');
    modal.classList.add('modal-active');
})

btnCloseModalCart.addEventListener('click', () => {
    modal.removeEventListener('click', clickOutSide);
    modalCart.classList.remove('modal-cart-active');
    modal.classList.remove('modal-active');
})