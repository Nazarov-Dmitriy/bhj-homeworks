function countDown() {
    let time = document.getElementById('timer').textContent;
    let arrTime = time.split(':');
    let totalTime = (Number(arrTime[0]) * 60 * 60) + (Number(arrTime[1]) * 60) + Number(arrTime[2]);

    function addZero(num) {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock() {
        timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            let seconds = Math.floor(totalTime % 60);
            let minutes = Math.floor((totalTime / 60) % 60);
            let hours = Math.floor(totalTime / (60 * 60));
            document.getElementById('timer').textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
            totalTime = totalTime - 1;
            if (totalTime <= 0) {
                document.getElementById('timer').textContent = '00:00:00';
                clearInterval(timeInterval);
                alert('«Вы победили в конкурсе!»');
            }
        }
    }
    setClock();

}

countDown();