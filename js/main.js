const arrayImg =   [
    "img/01.jpg",   // 0
    "img/02.jpg",   // 1
    "img/03.jpg",   // 2
    "img/04.jpg",   // 3
    "img/05.jpg",   // 4
];

let attiva = 0;

const imgDom = document.querySelector('.wrapper-img');
// Creo i div con le immagini nell'HTML
for (let i = 0; i < arrayImg.length; i++ ){
    imgDom.innerHTML += `<div class="img">
                            <img src="${arrayImg[i]}"/>
                        </div>`;
}


const imgList = document.getElementsByClassName('img');


imgList[attiva].classList.add('show');



const rightDom = document.querySelector('.right');

rightDom.addEventListener('click',
    function () {

        imgList[attiva].classList.remove('show');

        attiva++;

        imgList[attiva].classList.add('show');


      
        leftDom.classList.remove('none');

        if (attiva == imgList.length - 1){
            rightDom.classList.add('none');
        }
     
    }
);


const leftDom = document.querySelector('.left');

leftDom.addEventListener('click',
    function () {


        imgList[attiva].classList.remove('show');
        attiva--;
        imgList[attiva].classList.add('show');


 
        rightDom.classList.remove('none');

        if (attiva == 0){
            leftDom.classList.add('none');
        }
  

    }
);