const btnGenerate = window.document.querySelector('#btn-generate');

function passwordGenerate(numberChars) {
    const numbers = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = upperChars.toLocaleLowerCase();
    const specialChars = '!@#$%&*()_[];.{}/|?';
    const chars = [numbers, upperChars, lowerChars, specialChars].join('').split('');
    let password = '';

    for(let i = 0; i < numberChars; i++) {
        password += chars[parseInt(Math.random()*chars.length)];
    }

    return password;
}

btnGenerate.addEventListener('click', (e) => {
    e.preventDefault();

    const inputPassword = window.document.querySelector('#id-password');
    const numberChars = parseInt(window.document.querySelector('#id-number-chars').value);
    
    inputPassword.value = passwordGenerate(numberChars);
});