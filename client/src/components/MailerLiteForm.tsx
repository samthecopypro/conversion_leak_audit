import { useEffect } from 'react';

/**
 * MailerLite Form Component - BRIGHT PREMIUM 3D THEME
 * Integrates MailerLite embed form with bright theme styling
 * 
 * Design System Integration:
 * - Background: White (#ffffff)
 * - Text: Deep charcoal (#1a202c, #0f172a)
 * - Accent: Sky blue (#3b82f6)
 * - Input: Light blue (#f8f9fb)
 * - Fonts: Playfair Display (headlines), Inter (body)
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
        /* MailerLite Form Custom Styling - BRIGHT PREMIUM 3D */
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
          color: #1a202c;
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 600;
          margin: 0 0 10px 0;
          text-align: center;
          word-break: break-word;
          letter-spacing: 0.08em;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-embedContent p {
          color: #64748b;
          font-family: 'Inter', Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          margin: 0 0 10px 0;
          text-align: center;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input {
          background-color: #f8f9fb !important;
          color: #1a202c !important;
          border-color: rgba(59, 130, 246, 0.2);
          border-radius: 6px !important;
          border-style: solid !important;
          border-width: 1px !important;
          font-family: 'Inter', Arial, sans-serif;
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
          background-color: #ffffff !important;
          border-color: #3b82f6 !important;
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input::placeholder {
          color: #94a3b8;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder {
          color: #94a3b8;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder {
          color: #94a3b8;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder {
          color: #94a3b8;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder {
          color: #94a3b8;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow textarea {
          background-color: #f8f9fb !important;
          color: #1a202c !important;
          border-color: rgba(59, 130, 246, 0.2);
          border-radius: 6px !important;
          border-style: solid !important;
          border-width: 1px !important;
          font-family: 'Inter', Arial, sans-serif;
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
          background-color: #ffffff !important;
          border-color: #3b82f6 !important;
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow textarea::placeholder {
          color: #94a3b8;
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
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          border: none;
          border-radius: 6px;
          color: #ffffff;
          cursor: pointer;
          font-family: 'Inter', Arial, sans-serif;
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
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedSubmit button:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
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
          border-color: #3b82f6 #3b82f6 #3b82f6 transparent;
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
          color: #1a202c;
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 10px 0;
          letter-spacing: 0.08em;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-successBody p {
          color: #64748b;
          font-family: 'Inter', Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          margin: 0;
        }

        /* Responsive adjustments */
        @media screen and (max-width: 480px) {
          #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-embedContent h4 {
            font-size: 22px;
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
          border-color: rgba(59, 130, 246, 0.2) !important;
          background-color: #f8f9fb !important;
          border-radius: 4px !important;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow .custom-control-input:checked~.custom-control-label::before {
          border-color: #3b82f6 !important;
          background-color: #3b82f6 !important;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow label {
          color: #475569;
          font-family: 'Inter', Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
          display: block;
        }

        /* Error state */
        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow.has-error input,
        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow.has-error textarea {
          border-color: #ef4444 !important;
        }

        /* Success state */
        #mlb2-40775934.ml-form-embedContainer .ml-form-successBody {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(191, 219, 254, 0.05) 100%);
          border-radius: 8px;
          padding: 24px;
        }

        /* Dropdown styling */
        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow select {
          background-color: #f8f9fb !important;
          color: #1a202c !important;
          border-color: rgba(59, 130, 246, 0.2) !important;
          border-radius: 6px !important;
          border-style: solid !important;
          border-width: 1px !important;
          font-family: 'Inter', Arial, sans-serif;
          font-size: 14px !important;
          padding: 12px 16px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          transition: all 0.3s ease;
        }

        #mlb2-40775934.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow select:focus {
          background-color: #ffffff !important;
          border-color: #3b82f6 !important;
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      `}</style>

      {/* MailerLite form will be injected here */}
      <div
        className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-40775934"
        id="mlb2-40775934"
      >
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent" style={{ marginBottom: "0px" }}>
                <h4 style={{ marginBottom: "10px" }}>Get Your Free Audit</h4>
                <p style={{ marginBottom: "20px" }}>
                  Drop your email below. I'll review your funnel within 24 hours.
                </p>
              </div>
              <form className="ml-block-form" action="javascript:void(0)" onSubmit={(e) => e.preventDefault()}>
                <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input
                        type="email"
                        className="ml-form-fieldInputText"
                        data-inputmask=""
                        placeholder="Enter your best email here"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
                <div className="ml-form-embedSubmit">
                  <button type="submit" className="primary">
                    Get My Free Audit
                  </button>
                </div>
              </form>
            </div>
            <div
              className="ml-form-successBody row-success"
              style={{ display: "none" }}
            >
              <div className="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>
                  Check your email for your free audit breakdown. I'll be in touch within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
