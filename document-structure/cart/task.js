document.addEventListener('DOMContentLoaded', () => {
    let carts = document.querySelectorAll('.cart__product');
    let cartsList = document.querySelector('.cart__products');
    cartsList.parentElement.style.display = 'none';

    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        }
        let a = document.querySelector('[data-id="' + key + '"]').children[1].getAttribute('src');
        cartsList.innerHTML += `
        <div class="cart__product" data-id="${key}">
            <img class="cart__product-image" src="${a}">
            <div class="cart__product-count">${localStorage.getItem(key)}</div>
        </div>
        `;

        if (localStorage.length > 0) {
            cartsList.parentElement.style.display = 'block';
        }
        carts = document.querySelectorAll('.cart__product');

    }

    function addProduct(e) {
        let target = e.target;
        if (target.classList.contains('product__add')) {
            let count = e.target.closest('.product').querySelector('.product__quantity-value').textContent;
            let producAttribute = e.target.closest('.product').getAttribute('data-id');
            let containsCatr = 0;

            carts.forEach(item => {
                if (producAttribute == item.getAttribute('data-id')) {
                    item.children[1].textContent = Number(item.children[1].textContent) + +count;
                    containsCatr++;
                    localStorage.setItem(item.getAttribute('data-id'), item.children[1].textContent);
                }
            });

            if (containsCatr == 0) {
                cartsList.innerHTML += `
                <div class="cart__product" data-id="${producAttribute}">
                    <img class="cart__product-image" src="${e.target.closest('.product').children[1].getAttribute('src')}">
                    <div class="cart__product-count">${count}</div>
                </div>
                `;
                carts = document.querySelectorAll('.cart__product');
                localStorage.setItem(producAttribute, count);
                if (cartsList.parentElement.style.display == 'none') {
                    cartsList.parentElement.style.display = 'block';
                }
            }
        }
    }

    function remove(e) {
        let target = e.target;
        if (target.classList.contains('product__remove')) {
            let count = e.target.closest('.product').querySelector('.product__quantity-value').textContent;
            let producAttribute = e.target.closest('.product').getAttribute('data-id');

            carts.forEach(item => {
                console.log(item);
                if (producAttribute == item.getAttribute('data-id')) {
                    if (Number(item.children[1].textContent) < 2) {
                        item.remove();
                        localStorage.removeItem(item.getAttribute('data-id'));
                    } else {
                        item.children[1].textContent = Number(item.children[1].textContent) - +count;
                        localStorage.setItem(item.getAttribute('data-id'), item.children[1].textContent);

                    }
                }
            });
            carts = document.querySelectorAll('.cart__product');
            if (carts.length == 0) {
                cartsList.parentElement.style.display = 'none';
            }
        }
    }



    document.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('product__quantity-control_inc')) {
            e.target.parentElement.querySelector('.product__quantity-value').textContent++;
        }
        if (target.classList.contains('product__quantity-control_dec')) {
            if (Number(e.target.parentElement.querySelector('.product__quantity-value').textContent) > 1) {
                e.target.parentElement.querySelector('.product__quantity-value').textContent--;
            }
        }

        addProduct(e);
        remove(e);

    });
});