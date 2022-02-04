function slider(selector, activClass, selectorTabs, tabsActive) {
    let arrowNext = document.querySelector('.slider__arrow_next');
    let arrowPrev = document.querySelector('.slider__arrow_prev');
    let content = document.querySelectorAll(selector);
    let tabs = document.querySelectorAll(selectorTabs);

    function hideItem(arr, activ) {
        arr.forEach(item => {
            item.classList.remove(activ);
        });
    }

    function showItem(arr, index, activ) {
        arr[index].classList.add(activ);
    }

    function seachIndex() {
        return Array.from(content).findIndex(function (element) {
            return element.classList.contains(activClass);
        });

    }

    arrowNext.onclick = () => {
        let i = seachIndex();
        hideItem(content, activClass);
        hideItem(tabs, tabsActive);
        if (i + 1 > content.length - 1) {
            i = 0;
            showItem(content, i, activClass);
            showItem(tabs, i, tabsActive);
        } else {
            showItem(content, i + 1, activClass);
            showItem(tabs, i + 1, tabsActive);
        }
    };

    arrowPrev.onclick = () => {
        let i = seachIndex();
        hideItem(content, activClass);
        hideItem(tabs, tabsActive);
        if (i - 1 < 0) {
            i = content.length - 1;
            showItem(content, i, activClass);
            showItem(tabs, i, tabsActive);
        } else {
            showItem(content, i - 1, activClass);
            showItem(tabs, i - 1, tabsActive);
        }
    };

    function tabsShow() {
        tabs.forEach((item, index) => {
            item.onclick = () => {
                hideItem(content, activClass);
                hideItem(tabs, tabsActive);
                showItem(content, index, activClass);
                showItem(tabs, index, tabsActive);
            };
        });
    }
    tabsShow();
}


slider('.slider__item', 'slider__item_active', '.slider__dot', 'slider__dot_active');