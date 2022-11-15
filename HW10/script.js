'use strict';


function createChessBoard(number){
  let raw;
  let column;
  for (let i=0; i<number; i++){
    raw= document.createElement('tr')
    document.body.append(raw)
    for(let j=0; j<number; j++){
     column= document.createElement('td')
     column.textContent = '|_'
     document.body.append(column)
    }
  }

}

createChessBoard(9)

const listOfFruits = ['banana', 'orange', 'apple', 'lemon']

function renderList (arr){
  const ol = document.createElement('ol');
 document.body.prepend(ol)
  let arrLi = [];
  for (let i = 0; i<arr.length; i++){
    arrLi[i] = document.createElement('li');
    // ol.append(li[i])
  }
  console.log(arrLi)
  for (let i = 0; i<arr.length; i++){
    
    ol.append(arrLi[i])
    arrLi[i].innerText = listOfFruits[i]
  }
  // const liNew = .forEach(item => item.append(''))
}

// renderList(listOfFruits)



const title = 'My new blog'
const subtitle = 'This blog about my life'
const text = ['First paragraph about my life before war', 'Second paragraph is very important because my life is fully changed after the war started']
function renderBlog(title, subtitle, text){
  const divBlock = document.createElement('div')

  divBlock.innerHTML = ` 
    <h1>${title}</h2>
    <h2>${subtitle}</h2>
    ${text.map(paragraph => {
      return `<p> ${paragraph} </p>`
    }).join('')}
  `;

  document.body.append(divBlock)
  

}

renderBlog(title, subtitle, text)

