let textarea = document.getElementById('editor');

textarea.value = localStorage.getItem('textEditor');


textarea.addEventListener('keyup', () => {
    localStorage.setItem('textEditor', document.querySelector('#editor').value);
    if (localStorage.getItem('textEditor').length <= 0) {
        localStorage.removeItem('textEditor');
    }
});

document.querySelector('#btn').addEventListener('click', () => {
    textarea.value = '';
    localStorage.removeItem('textEditor');
});