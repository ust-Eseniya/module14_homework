const resultNode = document.querySelector('.j-result');

const btnNode = document.querySelector('.btn');

function displayResult(result) {
  let cards = '';
  
  result.forEach (item => {
    const cardBlock = `
    <div class = "card">
    <img
    src="${item.thumbnaiUrl}"
    class="card-image"
    />
    <p>${item.title}</p>
    </div>
    `;
    cards = cards + cardBlock;
  });
  
  resultNode.innerHTML = cards;
}


btnNode.addEventListener('click', () => {
  const value = document.querySelector().value;
  
  if (value < 1 || value > 10){
    resultNode.innerHTML = 'число вне диапазона от 1 до 10';
  } else {
    const url = `https://jsonplaceholder.typicode.com/photos?_limit=5`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        displayResult(result)
      }
    };

    xhr.onerror = function(){
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  }
})