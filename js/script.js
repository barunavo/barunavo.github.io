// ===========================
// Smooth Scroll for Navigation Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===========================
// Project Filters
// ===========================
const projectFilters = document.querySelectorAll('.project-filters .filter-btn');
const projectCards = document.querySelectorAll('.project-card');

projectFilters.forEach(filter => {
  filter.addEventListener('click', function() {
    // Remove active class from all filters
    projectFilters.forEach(f => f.classList.remove('active'));
    // Add active class to clicked filter
    this.classList.add('active');
    
    const filterValue = this.getAttribute('data-filter');
    
    projectCards.forEach(card => {
      if (filterValue === 'all') {
        card.style.display = 'block';
      } else {
        const categories = card.getAttribute('data-category');
        if (categories && categories.includes(filterValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});

// ===========================
// Blog Filters
// ===========================
const blogFilters = document.querySelectorAll('.blog-filters .filter-btn');
const blogCards = document.querySelectorAll('.blog-post-card');

blogFilters.forEach(filter => {
  filter.addEventListener('click', function() {
    blogFilters.forEach(f => f.classList.remove('active'));
    this.classList.add('active');
    
    const filterValue = this.getAttribute('data-filter');
    
    blogCards.forEach(card => {
      if (filterValue === 'all') {
        card.style.display = 'block';
      } else {
        const categories = card.getAttribute('data-category');
        if (categories && categories.includes(filterValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});

// ===========================
// Animate on Scroll
// ===========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.feature-card, .project-card, .blog-post-card, .tech-item, .philosophy-card');
  
  animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
});

// ===========================
// Skill Bar Animation
// ===========================
const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 200);
      skillObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// ===========================
// Mobile Navigation Toggle (for future enhancement)
// ===========================
function createMobileNav() {
  const navbar = document.querySelector('.navbar');
  if (window.innerWidth <= 768 && navbar) {
    // Mobile navigation logic can be added here if needed
  }
}

window.addEventListener('resize', createMobileNav);
window.addEventListener('load', createMobileNav);

// ===========================
// Active Navigation Link Highlight
// ===========================
function updateActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (currentPath === linkPath || (currentPath.endsWith('/') && linkPath.includes('index.html'))) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ===========================
// Form Validation (if contact form is added)
// ===========================
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form validation logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
}

// ===========================
// Back to Top Button (optional enhancement)
// ===========================
function createBackToTop() {
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.className = 'back-to-top';
  backToTop.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  `;
  
  document.body.appendChild(backToTop);
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

document.addEventListener('DOMContentLoaded', createBackToTop);

// ===========================
// Console Welcome Message
// ===========================
console.log('%c👋 Hello, fellow developer!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to my portfolio. Feel free to explore the code!', 'color: #6b7280; font-size: 14px;');
console.log('%c🔗 GitHub: https://github.com/barunavo', 'color: #10b981; font-size: 12px;');
