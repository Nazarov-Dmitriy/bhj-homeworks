document.addEventListener('DOMContentLoaded', (e) => {
    const input = document.getElementById('task__input');
    let messages = document.querySelector('.tasks__list');
    let arr = [];
    e.preventDefault();

    if (localStorage.getItem('todo') !== null) {
        JSON.parse(localStorage.todo).forEach(element => {
            addInput(element);
            arr.push(element);
        });
    }

    function addInput(value) {
        messages.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>           
        `;
        input.value = '';
    }

    input.addEventListener('keypress', (e) => {
        if (e.key == 'Enter' && input.value.trim() !== '') {
            arr.push(input.value);
            addInput(input.value);
            localStorage.setItem('todo', JSON.stringify(arr));
        }
    });

    document.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('tasks__add') && input.value.trim() !== '') {
            arr.push(input.value);
            addInput(input.value);
            localStorage.setItem('todo', JSON.stringify(arr));
        }
        if (target.classList.contains('task__remove')) {
            let removeElem = arr.indexOf(target.previousElementSibling.textContent.trim());
            arr.splice(removeElem, 1);
            localStorage.setItem('todo', JSON.stringify(arr));
            if (arr.length == 0) {
                localStorage.removeItem('todo');
            }

            target.closest('.task').remove();
        }
    });
});