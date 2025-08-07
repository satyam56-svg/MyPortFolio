console.log("JavaScript is working!")

const scrollBtn=document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function(){
    if(window.scrollY>250) {
        scrollBtn.style.display="block";
    } else {
        scrollBtn.style.display="none";
    }
});

scrollBtn.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});

// Hamburger menu functionality
const navToggleBtn = document.getElementById('navToggleBtn');
const navMenu = document.querySelector('.nav-menu');

navToggleBtn.addEventListener('click', function() {
  navMenu.classList.toggle('active');
});

// Close nav on menu link click (optional, for good UX)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Skills Progress Bar Animation on Scroll
const progressFills = document.querySelectorAll('.progress-fill');

function animateProgressBars() {
    const triggerBottom = window.innerHeight * 0.85;

    progressFills.forEach(fill => {
        const fillTop = fill.getBoundingClientRect().top;

        if (fillTop < triggerBottom) {
            const fillWidth = fill.getAttribute('data-fill');
            fill.style.width = fillWidth;
        } else {
            fill.style.width = '0%';
        }
    });
}

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);


// Contact Form Validation and Submit Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Form का default submit रोकना (page reload से बचाना)

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all the fields before submitting.');
        return;
    }

    // Email format basic check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    // अगर सब ठीक हो तो
    alert('Thank you for reaching out! This form is currently static & will be functional in future.');
    contactForm.reset(); // Form खाली करें
});

const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

// Local storage से theme लें, ताकि page reload पर भी theme याद रहे
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
    themeToggleBtn.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Toggle icon and save preference
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '🌞';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Scroll Reveal Animation for Sections
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
// Page load पर भी reveal करना
window.addEventListener('load', revealOnScroll);

// FAQ Accordion Toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const activeQuestion = document.querySelector('.faq-question.active');

        // अगर एक और question active है, तो उसे बंद करें
        if (activeQuestion && activeQuestion !== question) {
            activeQuestion.classList.remove('active');
            activeQuestion.nextElementSibling.style.maxHeight = null;
        }

        // Toggle current question
        question.classList.toggle('active');

        const answer = question.nextElementSibling;
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});
