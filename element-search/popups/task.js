 document.querySelector('.modal').classList.add('modal_active');
 let hidenModal = document.querySelectorAll('.modal__close');
 hidenModal.forEach(item => {
     item.onclick = () => {
         item.closest('.modal').classList.remove('modal_active');
         document.querySelector('#modal_main').classList.remove('modal_active');
     };
 });

 document.querySelector('.show-success').onclick = () => {
     document.querySelector('#modal_success').classList.add('modal_active');
 };