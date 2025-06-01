// Enhanced script with cursor and magnetic effects

// Variables for cursor
let clientX = -100;
let clientY = -100;
let lastX = 0;
let lastY = 0;
let cursorText = "";

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cursor
    initCursor();
    
    // Hide loader and show main content after a short delay
    setTimeout(() => {
        document.querySelector('.loader-wrapper').style.opacity = '0';
        document.querySelector('#main').style.opacity = '1';
        
        // Remove loader from DOM after fade out
        setTimeout(() => {
            document.querySelector('.loader-wrapper').style.display = 'none';
        }, 500);
        
        // Start animations
        initAnimations();
    }, 1500);
    
    // Initialize slider
    initSlider();
    
    // Initialize magnetic effect
    initMagneticEffect();
});

// Initialize the cursor functionality
function initCursor() {
    const cursor = {
        outer: document.querySelector('.cursor-outer'),
        inner: document.querySelector('.cursor-inner'),
        text: document.querySelector('.cursor-text')
    };
    
    // Update cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
    });
    
    // Handle cursor visibility
    document.addEventListener('mouseenter', () => {
        cursor.outer.style.opacity = '1';
        cursor.inner.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.outer.style.opacity = '0';
        cursor.inner.style.opacity = '0';
    });
    
    // Handle cursor hover states
    const handleHover = (e) => {
        const target = e.currentTarget;
        cursorText = target.getAttribute('data-cursor-text') || "";
        
        if (cursorText) {
            cursor.text.textContent = cursorText;
        }
        
        document.body.classList.add('cursor-hover');
        cursor.outer.classList.add('cursor-hover');
        cursor.inner.classList.add('cursor-hover');
        cursor.text.classList.add('cursor-hover');
    };
    
    const handleUnhover = () => {
        document.body.classList.remove('cursor-hover');
        cursor.outer.classList.remove('cursor-hover');
        cursor.inner.classList.remove('cursor-hover');
        cursor.text.classList.remove('cursor-hover');
    };
    
    // Add hover listeners to interactive elements
    const hoverElements = document.querySelectorAll('a, button, .magnet, .slide, [data-cursor-text]');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', handleHover);
        element.addEventListener('mouseleave', handleUnhover);
    });
    
    // Animation loop for smooth cursor movement
    function render() {
        // Smooth cursor movement with lerp (linear interpolation)
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        
        // Update cursor position
        cursor.outer.style.transform = `translate(${lastX}px, ${lastY}px)`;
        cursor.inner.style.transform = `translate(${lastX}px, ${lastY}px)`;
        cursor.text.style.transform = `translate(${lastX}px, ${lastY}px)`;
        
        requestAnimationFrame(render);
    }
    
    render();
}

// Linear interpolation helper function
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

// Initialize the slider functionality
function initSlider() {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.project-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    
    // Function to go to a specific slide
    function goToSlide(index) {
        // Handle wrapping around
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        currentIndex = index;
        
        // Update slides
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');
        
        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }
    
    // Add click event to each dot
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Add click events to navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            goToSlide(currentIndex - 1);
        } else if (e.key === 'ArrowDown') {
            goToSlide(currentIndex + 1);
        }
    });
}

// Initialize magnetic effect
function initMagneticEffect() {
    const magneticElements = document.querySelectorAll('.magnet');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / 8;
            const deltaY = (y - centerY) / 8;
            
            element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px)';
        });
    });
}

// Initialize animations
function initAnimations() {
    // Animate navigation elements
    const navImg = document.querySelector('#nav img');
    const navLinks = document.querySelectorAll('#nav a, #nav i');
    
    if (navImg) {
        navImg.style.opacity = '1';
        navImg.style.transform = 'translateY(0)';
    }
    
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Animate hero section text
    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 300 * index);
    });
    
    // Animate home text
    const homeTexts = document.querySelectorAll('#hometext h1');
    homeTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 400 * index);
    });
    
    // Animate featured text
    const featurTexts = document.querySelectorAll('.featur h1');
    featurTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 300 * index);
    });
    
    // Animate buttons
    const btnDivs = document.querySelectorAll('#btndiv');
    btnDivs.forEach(btn => {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
    });
    
    // Add scroll event listener for section animations
    window.addEventListener('scroll', handleScroll);
    // Trigger once to check initial visible elements
    handleScroll();
}

// Handle scroll animations
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    const slides = document.querySelectorAll('#slides .slide');
    
    // Animate sections when they come into view
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
    
    // Animate slides when they come into view
    slides.forEach((slide, index) => {
        const slideTop = slide.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (slideTop < windowHeight * 0.8) {
            setTimeout(() => {
                slide.style.opacity = '1';
                slide.style.transform = 'translateY(0)';
            }, 200 * index);
        }
    });
}