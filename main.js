let mySpan = document.querySelector('h3 span');
let myContent = document.querySelector('p');

let content = '';

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then((res) => {
       let myJson = res.json();
       return myJson;
    }).then((data) => {
        var id = data.slip.id;
        var advice = data.slip.advice;
        content = advice;
        mySpan.innerHTML = id;
        myContent.innerHTML = content;
    })
}


document.querySelector('.btn').addEventListener('click', getAdvice);
