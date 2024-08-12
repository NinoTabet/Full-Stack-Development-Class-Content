const div = document.getElementById('trail');
const trailQueue = [];

div.addEventListener('mousemove',function(event){

    // create trail div element
    const trail = document.createElement('div');

    trail.style.position = 'fixed';
    trail.style.left = `${event.clientX}px`;
    trail.style.top = `${event.clientY}px`;
    trail.style.width = '10px';
    trail.style.height = '10px';
    trail.style.backgroundColor = 'red';
    trail.style.borderRadius = '50%'; 
    trail.style.pointerEvents = 'none';

    div.append(trail);
    trailQueue.push(trail);

})

function removeOldestTrail() {
    if (trailQueue.length > 0) {
        const oldestTrail = trailQueue.shift(); // Remove the oldest trail from the queue
        if (oldestTrail.parentNode) {
            oldestTrail.parentNode.removeChild(oldestTrail); // Remove the trail from the DOM
        }
    }
}

// trail removal timer
setInterval(removeOldestTrail, 20);