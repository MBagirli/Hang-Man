let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let situation__btn = document.querySelector('.situation__container__btn');
let situation = document.querySelector('.situation');
let situation__container = document.querySelector('.situation__container');
let situation__h2 = document.querySelector('.situation__container__h2');
let popup = document.querySelector('.popup__container');
let popup__message = document.querySelector('.message');
let word = document.querySelector('.word');
let human__part = document.querySelectorAll('.human');
let human__part__Array = [];
human__part.forEach(function (element) {
  human__part__Array.push(element);
});
let Word_Array = ['hello', 'bye', 'good', 'bad', 'great', 'hi', 'programming', 'math'];
let repeated__words = [];
let Random_Word;
let countforwin = 0;
let countforlose = 0;

situation__btn.addEventListener('click', function () {
  situation.style.display = 'none';
  countforwin = 0;
  countforlose = 0
  human__part.forEach(function (element) {
    element.classList.remove('visible');
  });
  repeated__words = [];
  Random_Word = Word_Array[Math.floor(Math.random() * Word_Array.length)];
  word.innerHTML = '';
  for (let i = 0; i < Random_Word.length; i++) {
    let span = document.createElement('span');
    word.innerHTML += '<span class="letter">*</span>';
  }
});

btn.addEventListener('click', function () {
  if (input.value == '') {
    Popup('You did not write anything!');
  } else if (!isNaN(input.value)) {
    Popup('It is not string!');
  } else if (input.value.length != 1) {
    Popup('You can write one letter!');
  } else if (repeated__words.includes(input.value)) {
    Popup('You have already wrote this letter!');
  } else if (Random_Word.includes(input.value)) {
    let allspans = document.querySelectorAll('.letter');
    let arrayofspans = [];
    allspans.forEach(function (item) {
      arrayofspans.push(item);
    });
    for (let i = 0; i < Random_Word.length; i++) {
      if (input.value == Random_Word[i]) {
        arrayofspans[i].textContent = input.value;
        countforwin++;
      }
    }
    repeated__words.push(input.value);
    if (countforwin == Random_Word.length) {
      WinorLose('You Won!', 'rgba(0, 201, 0,0.8)');
    }
  } else {
    countforlose++;
    let index;
    do {
      index = Math.floor(Math.random() * human__part__Array.length);
    }
    while (human__part__Array[index].classList.contains('visible'));
    human__part__Array[index].classList.add('visible');
    repeated__words.push(input.value);

    if (countforlose == human__part__Array.length) {
      WinorLose('You Lost!', 'rgba(201, 0, 0,0.8)');
    }
  }
  input.value = '';
});

function Popup(a) {
  popup__message.textContent = a;
  popup.classList.add('open');
  setTimeout(function () {
    popup.classList.remove('open');
  }, 1500);
}

function WinorLose(a, b) {
  situation.style.display = 'flex';
  situation__h2.textContent = a
  situation__btn.textContent = 'Play Again!';
  situation__container.style.backgroundColor = b;
}