const xhr = new XMLHttpRequest();
let items = document.querySelector('#items');
let arrLocolSorage = [];

function addItems(element) {
    items.innerHTML += `
    <div class="item" id ="${element.CharCode}">
        <div class="item__code">
            ${element.CharCode}
        </div>
        <div class="item__value">
            ${element.Value}
        </div>
        <div class="item__currency">
            руб.
        </div> 
  </div>
    `;
}

if (localStorage.getItem('preloader') !== null) {
    JSON.parse(localStorage.preloader).forEach(element => {
        addItems(element);
    });
    document.querySelector('.loader').classList.remove('loader_active');
}

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        document.querySelector('.loader').classList.remove('loader_active');
        Object.values(JSON.parse(xhr.responseText).response.Valute).forEach(element => {
            let obj = {};
            obj.CharCode = element.CharCode;
            obj.Value = element.Value;
            arrLocolSorage.push(obj);
            if (localStorage.getItem('preloader') !== null) {
                document.getElementById(element.CharCode).children[1].textContent = element.Value;
            } else {
                addItems(element);
            }
        });
        localStorage.setItem('preloader', JSON.stringify(arrLocolSorage));
    }

});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();