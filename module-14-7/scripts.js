const input1 = document.querySelector('.inp')
const input2 = document.querySelector('.inp2')
const button1 = document.querySelector('.btn')
const resultNode = document.querySelector('.result')


 function clickBtn(link){
    if ( isNaN(input1.value) || input1.value < 1 || input1.value > 10){
      resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
    }
   else if (isNaN (input2.value) || input2.value < 1 || input2.value > 10){
     resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10'
   }
    else{
      return fetch(link)
            .then((response)=>{
                console.log(response)
                displayResult(response.url)
                return response
            })
            .catch(() => { console.log('Номер страницы и лимит вне диапазона от 1 до 10') })
    }
}

function displayResult(link){
  let cards = ''
  cards = cards + `<img class="image" src="${link}" alt="image">`
  resultNode.innerHTML=cards
}


button1.addEventListener('click', async (e)=>{
  e.preventDefault()
  const url=`https://jsonplaceholder.typicode.com/${input1.value}/${input2.value}`
  const requestResult = await clickBtn(url)
  console.log(requestResult)
})

