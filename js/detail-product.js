let isClickDetailInfo = true;
let currentNewRelease = 0;

buttonDetailInfo.addEventListener('click', () => {
    if (isClickDetailInfo) {
        detailInfo.style = 'max-height: 0px;overflow: hidden;';
        buttonDetailInfo.children[1].classList.add('bx-plus')
        buttonDetailInfo.children[1].classList.remove('bx-minus')
    }
    else {
        detailInfo.style = `max-height: 500px`;
        buttonDetailInfo.children[1].classList.remove('bx-plus')
        buttonDetailInfo.children[1].classList.add('bx-minus')
    }
    isClickDetailInfo = !isClickDetailInfo
})

const clickSliderNewRelease = (isNext) => {
    if (isNext) {
        if (Math.floor(sliderNewRelease.childElementCount / 4) <= currentNewRelease + 1) {
            currentNewRelease = 0
        }
        else {
            currentNewRelease += 1
        }
    }
    else {
        if (currentNewRelease - 1 < 0) {
            currentNewRelease = Math.floor(sliderNewRelease.childElementCount / 4) - 1;
        }
        else {
            currentNewRelease -= 1;
        }
    }
    sliderNewRelease.style.transform = `translateX(-${currentNewRelease * 100}%)`;
}
btnNewRelease[0].addEventListener('click', () => { clickSliderNewRelease() });
btnNewRelease[1].addEventListener('click', () => { clickSliderNewRelease(true) });