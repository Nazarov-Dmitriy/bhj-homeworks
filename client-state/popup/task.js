if (getCookie('popup') !== 'close') {
    document.querySelector('.modal').classList.add('modal_active');
}

document.querySelector('.modal__close').onclick = () => {
    document.querySelector('.modal').classList.remove('modal_active');
    document.cookie = 'popup = close;max-age=2629743';
};


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

