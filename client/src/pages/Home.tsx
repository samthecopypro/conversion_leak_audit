import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * DESIGN SYSTEM - @samthecopypro Conversion Leak Audit
 * 
 * TYPOGRAPHY:
 * - Headlines: Bebas Neue, 400 weight, letter-spacing 0.52px
 * - Body: DM Sans, 400 weight, line-height 1.6
 * - Subheadlines: DM Sans, 600 weight
 * 
 * COLORS:
 * - Background: Deep navy black (#0a0a0f)
 * - Text: White (#ffffff)
 * - Accent: Electric red (#ff2d2d)
 * - Secondary: Muted dark grey (#1a1a2e)
 * 
 * LAYOUT: Center-oriented, premium dark aesthetic
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* SECTION 1 - ABOVE THE FOLD */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline & Copy */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 text-center">
                <p className="text-sm font-semibold tracking-widest text-[#ff2d2d] uppercase mb-4">
                  For coaches and personal brands getting attention but not clients
                </p>
              </div>

              <h1
                className="font-['Bebas_Neue'] text-5xl lg:text-6xl font-bold leading-tight mb-8 text-center"
                style={{ letterSpacing: "0.52px" }}
              >
                Your Content Is Working.
                <br />
                Your Pipeline Isn't.
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed font-['DM_Sans'] text-center">
                I find the exact point where your funnel stops converting people who were already
                ready to buy — and I fix it.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4">
                <Input
                  type="email"
                  placeholder="Enter email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#1a1a2e] border-[#1a1a2e] text-white placeholder:text-gray-500 rounded-lg py-3 px-4"
                />
                <Button
                  type="submit"
                  className="bg-[#ff2d2d] hover:bg-[#e62626] text-white font-bold py-3 px-6 rounded-lg w-full transition-all"
                >
                  Get My Free Funnel Audit
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center">
                Takes 30 seconds. No spam. Ever.
              </p>
            </div>

            {/* Right: Offer Mockup */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/manus-storage/offer_mockup_verification_9c2adb9b.png"
                alt="The Conversion Leak Audit Dashboard"
                className="w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE PROBLEM */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="w-12 h-1 bg-[#ff2d2d] mb-6"></div>
          </div>

          <h2
            className="font-['Bebas_Neue'] text-4xl lg:text-5xl font-bold text-center mb-12"
            style={{ letterSpacing: "0.52px" }}
          >
            The Gap Has A Name.
          </h2>

          <div className="space-y-6 text-gray-300 font-['DM_Sans'] leading-relaxed text-center">
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

            <p className="text-white">But that's almost never what happened.</p>

            <p>
              What happened is the conversation had no direction.
              <br />
              No strategic sequence behind it.
              <br />
              No follow-up with teeth.
              <br />
              No moment where moving forward felt more obvious than staying still.
            </p>

            <p className="text-white font-semibold">
              That's a conversion leak.
              <br />
              And it's sitting inside your pipeline right now.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - THE MECHANISM */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-['Bebas_Neue'] text-4xl lg:text-5xl font-bold text-center mb-12"
            style={{ letterSpacing: "0.52px" }}
          >
            What I Actually Do
          </h2>

          <div className="space-y-6 text-gray-300 font-['DM_Sans'] leading-relaxed mb-16 text-center">
            <p>
              I don't rewrite your content.
              <br />
              I don't rebuild your offer.
              <br />
              I don't tell you to post more.
            </p>

            <p>
              I go through your DMs, your funnel,
              <br />
              your follow-up sequences —
              <br />
              and I find the specific point where
              <br />
              warm leads are going cold.
            </p>

            <p>Then I fix the copy at that exact point.</p>

            <p className="text-white font-semibold">
              Not generic advice.
              <br />
              Not vague direction.
              <br />
              Not where your pipeline is bleeding.
            </p>

            <p>
              Same audience.
              <br />
              Same offer.
              <br />
              Same content output.
              <br />
              Different results at the end.
            </p>
          </div>

          {/* Three Column Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#ff2d2d] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
              </div>
              <h3 className="font-bold text-white mb-2">DM Sequences</h3>
              <p className="text-sm text-gray-400">Audit and optimize your direct message funnels</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#ff2d2d] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
              </div>
              <h3 className="font-bold text-white mb-2">Funnel Copy</h3>
              <p className="text-sm text-gray-400">Fix the exact words stopping conversions</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#ff2d2d] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
              </div>
              <h3 className="font-bold text-white mb-2">Follow-Up Systems</h3>
              <p className="text-sm text-gray-400">Build sequences with strategic intent</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - SOCIAL PROOF */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-['Bebas_Neue'] text-4xl lg:text-5xl font-bold text-center mb-8"
            style={{ letterSpacing: "0.52px" }}
          >
            What This Looks Like In Practice
          </h2>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-gray-300 font-['DM_Sans'] leading-relaxed text-center">
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
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-sm drop-shadow-2xl">
              <img
                src="/manus-storage/social_proof_1_dm_bd90a10a.png"
                alt="Client DM conversation"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Analytics & Testimonial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div className="drop-shadow-2xl">
              <img
                src="/manus-storage/social_proof_2_analytics_3ba168b6.png"
                alt="Client results analytics"
                className="w-full rounded-lg"
              />
            </div>

            <div className="drop-shadow-2xl">
              <img
                src="/manus-storage/social_proof_3_testimonial_308af44a.png"
                alt="Client testimonial"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Results vary. These represent real outcomes from real audits.
          </p>
        </div>
      </section>

      {/* SECTION 5 - WHO THIS IS FOR */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-['Bebas_Neue'] text-4xl lg:text-5xl font-bold text-center mb-16"
            style={{ letterSpacing: "0.52px" }}
          >
            This Is For You If:
          </h2>

          <div className="space-y-6">
            {[
              "You're a coach or personal brand getting real engagement but inconsistent sales",
              "People DM you, there's a back and forth, then the conversation stalls and the lead goes cold",
              "You're posting consistently but your revenue doesn't reflect your content output",
              "You know the problem isn't your offer — something is breaking between the attention and the close",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 border-b border-[#1a1a2e] last:border-b-0"
              >
                <ArrowRight className="w-6 h-6 text-[#ff2d2d] flex-shrink-0 mt-1" />
                <p className="text-gray-300 font-['DM_Sans'] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="font-['Bebas_Neue'] text-5xl lg:text-6xl font-bold mb-4"
            style={{ letterSpacing: "0.52px" }}
          >
            The Gap Has A Fix.
          </h2>

          <h3
            className="font-['Bebas_Neue'] text-3xl lg:text-4xl font-bold text-[#ff2d2d] mb-12"
            style={{ letterSpacing: "0.52px" }}
          >
            Let's Find Yours.
          </h3>

          <div className="space-y-6 mb-12">
            <p className="text-gray-300 font-['DM_Sans'] leading-relaxed text-lg">
              Drop your email below.
              <br />
              I'll review your funnel within 24 hours and send you a specific breakdown of exactly
              where it's leaking and what I'd fix first.
              <br />
              <br />
              No generic advice.
              <br />
              No pitch before the value.
              <br />
              Just the specific thing that's costing you clients right now.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#1a1a2e] border-[#1a1a2e] text-white placeholder:text-gray-500 rounded-lg py-4 px-4 text-base"
            />
            <Button
              type="submit"
              className="bg-[#ff2d2d] hover:bg-[#e62626] text-white font-bold py-4 px-6 rounded-lg w-full transition-all text-lg"
            >
              Get My Free Funnel Audit
            </Button>
          </form>

          <p className="text-xs text-gray-500">Takes 30 seconds. No spam. Ever.</p>

          {submitted && (
            <div className="mt-6 p-4 bg-[#1a1a2e] rounded-lg border border-[#ff2d2d]">
              <p className="text-[#ff2d2d] font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Thanks! Check your email within 24 hours.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="text-white font-bold">@samthecopypro</div>

            <div className="text-gray-500 text-sm">
              I identify and fix conversion leaks in DMs, funnels and follow-ups so more attention
              turns into paying clients.
            </div>

            <div className="text-gray-500 text-sm">© 2026 @samthecopypro All rights reserved.</div>
          </div>

          <div className="h-px bg-[#ff2d2d] mt-8"></div>
        </div>
      </footer>
    </div>
  );
}
