const body = document.body;

const div = document.createElement('div');

div.textContent = 'Hello world';

body.append(div);

const h1 = body.querySelector('h1');

h1.style.color = 'red';

h1.style.backgroundColor = 'green';