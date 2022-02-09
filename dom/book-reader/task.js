function bookReader() {
    let bookContent = document.querySelector('.book__content');


    function hideClass(arr, activ) {
        if (arr.length > 1) {
            arr.forEach(item => {
                item.classList.remove(activ);
            });
        } else {
            arr.classList.remove(activ);
        }
    }

    document.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e);
        console.log(e.target);
        if (e.target.classList.contains('font-size')) {
            let font = document.querySelectorAll('.font-size');
            hideClass(font, 'font-size_active');
            e.target.classList.add('font-size_active');
            if (e.target.hasAttribute('data-size')) {
                hideClass(bookContent, 'book_fs-big');
                hideClass(bookContent, 'book_fs-small');
                bookContent.classList.add(`book_fs-${e.target.getAttribute('data-size')}`);
            } else if (!e.target.hasAttribute('data-size')) {
                hideClass(bookContent, 'book_fs-big');
                hideClass(bookContent, 'book_fs-small');
            }
        }

        if (e.target.closest('.book__control_color')) {
            let color = document.querySelectorAll('.book__control_color .color');
            hideClass(color, 'color_active');
            e.target.classList.add('color_active');
            hideClass(bookContent, 'book_color-black');
            hideClass(bookContent, 'book_color-gray');
            hideClass(bookContent, 'book_color-whitesmoke');
            bookContent.classList.add(`book_color-${e.target.getAttribute('data-text-color')}`);
        }

        if (e.target.closest('.book__control_background')) {
            let color = document.querySelectorAll('.book__control_background .color');
            hideClass(color, 'color_active');
            e.target.classList.add('color_active');
            hideClass(bookContent, 'bg_color_black');
            hideClass(bookContent, 'bg_color_gray');
            hideClass(bookContent, 'bg_color_white');
            bookContent.classList.add(`bg_color_${e.target.getAttribute('data-bg-color')}`);
        }
    });
}

bookReader();