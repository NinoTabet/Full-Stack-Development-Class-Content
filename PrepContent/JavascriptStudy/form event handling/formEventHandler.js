// Used to handle form submission and perform validation or other actions.
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from being submitted to the server
  // Handle form data here
});

// Fired when the form is reset (e.g., when a reset button is clicked).
// Used to handle form reset actions or perform cleanup.
document.getElementById('myForm').addEventListener('reset', function(event) {
  // Handle form reset here
});

// Fired when the value of an <input>, <textarea>, or <select> element changes.
// Useful for real-time validation or live feedback.
document.getElementById('username').addEventListener('input', function(event) {
  // Handle input changes here
});

// Fired when the value of an <input>, <textarea>, or <select> element loses focus and its value has changed.
document.getElementById('email').addEventListener('change', function(event) {
  // Handle changes here
});

// Fired when an element gains focus.
// Useful for triggering actions when the user focuses on an input field.
document.getElementById('username').addEventListener('focus', function(event) {
  // Handle focus here
});

// Fired when an element loses focus.
// Useful for validating input when the user moves away from the field.
document.getElementById('username').addEventListener('blur', function(event) {
  // Handle blur here
});

// Fired when a form element fails to validate (for fields with validation constraints).
document.getElementById('username').addEventListener('invalid', function(event) {
  // Handle invalid input here
});


// arrow functions
const add1 = function(a, b) {
    return a + b;
};

const add2 = (a, b) => a + b;


// promises
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log('Data received:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}