/**
 * CONVERSION LEAK AUDIT - Clean Script
 * Only handles MailerLite script loading, smooth scrolling, and animations
 * All form submission is handled by official MailerLite HTML
 */

(function() {
  'use strict';

  // Load MailerLite official script for form functionality
  function loadMailerLiteScript() {
    if (typeof window !== 'undefined' && !window.ml_webform_success_40775934) {
      const script = document.createElement('script');
      script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }

  // Initialize on DOM ready
  function init() {
    loadMailerLiteScript();
    setupSmoothScroll();
    setupScrollAnimations();
  }

  // Smooth scroll for anchor links
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  // Add scroll-based animations
  function setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe sections for fade-in effect
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
