function dropDownMenu(selectorDropMenu, selectorValue, selectorMenu, activClass, selecorItem) {
    let dropDown = document.querySelector(`${selectorDropMenu} > ${selectorValue}`);
    let dropMenu = `${selectorDropMenu}   ${selectorMenu}`;
    let dropItem = `${selectorDropMenu} ${selecorItem}`;

    dropDown.addEventListener('click', (e) => {
        e.preventDefault();
        if (!document.querySelector(dropMenu).classList.contains(activClass)) {
            document.querySelector(dropMenu).classList.add(activClass);

        } else {
            document.querySelector(dropMenu).classList.remove(activClass);
        }
    });



    document.querySelectorAll(dropItem).forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            dropDown.textContent = item.children[0].textContent;
            document.querySelector(dropMenu).classList.remove(activClass);
        });
    });
}



dropDownMenu('.dropdown__one', '.dropdown__value', '.dropdown__list', 'dropdown__list_active', '.dropdown__item');
dropDownMenu('.dropdown__two ', '.dropdown__value', '.dropdown__list', 'dropdown__list_active', '.dropdown__item');