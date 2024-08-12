const body = document.body;

body.append(); // can append text
body.appendChild(); // MUST append a tag

body.append('hello');
body.appendChild('hello', div);

var div = document.createElement('div');

div.innerText = 'Hello World';
div.textContent = 'Hello World';

div.innerHTML = '<p>Hello World</p>' // security concerns

document.getElementById(); // id='hello'
document.getElementsByClassName(); // className='btn-primary'
document.querySelector(); // first css selector
document.querySelectorAll(); //For all elements matching a CSS selector.

div.remove(); // removes the div
div.append(); // adds the div
div.removeChild('span') // '<span id='hi'>Hello</span>'

div.getAttribute('id');

div.setAttribute('title', 'how are you?');

div.id = 'afdsadfs';

div.remove('id');

div.classList.add('new-class');

div.style.color = 'red';

div.style.backgroundColor = 'green';