const advice_api = 'https://api.adviceslip.com/advice';
const content = document.getElementById("content");
const img = document.querySelector(".img");
const text = document.querySelector(".text");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const imgArr = [
    {
        id: 1,
        src: "img/01.jpg"
    },
    {
        id: 2,
        src: "img/02.png"
    },
    {
        id: 3,
        src: "img/03.jpg"
    },
    {
        id: 4,
        src: "img/04.jpeg"
    },
    {
        id: 5,
        src: "img/05.jpg"
    },
    {
        id: 6,
        src: "img/06.png"
    },
    {
        id: 7,
        src: "img/07.jpeg"
    },
    {
        id: 8,
        src: "img/08.jpg"
    },
    {
        id: 9,
        src: "img/09.jpg"
    },
    {
        id: 10,
        src: "img/10.jpeg"
    },
];

let adviceArr = [];
async function getAdvice(){
    const response = await fetch(advice_api);
    const data = await response.json();
    const {slip} = data;
    setText(slip.advice);
}


window.addEventListener("load", function(){
    getAdvice();
    getRandomBG();
});

let st = 0;
let next_prev = 0;


nextBtn.addEventListener("click", function(){
    if(next_prev == st){
        st++;
        next_prev++;
        getAdvice();
        getRandomBG();
        console.log(st, next_prev);
    }else if (next_prev < st){
        getRandomBG();
        text.textContent = adviceArr[next_prev].text;
        next_prev++;
        console.log(st, next_prev);        
        console.log(text.textContent = adviceArr[next_prev].text);
    }
});
prevBtn.addEventListener('click', function(){
    if(next_prev != 0){
        getRandomBG();
        next_prev--;
        text.textContent = adviceArr[next_prev].text;
        console.log(st, next_prev);
    }
});

function setText(arg){
    let obj = {text: arg};
    adviceArr.push(obj);
    text.textContent = adviceArr[adviceArr.length -1].text;
}

function getRandomBG(){
    let num =  Math.floor(Math.random() * imgArr.length);
    let imgSrc = imgArr[num].src;
    img.src = imgSrc;
}