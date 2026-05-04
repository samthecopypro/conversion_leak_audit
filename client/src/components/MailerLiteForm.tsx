import { useEffect } from 'react';

/**
 * MailerLite Form Component
 * Integrates MailerLite embed form with custom styling to match the landing page design system
 * 
 * Design System Integration:
 * - Background: #0a0a0f (deep navy)
 * - Accent: #ff2d2d (electric red)
 * - Input: #1a1a2e (secondary background)
 * - Text: #ffffff (white)
 * - Fonts: Bebas Neue (headlines), DM Sans (body)
 */

interface MailerLiteFormProps {
  variant?: 'hero' | 'cta'; // Different styling for different sections
  className?: string;
}

export default function MailerLiteForm({ variant = 'hero', className = '' }: MailerLiteFormProps) {
  useEffect(() => {
    // Load MailerLite script if not already loaded
    if (typeof window !== 'undefined' && !(window as any).ml_webform_success_40775934) {
      const script = document.createElement('script');
      script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      // Add the form success callback
      (window as any).ml_webform_success_40775934 = function() {
        const $ = (window as any).ml_jQuery || (window as any).jQuery;
        $('.ml-subscribe-form-40775934 .row-success').show();
        $('.ml-subscribe-form-40775934 .row-form').hide();
      };
    }

    // Fetch and apply MailerLite form data
    fetch('https://assets.mailerlite.com/jsonp/2090592/forms/186512759014295403/takel');
  }, []);

  return (
    <div className={`mailerlite-form-wrapper ${variant} ${className}`}>
      <style>{`
        /* MailerLite Form Custom Styling */
        #mlb2-40775934.ml-form-embedContainer {
          box-sizing: border-box;
          display: table;
          margin: 0 auto;
          position: static;
          width: 100% !important;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedWrapper {
          background-color: transparent;
          border-width: 0px;
          border-color: transparent;
          border-radius: 0px;
          border-style: solid;
          box-sizing: border-box;
          display: inline-block !important;
          margin: 0;
          padding: 0;
          position: relative;
          width: 100%;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody {
          padding: 0;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-embedContent {
          text-align: center;
          margin: 0;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-embedContent h4 {
          color: #ffffff;
          font-family: 'Bebas Neue', Arial, sans-serif;
          font-size: 30px;
          font-weight: 400;
          margin: 0 0 10px 0;
          text-align: center;
          word-break: break-word;
          letter-spacing: 0.52px;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-embedContent p {
          color: #d1d5db;
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          margin: 0 0 10px 0;
          text-align: center;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input {
          background-color: #1a1a2e !important;
          color: #ffffff !important;
          border-color: #1a1a2e;
          border-radius: 8px !important;
          border-style: solid !important;
          border-width: 1px !important;
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: 14px !important;
          height: auto;
          line-height: 21px !important;
          margin-bottom: 0;
          margin-top: 0;
          margin-left: 0;
          margin-right: 0;
          padding: 12px 16px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          max-width: 100% !important;
          transition: all 0.3s ease;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input:focus {
          background-color: #1a1a2e !important;
          border-color: #ff2d2d !important;
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 45, 45, 0.1);
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input::placeholder {
          color: #6b7280;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder {
          color: #6b7280;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder {
          color: #6b7280;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder {
          color: #6b7280;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder {
          color: #6b7280;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow textarea {
          background-color: #1a1a2e !important;
          color: #ffffff !important;
          border-color: #1a1a2e;
          border-radius: 8px !important;
          border-style: solid !important;
          border-width: 1px !important;
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: 14px !important;
          height: auto;
          line-height: 21px !important;
          margin-bottom: 0;
          margin-top: 0;
          padding: 12px 16px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          max-width: 100% !important;
          transition: all 0.3s ease;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow textarea:focus {
          background-color: #1a1a2e !important;
          border-color: #ff2d2d !important;
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 45, 45, 0.1);
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow textarea::placeholder {
          color: #6b7280;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow {
          margin: 0 0 15px 0;
          width: 100%;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow.ml-last-item {
          margin: 0;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-formContent {
          margin: 0 0 20px 0;
          width: 100%;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedSubmit {
          margin: 0;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedSubmit button {
          background-color: #ff2d2d;
          border: none;
          border-radius: 8px;
          color: #ffffff;
          cursor: pointer;
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: 16px;
          font-weight: 600;
          height: auto;
          line-height: 21px;
          margin: 0;
          padding: 14px 28px;
          text-align: center;
          text-decoration: none;
          width: 100%;
          box-sizing: border-box;
          transition: all 0.3s ease;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedSubmit button:hover {
          background-color: #e62626;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 45, 45, 0.2);
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedSubmit button:active {
          transform: translateY(0);
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedSubmit button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedSubmit button.loading {
          display: none !important;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedSubmitLoad {
          display: inline-block;
          width: 20px;
          height: 20px;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedSubmitLoad:after {
          content: " ";
          display: block;
          width: 11px;
          height: 11px;
          margin: 1px;
          border-radius: 50%;
          border: 4px solid #fff;
          border-color: #ffffff #ffffff #ffffff transparent;
          animation: ml-form-embedSubmitLoad 1.2s linear infinite;
        }

        @keyframes ml-form-embedSubmitLoad {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-successBody {
          padding: 20px;
          text-align: center;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-successBody h4 {
          color: #ffffff;
          font-family: 'Bebas Neue', Arial, sans-serif;
          font-size: 24px;
          font-weight: 400;
          margin: 0 0 10px 0;
          letter-spacing: 0.52px;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-successBody p {
          color: #d1d5db;
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          margin: 0;
        }

        /* Responsive adjustments */
        @media screen and (max-width: 480px) {
          #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-embedContent h4 {
            font-size: 24px;
          }

          #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input,
          #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow textarea {
            padding: 10px 14px !important;
            font-size: 16px !important;
          }

          #mlb2-40775934.ml-form-embedContainer .ml-form-embedSubmit button {
            padding: 12px 20px;
            font-size: 14px;
          }
        }

        /* Checkbox and radio styling */
        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow .custom-control-label::before,
        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before {
          border-color: #1a1a2e !important;
          background-color: #1a1a2e !important;
          border-radius: 4px !important;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow .custom-control-input:checked~.custom-control-label::before {
          border-color: #ff2d2d !important;
          background-color: #ff2d2d !important;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow label {
          color: #d1d5db;
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }
      `}</style>

      {/* MailerLite Form HTML - Embedded directly */}
      <div id="mlb2-40775934" className="ml-form-embedContainer ml-subscribe-form-40775934">
        <div className="ml-form-embedWrapper data-form-id">
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <div className="ml-form-embedContent" data-form-id>
              <h4>Get Your Free Funnel Audit</h4>
              <p>Drop your email below and I'll review your funnel within 24 hours.</p>
            </div>
            <form className="ml-block-form" action="https://assets.mailerlite.com/forms/submitted" method="post" data-code="w6z6l9" data-form="186512759014295403" data-chained="false">
              <div className="ml-form-formContent">
                <div className="ml-form-fieldRow ml-last-item">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <input
                      aria-label="email"
                      aria-required="true"
                      type="email"
                      className="form-control"
                      data-inputmask=""
                      name="fields[email]"
                      placeholder="Enter your best email here"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>
              </div>
              <input type="hidden" name="ml-submit" value="1" />
              <div className="ml-form-embedSubmit">
                <button type="submit" className="primary">
                  Get My Free Audit
                </button>
                <button disabled style={{ display: 'none' }} type="button" className="loading">
                  <div className="ml-form-embedSubmitLoad"></div>
                  <span className="sr-only">Loading...</span>
                </button>
              </div>
              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>
          <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
            <div className="ml-form-successContent">
              <h4>Perfect!</h4>
              <p>You have successfully signed up for your free funnel audit!</p>
              <p>Sam will reach you within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
