const switchButton = window.document.querySelector('.switch');

function checkInput(inputSwitch) {
    if(inputSwitch) {
        return false;
    } else {
        return true;
    }
}

switchButton.addEventListener('click', () => {
    const inputSwitch = window.document.querySelector('#id-checkbox');
    const slider = window.document.querySelector('.slider');
    const container = window.document.querySelector('.container');
    const tagBody = window.document.querySelector('body');

    inputSwitch.checked = checkInput(inputSwitch.checked);

    if(inputSwitch.checked == true) {
        slider.classList.add('sliderFinal');
        switchButton.classList.add('switchTheme');
        container.classList.add('containerTheme');
        tagBody.classList.add('bodyTheme');
    } else {
        slider.classList.remove('sliderFinal');
        switchButton.classList.remove('switchTheme');
        container.classList.remove('containerTheme');
        tagBody.classList.remove('bodyTheme');
    }
});