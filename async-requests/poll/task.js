const xhr = new XMLHttpRequest();
let pollTitle = document.querySelector('.poll__title');
let poll = document.querySelector('.poll');
let pollAnswers = document.querySelector('.poll__answers');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        pollTitle.innerHTML += JSON.parse(xhr.responseText).data.title;

        Object.values(JSON.parse(xhr.responseText).data.answers).forEach(element => {
            pollAnswers.innerHTML += `
               <button class="poll__answer">
                    ${element}
              </button>
            `;
        });

        let request = new XMLHttpRequest();

        document.querySelectorAll('#poll__answers').forEach((element, index) => {
            element.addEventListener('click', () => {
                alert('Ваш голос засчитан');
                request.addEventListener('readystatechange', () => {
                    if (request.readyState === xhr.DONE) {
                        let sum = 0;
                        pollAnswers.remove();
                        Object.values(JSON.parse(request.responseText).stat).forEach(element => {
                            sum += Number(element.votes);
                        });
                        
                        Object.values(JSON.parse(request.responseText).stat).forEach(element => {
                            poll.innerHTML += `
                            <div>
                              ${element.answer}:  ${((Number(element.votes)/sum)*100).toFixed(1)} %
                            </div>
                            `;
                        });
                    }
                });
                request.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                request.send(`vote=${JSON.parse(xhr.responseText).id}&answer=${index}`);
            });
        });
    }

});



xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();