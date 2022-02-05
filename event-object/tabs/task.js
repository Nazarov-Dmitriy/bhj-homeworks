function hideTab() {
    document.querySelectorAll('.tab').forEach((item, index) => {
        if (item.classList.contains('tab_active')) {
            item.classList.remove('tab_active');
            document.querySelectorAll('.tab__content')[index].classList.remove('tab__content_active');
        }
    });
}

document.querySelectorAll('.tab').forEach((item, index) => {
    item.addEventListener('click', (e) => {
        hideTab();
        item.classList.add('tab_active');
        document.querySelectorAll('.tab__content')[index].classList.add('tab__content_active');
    });
});