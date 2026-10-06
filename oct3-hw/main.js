const text = document.createElement('h1');
const age = document.createElement('p');
const backgroundcolor = document.querySelector('body');

text.textContent = prompt('Enter your name.');
age.textContent = prompt('Enter your age.');
document.body.append(text, age);
backgroundcolor.style.backgroundColor = prompt('Enter any color.');

