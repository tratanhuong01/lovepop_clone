const clickSliderMagicMoment = (isNext) => {
    let currentMagicMoment = Number(indexCurrentMagicalMoment.value);
    if (window.innerWidth >= 1024) {
        if (isNext) {
            sliderMagicalMoment.children.length - 1 === currentMagicMoment ?
                currentMagicMoment = 0 : currentMagicMoment += 1;
        }
        else {
            currentMagicMoment - 1 < 0 ? currentMagicMoment = sliderMagicalMoment.children.length - 1
                : currentMagicMoment -= 1;
        }
        indexCurrentMagicalMoment.value = currentMagicMoment;
        handleSliderMagicalMoment();
        sliderMagicalMoment.style.transform = `translateX(-${currentMagicMoment * 100}%)`;
    }
}

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

btnMagicalMoment[0].addEventListener('click', () => { clickSliderMagicMoment() });
btnMagicalMoment[1].addEventListener('click', () => { clickSliderMagicMoment(true) });

btnNewRelease[0].addEventListener('click', () => { clickSliderNewRelease() });
btnNewRelease[1].addEventListener('click', () => { clickSliderNewRelease(true) });
