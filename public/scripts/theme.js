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
        slider.classList.add('slider-light-theme');
        switchButton.classList.add('switch-light-theme');
        container.classList.add('container-light-theme');
        tagBody.classList.add('body-light-theme');
    } else {
        slider.classList.remove('slider-light-theme');
        switchButton.classList.remove('switch-light-theme');
        container.classList.remove('container-light-theme');
        tagBody.classList.remove('body-light-theme');
    }
});