function cookieClicker() {
    let clickValue = document.getElementById('clicker__counter');
    let img = document.getElementById('cookie');
    let averageValue = 0;
    let start = new Date();

    img.onclick = () => {
        img.width == 200 ? (img.width = 400) : (img.width = 200);
        clickValue.textContent = Number(clickValue.textContent) + 1;
        let end = new Date();
        averageValue = (1 / ((end - start) / 1000)).toFixed(2);
        document.getElementById('click__average').textContent = averageValue;
        start = new Date();
    };
}

cookieClicker();