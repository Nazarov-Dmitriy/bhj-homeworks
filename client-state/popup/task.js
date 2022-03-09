if(localStorage.popup !== '1'){
    document.querySelector('.modal').classList.add('modal_active');
}

document.querySelector('.modal__close').onclick = () => {
    document.querySelector('.modal').classList.remove('modal_active');
    localStorage.setItem('popup', 1);
};