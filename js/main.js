const arrayImg =   [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

let attiva = 0;

const imgDom = document.querySelector('.wrapper-img');

for (let i = 0; i < arrayImg.length; i++ ){
    imgDom.innerHTML += `<div class="img">
                            <img src="${arrayImg[i]}"/>
                        </div>`;
}

const imgList = document.querySelector ('.img');

imgList[attiva].classList.add('show');