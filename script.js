// Set the countdown time (10 minutes)
let countDownDate = new Date().getTime() + 10 * 60000;

// Update the countdown every second
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    // Time calculations for hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective divs
    document.getElementsByClassName('image-container')[0].innerHTML = hours + "h ";
    document.getElementsByClassName('image-container')[1].innerHTML = minutes + "m ";
    document.getElementsByClassName('image-container')[2].innerHTML = seconds + "s ";

    // If the countdown is finished, display some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName('image-container')[0].innerHTML = "EXPIRED";
        document.getElementsByClassName('image-container')[1].innerHTML = "";
        document.getElementsByClassName('image-container')[2].innerHTML = "";
    }
}, 1000);   


//CROWN LIGHT LOOP

    document.addEventListener("DOMContentLoaded", function() {
        var wheel = document.querySelector('.the_wheel');
        var images = ['assets/inner-group-rotate.png', 'assets/image-with-lights.png']; // Array of images
        var currentImageIndex = 0;

        setInterval(function() {
            currentImageIndex = (currentImageIndex + 1) % images.length; // Toggle between 0 and 1
            wheel.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
        }, 2000); // Change image every 2000 milliseconds (2 seconds)
    });

//SPINNING WHEEL
document.addEventListener("DOMContentLoaded", function() {
    var wheel = document.querySelector('.the_wheel');
    var spinButton = document.getElementById('spin_button');
    var spinSound = document.getElementById('spinSound');
    var rewardSound = document.getElementById('rewardSound');
    var popup = document.getElementById('popup');
    var closeButton = document.getElementById('closePopup');

    spinButton.addEventListener('click', function() {
        var totalRotation = 360 * 4 + 250;

        // Reset the rotation and play the spin sound
        gsap.set(wheel, { rotation: 0 });
        spinSound.currentTime = 0;
        spinSound.play();

        // GSAP to spin the wheel
        gsap.to(wheel, {
            rotation: totalRotation,
            duration: 3, // Duration of the spin in seconds
            ease: "power3.out", // Easing function for deceleration
            onUpdate: function() {
                // Decrease spin sound volume based on current rotation
                var progress = gsap.getProperty(wheel, "rotation") / totalRotation;
                spinSound.volume = 1 - progress;
            },
            onComplete: function() {
                // Stop the spin sound and play the reward sound
                spinSound.pause();
                rewardSound.play();

                // Show popup after 2-3 seconds delay
                setTimeout(function() {
                    popup.style.display = 'flex';
                }, 2000); // Adjust time as needed
            }
        });
    });

    // Close popup event
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});










