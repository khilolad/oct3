const text = document.createElement('h1');
const age = document.createElement('p');
const backgroundcolor = document.querySelector('body');

text.textContent = prompt('Enter your name.');
age.textContent = prompt('Enter your age.');
backgroundcolor.style.backgroundColor = prompt('Enter any color.');
const textColor = prompt('Enter any color for the text.');

text.style.color = textColor;
age.style.color = textColor;
document.body.append(text, age);

