document.addEventListener('DOMContentLoaded', function() {
    
    // --- ELEMENT SELECTORS ---
    const headerElement = document.querySelector('header');
    const clockElement = document.getElementById('clock');
    const animatedElements = document.querySelectorAll('.service-card');
    const typingTextElement = document.querySelector('.typing-text');
    const backToTopButton = document.querySelector('.back-to-top-button');
    const contactForm = document.getElementById('contact-form');

    // --- HEADER SCROLL ---
    if (headerElement) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                headerElement.classList.add('scrolled');
            } else {
                headerElement.classList.remove('scrolled');
            }
        });
    }

    // --- CLOCK ---
    if (clockElement) {
        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
        setInterval(updateClock, 1000);
        updateClock();
    }

    // --- SCROLL ANIMATIONS ---
    if (animatedElements.length > 0) {
        const appearOptions = {
            threshold: 0.2,
            rootMargin: "0px 0px -50px 0px"
        };
        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);
        animatedElements.forEach(element => appearOnScroll.observe(element));
    }

    // --- TYPING ANIMATION ---
    if (typingTextElement) {
        const texts = JSON.parse(typingTextElement.dataset.typingTexts);
        let textIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < texts[textIndex].length) {
                typingTextElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            }
        }
        
        setTimeout(() => {
            typingTextElement.textContent = '';
            type();
        }, 1000);
    }

    // --- BACK TO TOP BUTTON ---
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- CONTACT FORM (AJAX) ---
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = e.target;
            const data = new FormData(form);
            const action = form.action;
            let status = form.querySelector('.form-status');
            if (!status) {
                status = document.createElement('div');
                status.className = 'form-status';
                form.appendChild(status);
            }

            status.innerHTML = 'Enviando...';
            status.style.display = 'block';

            fetch(action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = "¡Gracias! Tu mensaje ha sido enviado.";
                    status.className = 'form-status success';
                    form.reset();
                } else {
                    response.json().then(data => {
                        const message = data.errors ? data.errors.map(e => e.message).join(', ') : "Oops! Hubo un problema.";
                        status.innerHTML = message;
                        status.className = 'form-status error';
                    })
                }
            }).catch(error => {
                status.innerHTML = "Oops! Hubo un problema de red.";
                status.className = 'form-status error';
            });
        });
    }

});