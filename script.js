document.addEventListener('mousemove', function(event) {
    const penguin = document.querySelector('.penguin');
    const message = document.getElementById('message');
    const penguinRect = penguin.getBoundingClientRect();
    
    // Calculate the center of the penguin
    const penguinCenterX = penguinRect.left + penguinRect.width / 2;
    const penguinCenterY = penguinRect.top + penguinRect.height / 2;

    // Calculate distance from mouse to the center of the penguin
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const distance = Math.sqrt((mouseX - penguinCenterX) ** 2 + (mouseY - penguinCenterY) ** 2);
    
    console.log('Distance:', distance); // Debugging line
    
    // Adjust the threshold for when the penguin should start waving
    const threshold = 150;
    
    if (distance < threshold) {
        penguin.classList.add('penguin-waving');
        message.style.opacity = 1;
    } else {
        penguin.classList.remove('penguin-waving');
        message.style.opacity = 0;
    }
});
