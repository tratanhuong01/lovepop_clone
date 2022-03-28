let currentNewRelease = 0;
const clickSliderNewRelease = (isNext) => {
    let currentNewRelease = Number(indexCurrentNewRelease.value);
    const size = Math.floor(sliderNewRelease.childElementCount / numberResizeNewRelease(true));
    if (isNext) {
        size <= currentNewRelease + 1 ? currentNewRelease = 0 : currentNewRelease += 1;
    }
    else {
        currentNewRelease - 1 < 0 ? currentNewRelease = size - 1 : currentNewRelease -= 1;
    }
    indexCurrentNewRelease.value = currentNewRelease;
    hanleSliderNewRelease(true);
    sliderNewRelease.style.transform = `translateX(-${currentNewRelease * 100}%)`;
}

btnNewRelease[0].addEventListener('click', () => { clickSliderNewRelease() });
btnNewRelease[1].addEventListener('click', () => { clickSliderNewRelease(true) });
