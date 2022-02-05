function hidenActive(arr, selectorActive) {
    arr.forEach(item => {
        if (item.nextElementSibling !== null) {
            item.nextElementSibling.classList.remove(selectorActive);
            return false;
        }
    });
}

function dropMenu(selector, selectorActiv) {
    let arr = document.querySelectorAll(selector);
    arr.forEach(item => {
        item.onclick = () => {
            if (item.nextElementSibling !== null) {
                if (!item.nextElementSibling.classList.contains(selectorActiv)) {
                    hidenActive(arr, selectorActiv);
                    item.nextElementSibling.classList.add(selectorActiv);
                    return false;
                } else {
                    hidenActive(arr, selectorActiv);
                    return false;
                }

            }

        };
    });
}

dropMenu('.menu_main .menu__link', 'menu_active');
dropMenu('.menu_aside .menu__link', 'menu_active');