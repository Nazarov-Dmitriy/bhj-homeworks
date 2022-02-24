document.addEventListener('click', (e) => {
    e.preventDefault();
     function hideTooltip() {
        document.querySelectorAll('.tooltip_active').forEach(el => {
            el.remove();
        });
    }

    if (e.target.classList.contains('has-tooltip')) {
        if (e.target.previousSibling.tagName !== 'DIV') {
            hideTooltip();
            e.target.insertAdjacentHTML('beforeBegin', `<div class="tooltip tooltip_active" data-position="right">${e.target.title}</div>`);
            let toolActive = document.querySelector('.tooltip_active');

            switch (document.querySelector('.tooltip_active').getAttribute('data-position')) {
                case 'top':
                    toolActive.style.left = e.target.offsetLeft + 'px';
                    toolActive.style.top = e.target.offsetTop - e.target.offsetHeight - 10 + 'px';
                    break;
                case 'left':
                    console.log(e.target.offsetLeft);
                    console.log(e.target.offsetWidth);
                    console.log(toolActive.offsetWidth);
                    toolActive.style.left = e.target.offsetLeft - toolActive.offsetWidth - 5 + 'px';
                    toolActive.style.top = e.target.offsetTop - 5 + 'px';
                    if (e.target.offsetLeft < toolActive.offsetWidth) {
                        toolActive.style.left = e.target.offsetLeft + e.target.offsetWidth + 5 + 'px';
                        toolActive.style.top = e.target.offsetTop - 5 + 'px';
                    }
                    break;
                case 'right':
                    toolActive.style.left = e.target.offsetLeft + e.target.offsetWidth + 5 + 'px';
                    toolActive.style.top = e.target.offsetTop - 5 + 'px';
                    break;
                case 'bottom':
                    toolActive.style.left = e.target.offsetLeft + 'px';
                    toolActive.style.top = e.target.offsetTop + e.target.offsetHeight + 'px';
                    break;
                default:
                    console.log('Укаите атрибут data');
            }
        } else {
            hideTooltip();
        }
    }
});



// ```html
// <div class="tooltip">Текст подсказки</div>
// ```

// Данные для текста подсказки берутся из атрибута *title*

// Подсказки активируются классом *tooltip_active*