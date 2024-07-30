// Mouse event listeners  
   
    // on click 
    document.getElementById('myButton').addEventListener('click', function() {
        alert('Button clicked!');
    });

    // this.style vs obj.style

    // on double click
    document.getElementById('myParagraph').addEventListener('dblclick', function() {
        alert('Paragraph double-clicked!');
    });

    // on mouse down
    document.getElementById('myDiv').addEventListener('mousedown', function() {
        alert('Mouse button pressed down!');
    });

    // on mouse up
    document.getElementById('myDiv').addEventListener('mouseup', function() {
        alert('Mouse button released!');
    });

    // on mouse move
    document.getElementById('myDiv').addEventListener('mousemove', function(event) {
        console.log(`Mouse moved to (${event.clientX}, ${event.clientY})`);
    });

    // on mouse leaves parent AND children
    document.getElementById('myDiv').addEventListener('mouseout', function() {
        alert('Mouse left element!');
    });

    // on mouse leaves parent only
    document.getElementById('myDiv').addEventListener('mouseleave', function() {
        alert('Mouse left element!');
    });

     // on mouse over
     document.getElementById('myDiv').addEventListener('mouseover', function() {
        alert('Mouse entered element!');
    });

    // on mouse enter
    document.getElementById('myDiv').addEventListener('mouseenter', function() {
        alert('Mouse entered element!');
    });

// ------------------------------------------------------------------------------------------------------------------------------

// Keyboard event listeners

    // on key down
    document.addEventListener('keydown', function(event) {
        console.log(`Key pressed: ${event.key}`);
    });

    // on key up
    document.addEventListener('keyup', function(event) {
        console.log(`Key released: ${event.key}`);
    });

    document.addEventListener('keypress',function(event){
        console.log(`Key pressed: ${event.key}`);
    });