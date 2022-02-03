let dead = 0;
let lost = 0;

document.querySelectorAll('.hole-game')[0].onclick = (e) => {
    if (e.target.classList.contains('hole_has-mole')) {
        dead++;
        document.getElementById('dead').textContent = dead;
    } else {
        lost++;
        document.getElementById('lost').textContent = lost;
    }

    if (dead == 10) {
        alert('Победа');
        dead = 0;
        lost = 0;
        document.getElementById('dead').textContent = dead;
        document.getElementById('lost').textContent = lost;
    }
    if (lost == 5) {
        alert('Проигрыш');
        dead = 0;
        lost = 0;
        document.getElementById('dead').textContent = dead;
        document.getElementById('lost').textContent = lost;
    }
};