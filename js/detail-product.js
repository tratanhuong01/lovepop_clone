let isClickDetailInfo = true;
let currentNewRelease = 0;

buttonDetailInfo.addEventListener('click', () => {
    if (isClickDetailInfo) {
        detailInfo.style = 'max-height: 0px;overflow: hidden;';
        buttonDetailInfo.children[1].classList.add('bx-plus')
        buttonDetailInfo.children[1].classList.remove('bx-minus')
    }
    else {
        detailInfo.style = `max-height: 1000px`;
        buttonDetailInfo.children[1].classList.remove('bx-plus')
        buttonDetailInfo.children[1].classList.add('bx-minus')
    }
    isClickDetailInfo = !isClickDetailInfo
})

const clickSliderNewRelease = (isNext) => {
    let currentNewRelease = Number(indexCurrentNewRelease.value);
    const size = Math.floor(sliderNewRelease.childElementCount / numberResizeNewRelease());
    if (isNext) {
        size <= currentNewRelease + 1 ? currentNewRelease = 0 : currentNewRelease += 1;
    }
    else {
        currentNewRelease - 1 < 0 ? currentNewRelease = size - 1 : currentNewRelease -= 1;
    }
    indexCurrentNewRelease.value = currentNewRelease;
    hanleSliderNewRelease();
    sliderNewRelease.style.transform = `translateX(-${currentNewRelease * 100}%)`;
}

btnNewRelease[0].addEventListener('click', () => { clickSliderNewRelease() });
btnNewRelease[1].addEventListener('click', () => { clickSliderNewRelease(true) });

[...smallSliderImage.children].forEach((el, index) => {
    el.addEventListener('click', () => {
        indexCurrentBigSliderImage.value = index - 1;
        handleBigSliderImage(true);
    })
})

const handleBigSliderImage = (isNext) => {
    let length = bigSliderImage.children.length;
    if (isNext) {
        indexCurrentBigSliderImage.value = Number(indexCurrentBigSliderImage.value) + 1 >= length ? 0
            : Number(indexCurrentBigSliderImage.value) + 1;
        bigSliderImage.style.transform = `translateX(-${Number(indexCurrentBigSliderImage.value) * 100}%)`
    }
    else {
        indexCurrentBigSliderImage.value = Number(indexCurrentBigSliderImage.value) - 1 < 0 ? length - 1
            : Number(indexCurrentBigSliderImage.value) - 1;
        bigSliderImage.style.transform = `translateX(-${Number(indexCurrentBigSliderImage.value) * 100}%)`
    }
}

bigButtonSliderImage[0].addEventListener('click', () => { handleBigSliderImage() })
bigButtonSliderImage[1].addEventListener('click', () => { handleBigSliderImage(true) })

const handleSmallSliderImage = (isNext) => {
    let length = smallSliderImage.children.length;
    let current = Number(indexCurrentSmallSliderImage.value);
    if (isNext) {
        indexCurrentSmallSliderImage.value = current + 1 > length ? 4
            : current + 1;
        smallSliderImage.style.transform = `translateX(-${(current - 4) * 25}%)`
    }
    else {
        indexCurrentSmallSliderImage.value = current - 1 === 4 ? length
            : current - 1;
        smallSliderImage.style.transform = `translateX(-${(current - 4) * 25}%)`
    }
}

smallButtonSliderImage[0].addEventListener('click', () => { handleSmallSliderImage() })
smallButtonSliderImage[1].addEventListener('click', () => { handleSmallSliderImage(true) })
