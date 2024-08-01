const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');
    
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });


let skills = document.querySelectorAll(".technical-skills");

skills.forEach(skill => {
    let circularProgress = skill.querySelector(".circular-progress");
    let progressValue = skill.querySelector(".progress-value");

    let progressStartValue = 0;
    let progressEndValue = parseInt(progressValue.textContent); // Get the end value from the progress-value text content
    let speed = 10;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#000021 ${progressStartValue * 3.6}deg, rgb(221, 195, 195) 0deg)`;

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }

    }, speed);
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Perform AJAX request or other form submission logic here
    alert('Message sent successfully!');
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
