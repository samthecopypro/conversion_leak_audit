/**
 * CONVERSION LEAK AUDIT - MailerLite AJAX Integration
 * Handles form submission via AJAX without page redirect
 */

(function() {
  'use strict';

  // Initialize form handlers
  function initFormHandlers() {
    const forms = document.querySelectorAll('.ml-block-form');
    forms.forEach(form => {
      form.addEventListener('submit', handleFormSubmit);
    });
  }

  // Handle form submission via AJAX
  async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const email = form.querySelector('input[name="fields[email]"]').value;
    const formId = form.getAttribute('data-form');
    const formCode = form.getAttribute('data-code');

    // Validate email
    if (!email || !isValidEmail(email)) {
      showError(form, 'Please enter a valid email address');
      return;
    }

    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const loadingButton = form.querySelector('button.loading');
    submitButton.style.display = 'none';
    loadingButton.style.display = 'block';

    try {
      // Send email to MailerLite via their API endpoint
      const response = await fetch('https://assets.mailerlite.com/forms/submitted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'fields[email]': email,
          'ml-submit': '1',
          'anticsrf': 'true',
          'data-code': formCode,
          'data-form': formId,
        }),
      });

      if (response.ok) {
        // Show success message
        showSuccess(form);
        // Clear form
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showError(form, 'Something went wrong. Please try again.');
      // Restore button state
      submitButton.style.display = 'block';
      loadingButton.style.display = 'none';
    }
  }

  // Validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Show success message
  function showSuccess(form) {
    const wrapper = form.closest('.ml-form-embedWrapper');
    const formBody = wrapper.querySelector('.ml-form-embedBody');
    const successBody = wrapper.querySelector('.ml-form-successBody');

    if (formBody && successBody) {
      formBody.style.display = 'none';
      successBody.style.display = 'block';

      // Auto-hide success message after 5 seconds (optional)
      setTimeout(() => {
        formBody.style.display = 'block';
        successBody.style.display = 'none';
        form.reset();
        const submitButton = form.querySelector('button[type="submit"]');
        const loadingButton = form.querySelector('button.loading');
        if (submitButton && loadingButton) {
          submitButton.style.display = 'block';
          loadingButton.style.display = 'none';
        }
      }, 5000);
    }
  }

  // Show error message
  function showError(form, message) {
    const wrapper = form.closest('.ml-form-embedWrapper');
    let errorDiv = wrapper.querySelector('.ml-form-error');

    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'ml-form-error';
      errorDiv.style.cssText = `
        background-color: rgba(255, 45, 45, 0.1);
        border: 1px solid #ff2d2d;
        border-radius: 8px;
        color: #ff2d2d;
        padding: 12px 16px;
        margin-bottom: 12px;
        font-size: 14px;
        font-family: 'DM Sans', Arial, sans-serif;
      `;
      form.parentNode.insertBefore(errorDiv, form);
    }

    errorDiv.textContent = message;
    errorDiv.style.display = 'block';

    // Auto-hide error after 5 seconds
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }

  // Initialize on DOM ready
  function init() {
    initFormHandlers();
    loadMailerLiteScript();
  }

  // Load MailerLite script for any additional functionality
  function loadMailerLiteScript() {
    if (typeof window !== 'undefined' && !window.ml_webform_success_40775934) {
      const script = document.createElement('script');
      script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
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

  // Add scroll-based animations
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
