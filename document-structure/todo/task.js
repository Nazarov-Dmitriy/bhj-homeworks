document.addEventListener('DOMContentLoaded', (e) => {
    const input = document.getElementById('task__input');
    let messages = document.querySelector('.tasks__list');
    let counterKey = localStorage.length;
    e.preventDefault();

    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        }
        addInput(localStorage.getItem(key), key);
    }

    function addInput(value, key) {
        messages.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${value}
            </div>
            <a href="#" class="task__remove" data-key = ${key}>&times;</a>
        </div>           
        `;
        input.value = '';
    }

    input.addEventListener('keypress', (e) => {
        if (e.key == 'Enter' && input.value !== '') {
            localStorage.setItem(counterKey, input.value);
            addInput(input.value, counterKey);
            counterKey++;
        }
    });

    document.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('tasks__add') && input.value !== '') {
            localStorage.setItem(counterKey, input.value);
            addInput(input.value, counterKey);
            counterKey++;
        }
        if (target.classList.contains('task__remove')) {
            target.closest('.task').remove();
            localStorage.removeItem(target.getAttribute('data-key'));
        }
    });
});