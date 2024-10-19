// const heading=document.getElementById('heading');
// console.log(heading);
// heading.textContent='Changed';

// // const para=document.getElementById('para');
// // console.log(para);
// // para.textContent='Changed paragraph';

// const newElement=document.createElement('div');
// newElement.textContent='New Element';

// const container=document.getElementById('container');
// container.appendChild(newElement);

// const input=document.getElementById('input');
// input.value='new';

// // const img=document.getElementById('image');
// // img.src="praju.jpeg";
// const box=document.getElementsByClassName('box')[0];
// console.log(box);
// box.style.backgroundColor='red';
// box.style.width='100px';

// const rem=document.getElementById('removed');
// console.log(rem);
// rem.remove();
// const box = document.getElementById("box");

// box.addEventListener("click", function () {
//   console.log("clicked");
//   box.style.backgroundColor = "red";
// });

// box.addEventListener("dblclick", function () {
//   alert("double clicked");
// });

// const input = document.getElementById("input");
// input.addEventListener("keydown", function () {
//   console.log("key down", event.key);
// });

// const form = document.querySelector("form");
// console.log(form);

// form.addEventListener("submit", function () {
//   event.preventDefault();
//   console.log("form submitted");

//   const username = document.getElementById("name");
//   const password = document.getElementById("password");

//   console.log("username", username.value);
//   console.log("password", password.value);
// });

const input = document.getElementById("color");
const change = document.getElementById("change");
const text = document.getElementById("text");

change.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("clicked");
  text.style.backgroundColor = input.value;
});

const vowel = document.getElementById("vowel");
const check = document.getElementById("check");
check.addEventListener("click", function () {
  const vowel = document.getElementById("vowel");
  const value = vowel.value;
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (vowels.includes(value[i])) {
      count++;
    }
  }
  alert(`Number of vowels in the string is ${count}`);
});

const textcolor = document.getElementById("textcolor");
const bgcolor = document.getElementById("bgcolor");
const content = document.getElementById("content");
const add = document.getElementById("add");
const coloredText = document.getElementById("coloredText");

add.addEventListener("click", function (event) {
  event.preventDefault();
  coloredText.innerText = content.value;
  coloredText.style.color = textcolor.value;
  coloredText.style.backgroundColor = bgcolor.value;
});

function arrayAnimal() {
    const animals = ["dogs", "cats", "rabbits", "mice"];
    for (let animal of animals) {
      console.log(animal + ": " + animal.includes('a'));
    }
    const filteredAnimals = animals.filter(animal => !animal.includes('a'));
    console.log(filteredAnimals);
  }
  
  arrayAnimal();
  