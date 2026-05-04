/**
 * CONVERSION LEAK AUDIT - MailerLite Integration
 * Handles form submission and MailerLite script loading
 */

(function() {
  'use strict';

  // Load MailerLite script
  function loadMailerLiteScript() {
    if (typeof window !== 'undefined' && !window.ml_webform_success_40775934) {
      const script = document.createElement('script');
      script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      // Define success callback
      window.ml_webform_success_40775934 = function() {
        const $ = window.ml_jQuery || window.jQuery;
        if ($) {
          $('.ml-subscribe-form-40775934 .row-success').show();
          $('.ml-subscribe-form-40775934 .row-form').hide();
        }
      };
    }

    // Fetch MailerLite form data
    if (window.fetch) {
      fetch('https://assets.mailerlite.com/jsonp/2090592/forms/186512759014295403/takel')
        .catch(err => console.log('MailerLite form loaded'));
    }
  }

  // Initialize on DOM ready
  function init() {
    loadMailerLiteScript();
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Smooth scroll for anchor links
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

  // Add scroll-based animations (optional)
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

})();
