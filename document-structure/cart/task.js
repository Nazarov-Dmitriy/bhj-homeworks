document.addEventListener('DOMContentLoaded', () => {
    let carts = document.querySelectorAll('.cart__product');
    let cartsList = document.querySelector('.cart__products');
    cartsList.parentElement.style.display = 'none';
    let cartsLocalStorage = [];


    if (localStorage.getItem('cart') !== null) {
        JSON.parse(localStorage.cart).forEach(element => {
            cartsLocalStorage.push(element);
            cartsList.innerHTML += `
            <div class="cart__product" data-id="${element.id}">
                <img class="cart__product-image" src="${element.src}">
                <div class="cart__product-count">${element.count}</div>
            </div>
            `;
            cartsList.parentElement.style.display = 'block';
        });
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
                    cartsLocalStorage.forEach(elem => {
                        if (elem.id === producAttribute) {
                            elem.count = Number(item.children[1].textContent);
                        }
                    });
                    localStorage.setItem('cart', JSON.stringify(cartsLocalStorage));
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
                let obj = {};
                obj.id = producAttribute;
                obj.src = e.target.closest('.product').children[1].getAttribute('src');
                obj.count = count.trim();
                cartsLocalStorage.push(obj);
                localStorage.setItem('cart', JSON.stringify(cartsLocalStorage));
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
                carts = document.querySelectorAll('.cart__product');
                if (producAttribute == item.getAttribute('data-id')) {
                    if (Number(item.children[1].textContent) > 1 && Number(item.children[1].textContent) > Number(count)) {
                        item.children[1].textContent = Number(item.children[1].textContent) - +count;
                        cartsLocalStorage.forEach(elem => {
                            if (elem.id === producAttribute) {
                                elem.count = Number(item.children[1].textContent);
                            }
                        });
                        localStorage.setItem('cart', JSON.stringify(cartsLocalStorage));
                    } else {
                        item.remove();
                        cartsLocalStorage.forEach((elem, index) => {
                            if (elem.id === producAttribute) {
                                cartsLocalStorage.splice(index, 1);
                                localStorage.setItem('cart', JSON.stringify(cartsLocalStorage));
                            }
                            if (cartsLocalStorage.length == 0) {
                                localStorage.removeItem('cart');
                            }
                        });
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