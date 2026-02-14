
// button functions for page switching, previous page button/link
// extra: some sort of ufo animation on pageTwo? Small interactive game/element?
const button = document.getElementById("yesBtn");

button.addEventListener('click' , function() {

    window.location.href = "pageTwo.html"

})

const noButton = document.getElementById("hoverButton")

document.addEventListener('click', function(){
    alert("SIKE! YOUR MINE ALREADY ;) I LOVE YOUUU")
    window.location.href = "pageTwo.html";
})



// animation function for "No" button
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('hoverButton');

    // setting starting x, y position of button
    let x = 50;
    let y = 50;

    // setting button change speed on x,y axis'
    let xSpeed = 2;
    let ySpeed = 3;

    
    function animateButton(){

        // getting variables for window size 
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // getting button dimensions
        const buttonWidth = button.clientWidth;
        const buttonHeight = button.clientHeight;

        // change x,y positioning + moving positions
        x += xSpeed;
        y += ySpeed;

        // bounds checking 
        if (x + buttonWidth > screenWidth || x < 0){ // x + buttonWidth -> factoring width of button into x positon
            xSpeed = -xSpeed; // move backwards if collision with bounds
        }

        if (y + buttonHeight > screenHeight || y < 0){ // y + buttonHeight -> factoring height of button into y positoin
            ySpeed = -ySpeed; // move backwards if collision with bounds
        }

        // accessing button html style attributes
        button.style.left = x + 'px';
        button.style.top = y + 'px';

        requestAnimationFrame(animateButton);

    }

    animateButton();

});