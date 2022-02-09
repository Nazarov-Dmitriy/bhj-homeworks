function ads() {
    let arr = document.querySelectorAll('.rotator__case');
    let speed = arr[i = seachIndex()].getAttribute('data-speed');
    let interval = setInterval(rotator, speed);
    arr[0].style.color = arr[0].getAttribute('data-color');

    function hideItem(arr, activ) {
        arr.forEach(item => {
            item.classList.remove(activ);
        });
    }

    function showItem(arr, index, activ) {
        arr[index].classList.add(activ);
    }

    function seachIndex() {
        return Array.from(arr).findIndex(function (element) {
            return element.classList.contains('rotator__case_active');
        });
    }

    function rotator() {
        let i = seachIndex();
        hideItem(arr, 'rotator__case_active');
        if (i + 1 > arr.length - 1) {
            i = 0;
            arr[i].style.color = arr[i].getAttribute('data-color');
            showItem(arr, i, 'rotator__case_active');
            speed = arr[i].getAttribute('data-speed');
            clearInterval(interval);
            interval = setInterval(rotator, speed);
        } else {
            arr[i + 1].style.color = arr[i + 1].getAttribute('data-color');
            showItem(arr, i + 1, 'rotator__case_active');
            speed = arr[i + 1].getAttribute('data-speed');
            clearInterval(interval);
            interval = setInterval(rotator, speed);
        }
    }


}

ads();