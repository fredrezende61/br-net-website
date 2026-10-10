// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link highlight
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active class styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #0066ff;
        border-bottom: 2px solid #0066ff;
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (if needed)
const toggleMobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
};

// Format phone number input
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 2) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
            }
        }
        e.target.value = value;
    });
}

// Format CEP input
const cepInput = document.getElementById('cep');
if (cepInput) {
    cepInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 5) {
                value = value;
            } else {
                value = `${value.slice(0, 5)}-${value.slice(5, 8)}`;
            }
        }
        e.target.value = value;
    });
}

// Log page interactions
console.log('BR Net Website Loaded Successfully!');