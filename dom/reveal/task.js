function reval() {
    let block = document.querySelectorAll('.reveal');

    function isVisable() {
        block.forEach(item => {
            const {
                top,
                bottom
            } = item.getBoundingClientRect();

            if (top > window.innerHeight) {
                item.classList.remove('reveal_active');
                return false;
            }
            if (bottom < 0) {
                item.classList.remove('reveal_active');
                return false;
            }
            item.classList.add('reveal_active');
            return true;
        });
    }

    setInterval(isVisable, 1000);

};

reval();