document.querySelector('#send').addEventListener('click', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    let formData = new FormData(form);

    xhr.upload.addEventListener("progress", function (e) {
        if (e.lengthComputable) {
            document.querySelector('#progress').value = Math.round((e.loaded * 100) / e.total) / 100;
        }
    }, false);

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);

});