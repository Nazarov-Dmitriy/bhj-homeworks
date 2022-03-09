if (localStorage.getItem('textEditor') !== null) {
    document.querySelector('#editor').value = JSON.parse(localStorage.textEditor);
}

document.querySelector('#editor').addEventListener('keyup', () => {
    localStorage.setItem('textEditor', JSON.stringify(document.querySelector('#editor').value));
    if (localStorage.getItem('textEditor').length <= 2) {
        localStorage.removeItem('textEditor');
    }
});

document.querySelector('#btn').addEventListener('click', () => {
    document.querySelector('#editor').value = '';
    localStorage.removeItem('textEditor');
});