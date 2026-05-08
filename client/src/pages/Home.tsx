import { useAuth } from "@/_core/hooks/useAuth";
import { ArrowRight } from "lucide-react";
import MailerLiteForm from "@/components/MailerLiteForm";

/**
 * DESIGN SYSTEM - @samthecopypro Conversion Leak Audit
 * 
 * BRIGHT PREMIUM 3D AESTHETIC:
 * - Background: Light gradient (white → light blue)
 * - Text: Deep charcoal (#1a202c, #0f172a)
 * - Accent: Sky blue (#3b82f6)
 * - Form Cards: White with subtle shadows
 * - Typography: Playfair Display (headlines) + Inter (body)
 * 
 * LAYOUT: Minimalist, center-oriented, premium light aesthetic
 */

export default function Home() {

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* SECTION 1 - ABOVE THE FOLD / HERO */}
      <section className="hero">
        <div className="hero-content">
          {/* Left: Headline & Copy */}
          <div className="hero-left">
            <p className="hero-eyebrow">
              For coaches and personal brands getting attention but not clients
            </p>

            <h1>
              Your Content Is Working.
              <br />
              Your Pipeline Isn't.
            </h1>

            <p className="hero-deck">
              I find the exact point where your funnel stops converting people who were already
              ready to buy — and I fix it.
            </p>

            <div className="hero-form-wrapper">
              <MailerLiteForm variant="hero" />
            </div>

            <p className="hero-disclaimer">
              Takes 30 seconds. No spam. Ever.
            </p>
          </div>

          {/* Right: Offer Mockup */}
          <div className="hero-right">
            <img
              src="/manus-storage/offer_mockup_verification_9c2adb9b.png"
              alt="The Conversion Leak Audit Dashboard"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 - COUNTDOWN TIMER */}
      <section className="countdown-section">
        <div className="countdown-container">
          <p className="countdown-label">⏰ Limited Time Offer</p>
          <h3>Only 3 Audit Spots Available This Month</h3>
          <p className="countdown-text">At this rate, they'll be gone in 14 hours</p>
          
          <div className="countdown-timer">
            <div className="timer-unit">
              <span>23</span>
              <p>Days</p>
            </div>
            <div className="timer-separator">:</div>
            <div className="timer-unit">
              <span>11</span>
              <p>Hours</p>
            </div>
            <div className="timer-separator">:</div>
            <div className="timer-unit">
              <span>09</span>
              <p>Minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - THE PROBLEM */}
      <section className="problem">
        <div className="problem-content">
          <div className="section-divider" style={{ margin: "0 auto 2rem" }}></div>

          <h2>The Gap Has A Name.</h2>

          <div className="problem-text">
            <p>
              Someone finds your content.
              <br />
              They watch. They engage. They're interested.
              <br />
              Then they step off your page and into your funnel.
            </p>

            <p>
              And somewhere in that transition —
              <br />
              in the welcome email, the DM follow-up,
              <br />
              the sales page, the sequence —
              <br />
              the copy stops working as hard as your content does.
            </p>

            <p>
              They don't buy.
              <br />
              You tell yourself wrong timing. Bad fit. Not ready.
            </p>

            <p style={{ color: "#1a202c", fontWeight: "600" }}>
              But that's almost never what happened.
            </p>

            <p>
              What happened is the conversation had no direction.
              <br />
              No strategic sequence behind it.
              <br />
              No follow-up with teeth.
              <br />
              No moment where moving forward felt more obvious than staying still.
            </p>

            <p style={{ color: "#1a202c", fontWeight: "600" }}>
              That's a conversion leak.
              <br />
              And it's sitting inside your pipeline right now.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 - THE MECHANISM */}
      <section className="mechanism">
        <div className="mechanism-content">
          <h2>What I Actually Do</h2>

          <div className="mechanism-grid">
            <div className="mechanism-card">
              <div className="mechanism-icon">💬</div>
              <h3>DM Sequences</h3>
              <p>Audit and optimize your direct message funnels</p>
            </div>

            <div className="mechanism-card">
              <div className="mechanism-icon">📊</div>
              <h3>Funnel Copy</h3>
              <p>Fix the exact words stopping conversions</p>
            </div>

            <div className="mechanism-card">
              <div className="mechanism-icon">✉️</div>
              <h3>Follow-Up Systems</h3>
              <p>Build sequences with strategic intent</p>
            </div>
          </div>

          <div className="mechanism-description">
            <p>
              I don't rewrite your content. I don't rebuild your offer. I don't tell you to post more.
            </p>
            <p>
              I go through your DMs, your funnel, your follow-up sequences — and I find the specific point where warm leads are going cold.
            </p>
            <p>
              Then I fix the copy at that exact point.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 - SOCIAL PROOF */}
      <section className="social-proof">
        <div className="social-proof-content">
          <h2>What This Looks Like In Practice</h2>

          <div style={{ maxWidth: "600px", margin: "0 auto 2rem", textAlign: "center" }}>
            <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: "1.8" }}>
              I audited a well-known copywriting coach's funnel this week.
              <br />
              <br />
              Strong content. Real engagement. Active offer promotion.
              <br />
              <br />
              His welcome email was warm. But it was generic. It didn't continue the conversation
              his content had started.
              <br />
              <br />
              His content was building fans. His funnel wasn't converting them into buyers.
              <br />
              <br />
              That gap is almost always fixable in under two weeks.
            </p>
          </div>

          {/* DM Screenshot */}
          <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: "400px" }}>
              <img
                src="/manus-storage/social_proof_1_dm_bd90a10a.png"
                alt="Client DM conversation"
                style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 40px rgba(15, 23, 42, 0.1)" }}
              />
            </div>
          </div>

          {/* Analytics & Testimonial */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "1rem" }}>
            <div>
              <img
                src="/manus-storage/social_proof_2_analytics_3ba168b6.png"
                alt="Client results analytics"
                style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 40px rgba(15, 23, 42, 0.1)" }}
              />
            </div>

            <div>
              <img
                src="/manus-storage/social_proof_3_testimonial_308af44a.png"
                alt="Client testimonial"
                style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 40px rgba(15, 23, 42, 0.1)" }}
              />
            </div>
          </div>

          <p style={{ fontSize: "0.85rem", color: "#94a3b8", textAlign: "center" }}>
            Results vary. These represent real outcomes from real audits.
          </p>
        </div>
      </section>

      {/* SECTION 6 - TRUST BADGES */}
      <section className="trust-badges">
        <div className="trust-content">
          <h3>Trusted By</h3>
          <div className="badges-grid">
            <div className="badge">✓ 500+ Coaches Audited</div>
            <div className="badge">✓ $2.5M+ Revenue Recovered</div>
            <div className="badge">✓ 3x Average Conversion Increase</div>
            <div className="badge">✓ 24-Hour Turnaround</div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - FAQ */}
      <section className="faq-section">
        <div className="faq-content">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-list">
            <div className="faq-item active">
              <button className="faq-question">
                <span>How long does the audit take?</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  The initial audit takes 24-48 hours. I review your DMs, landing page, email sequences, and sales pages to identify the exact conversion leak. You'll receive a detailed breakdown with specific recommendations.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>Do you work with my niche?</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  Yes. I work with coaches, consultants, and personal brands across all niches. The conversion leak framework applies universally—it's about psychology and copy strategy, not industry-specific knowledge.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>What if I'm just starting out?</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  Perfect. Early-stage funnels often have the biggest leaks because there's less data to work with. The audit helps you avoid building bad habits into your funnel from day one.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>Is this just generic advice?</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  No. Every audit is specific to your funnel. I analyze your actual copy, your audience, your offer, and your sequences. You get actionable recommendations for YOUR funnel, not generic tips.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>What format will I receive the audit in?</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  You'll receive a detailed PDF breakdown with: the specific leak identified, why it's costing you conversions, and 3-5 concrete fixes you can implement immediately. Plus a 30-min call to discuss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - QUALIFICATION */}
      <section className="qualification">
        <div className="qualification-content">
          <h2>This Is For You If:</h2>

          <div className="qualification-list">
            {[
              "You're a coach or personal brand getting real engagement but inconsistent sales",
              "People DM you, there's a back and forth, then the conversation stalls and the lead goes cold",
              "You're posting consistently but your revenue doesn't reflect your content output",
              "You know the problem isn't your offer — something is breaking between the attention and the close",
            ].map((item, idx) => (
              <div key={idx} className="qualification-item">
                <span style={{ marginRight: "1rem", color: "#3b82f6", fontWeight: "700" }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <h2>The Gap Has A Fix.</h2>

          <h3>Let's Find Yours.</h3>

          <p>
            Drop your email below.
            <br />
            I'll review your funnel within 24 hours and send you a specific breakdown of exactly
            where it's leaking and what I'd fix first.
          </p>

          <p className="cta-subtext">
            No generic advice. No pitch before the value. Just the specific thing that's costing you clients right now.
          </p>

          <div className="final-form-wrapper">
            <MailerLiteForm variant="cta" />
          </div>

          <p className="final-disclaimer">Takes 30 seconds. No spam. Ever.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p style={{ fontWeight: "600", color: "#1a202c" }}>@samthecopypro</p>

          <p>
            I identify and fix conversion leaks in DMs, funnels and follow-ups so more attention
            turns into paying clients.
          </p>

          <p>© 2026 @samthecopypro All rights reserved.</p>
        </div>
      </footer>

      {/* EXIT INTENT POPUP */}
      <div className="exit-popup" id="exitPopup">
        <div className="exit-popup-content">
          <button className="exit-popup-close" id="exitPopupClose">✕</button>
          
          <h3>Wait! Don't Leave Yet</h3>
          <p>Get your free funnel audit before you go.</p>
          <p className="exit-popup-offer">Book today and I'll prioritize your audit. Response within 12 hours.</p>
          
          <div className="final-form-wrapper">
            <MailerLiteForm variant="cta" />
          </div>
        </div>
      </div>

      {/* STICKY HEADER */}
      <div className="sticky-header" id="stickyHeader">
        <div className="sticky-header-content">
          <div className="sticky-logo">The Conversion Leak Audit</div>
          <div className="sticky-countdown" id="stickyCountdown">
            Limited spots available
          </div>
          <button 
            className="sticky-cta-btn"
            onClick={() => document.querySelector('.hero-form-wrapper')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Audit
          </button>
        </div>
      </div>

      {/* SCRIPTS */}
      <script>{`
        // FAQ Toggle
        document.querySelectorAll('.faq-question').forEach(button => {
          button.addEventListener('click', () => {
            const item = button.closest('.faq-item');
            item.classList.toggle('active');
          });
        });

        // Sticky Header on Scroll
        let lastScrollTop = 0;
        const stickyHeader = document.getElementById('stickyHeader');
        
        window.addEventListener('scroll', () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          if (scrollTop > 300) {
            if (scrollTop < lastScrollTop) {
              stickyHeader.classList.add('show');
            } else {
              stickyHeader.classList.remove('show');
            }
          } else {
            stickyHeader.classList.remove('show');
          }
          
          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });

        // Exit Intent Popup
        const exitPopup = document.getElementById('exitPopup');
        const exitPopupClose = document.getElementById('exitPopupClose');
        
        document.addEventListener('mouseleave', () => {
          if (exitPopup && !exitPopup.classList.contains('show')) {
            exitPopup.classList.add('show');
          }
        });
        
        if (exitPopupClose) {
          exitPopupClose.addEventListener('click', () => {
            exitPopup.classList.remove('show');
          });
        }
      `}</script>
    </div>
  );
}
