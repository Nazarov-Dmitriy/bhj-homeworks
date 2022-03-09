document.addEventListener('DOMContentLoaded', () => {
    let btnSubmit = document.getElementById('signin__btn');
    let btnSLogout = document.getElementById('logout__btn');

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.getElementById('signin__form');
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === xhr.DONE && xhr.status == 200) {
                if (JSON.parse(xhr.responseText).success) {
                    document.getElementById('signin').classList.remove('signin_active');
                    document.getElementById('welcome').classList.add('welcome_active');
                    document.getElementById('user_id').textContent = JSON.parse(xhr.responseText).user_id;
                } else {

                    if (document.querySelector('.error_label') == null) {
                        let errorMessage = document.createElement('div');
                        errorMessage.classList.add('error_label');
                        errorMessage.textContent = 'Неверный логин/пароль';
                        document.getElementById('signin__form').after(errorMessage);
                        setTimeout(() => {
                            document.querySelector('.error_label').remove();
                        }, 2000);
                    }
                }
            }

        });

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.send(formData);
    });

    btnSLogout.addEventListener('click', (e) => {
        e.preventDefault();

        document.getElementById('signin').classList.add('signin_active');
        document.getElementById('welcome').classList.remove('welcome_active');
        document.getElementById('user_id').textContent = '';
        document.querySelector('[name="password"]').value ='';
        document.querySelector('[name="login"]').value ='';
    });
});

