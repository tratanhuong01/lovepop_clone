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


const removeItemCart = (id) => {
    let resultConfirmCart = window.confirm('Are you sure you want to remove this item from your cart?');
    if (resultConfirmCart) {
        //
        //
        document.getElementById(`item-cart-${id}`).remove();
        if (tableCartMain.children.length === 1) {
            tableCartMain.style.display = 'none';
            noCartItem[0].style.display = 'block';
            noCartItem[1].style.display = 'block';
        }
        else {
            tableCartMain.style.display = 'block';
            noCartItem[0].style.display = 'none';
            noCartItem[1].style.display = 'none';
        }
    }
}

const loadContentRightCart = () => {
    if (lengthCart && numberProcessCurrent) {
        let length = Number(lengthCart.value);
        numberProcessCurrent.innerHTML = length;
        let arr = [];
        for (let index = 0; index < length; index++) arr.push(index);
        let htmlString = '';
        [0, 1, 2, 3, 4].forEach((item) => {
            htmlString += `<li class="${item < length ? 'bg-green_second' : 'bg-gray-200'} py-1.5 ${item === 0 ?
                'rounded-l-xl' : item === 4 ? 'rounded-r-xl' : ''} w-1/5"></li>`;
        })
        processBarCartBig.innerHTML = htmlString;
    }
}

const handleAmount = (id, type) => {
    const amountCartItem = document.getElementById(`amount-cart-${id}`);
    switch (type) {
        case 0:
            if (Number(amountCartItem.children[1].innerHTML) === 1) {
                removeItemCart(id)
            }
            else {
                if (Number(amountCartItem.children[1].innerHTML) - 1 === 1) {
                    amountCartItem.children[0].classList.remove('bx-minus');
                    amountCartItem.children[0].classList.add('bx-trash-alt');
                }
                amountCartItem.children[1].innerHTML = Number(amountCartItem.children[1].innerHTML) - 1;
            }
            break;
        case 1:
            amountCartItem.children[1].innerHTML = Number(amountCartItem.children[1].innerHTML) + 1;
            amountCartItem.children[0].classList.remove('bx-trash-alt');
            amountCartItem.children[0].classList.add('bx-minus');
            break;
        default:
            break;
    }
}

loadContentRightCart();