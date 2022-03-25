

let currentMagicMoment = 0;
let currentNewRelease = 0;

const clickSliderMagicMoment = (isNext) => {
    if (window.innerWidth >= 1024) {
        if (isNext) {
            if (sliderMagicalMoment.children.length - 1 === currentMagicMoment) {
                currentMagicMoment = 0;
            }
            else {
                currentMagicMoment += 1;
            }
        }
        else {
            if (currentMagicMoment - 1 < 0) {
                currentMagicMoment = sliderMagicalMoment.children.length - 1;
            }
            else {
                currentMagicMoment -= 1;
            }
        }
        sliderMagicalMoment.style.transform = `translateX(-${currentMagicMoment * 100}%)`;
    }
}

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
        console.log(currentNewRelease);
    }
    sliderNewRelease.style.transform = `translateX(-${currentNewRelease * 100}%)`;
}

btnMagicalMoment[0].addEventListener('click', () => { clickSliderMagicMoment() });
btnMagicalMoment[1].addEventListener('click', () => { clickSliderMagicMoment(true) });

btnNewRelease[0].addEventListener('click', () => { clickSliderNewRelease() });
btnNewRelease[1].addEventListener('click', () => { clickSliderNewRelease(true) });
