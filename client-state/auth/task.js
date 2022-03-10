document.addEventListener('DOMContentLoaded', () => {
    let btnSubmit = document.getElementById('signin__btn'),
        btnSLogout = document.getElementById('logout__btn'),
        signin = document.getElementById('signin'),
        welcome = document.getElementById('welcome'),
        userId = document.getElementById('user_id');


    if (localStorage.getItem('user_id') !== null) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.textContent = localStorage.getItem('user_id');
    }

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.getElementById('signin__form');
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.responseType = 'json';

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === xhr.DONE && xhr.status == 200) {
                let signinForm = document.getElementById('signin__form');
                if (xhr.response.success) {
                    signin.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                    userId.textContent = xhr.response.user_id;
                    signinForm.reset();
                    localStorage.setItem('user_id', xhr.response.user_id);
                } else {
                    if (document.querySelector('.error_label') == null) {
                        signinForm.reset();
                        let errorMessage = document.createElement('div');
                        errorMessage.classList.add('error_label');
                        errorMessage.textContent = 'Неверный логин/пароль';
                        signinForm.after(errorMessage);
                        setTimeout(() => {
                            document.querySelector('.error_label').remove();
                        }, 2000);
                    }
                }
            }
        });


        xhr.send(formData);
    });

    btnSLogout.addEventListener('click', (e) => {
        e.preventDefault();
        signin.classList.add('signin_active');
        welcome.classList.remove('welcome_active');
        userId.textContent = '';
        localStorage.removeItem('user_id');
    });
});