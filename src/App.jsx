import React, { useState } from "react";
import {
  ShieldCheck,
  Users2,
  Fingerprint,
  Sparkles,
  ArrowRight,
  CircleDollarSign,
  Globe2,
  MessagesSquare,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const App = () => {
  const [email, setEmail] = useState("");

  const fundingGoal = 10000;
  const currentFunding = 3200; // Simulated progress
  const progressPercent = (currentFunding / fundingGoal) * 100;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-purple-500/30">
      {/* --- ELITE NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/20 group-hover:rotate-12 transition-transform">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-100 to-purple-400 bg-clip-text text-transparent">
              Queer Haven
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a
              href="#mission"
              className="hover:text-purple-400 transition-colors"
            >
              Our Mission
            </a>
            <a
              href="#roadmap"
              className="hover:text-purple-400 transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#rewards"
              className="hover:text-purple-400 transition-colors"
            >
              Backer Perks
            </a>
          </div>
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-purple-900/40 transition-all active:scale-95">
            Support
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-emerald-900/20 blur-[100px] rounded-full" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-500/30 px-4 py-2 rounded-full text-purple-300 text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              Now in Phase 1 Development
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-8 text-slate-50">
              The Digital Sanctuary <br />
              <span className="text-purple-400 italic font-serif text-6xl md:text-8xl">
                Built for Us.
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
              Beyond mainstream algorithms. A curated, safe, and identity-first
              social haven for the global queer community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Secure your early access handle"
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-purple-500 outline-none w-full max-w-xs transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-purple-50 transition-all">
                Join the Waitlist <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Visual Representation of App */}
            <div className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 border border-white/10 p-4 rounded-[2.5rem] shadow-2xl backdrop-blur-sm">
              <div className="bg-[#020617] rounded-[2rem] overflow-hidden aspect-[4/5] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
                <div className="p-8">
                  <div className="w-12 h-2 bg-white/20 rounded-full mb-8" />
                  <div className="flex gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-white/10 rounded w-1/2" />
                      <div className="h-3 bg-white/5 rounded w-1/3" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-32 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center">
                      <Sparkles className="text-purple-500/40" size={40} />
                    </div>
                    <div className="h-4 bg-white/10 rounded w-full" />
                    <div className="h-4 bg-white/10 rounded w-5/6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- PROGRESS BAR SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-purple-950/20 border border-purple-500/20 p-8 rounded-3xl">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-1">
                Current Funding
              </p>
              <h3 className="text-3xl font-bold text-white">
                $3,200{" "}
                <span className="text-slate-500 text-lg font-normal">
                  / $10,000
                </span>
              </h3>
            </div>
            <p className="text-purple-400 font-bold">Phase 1 MVP</p>
          </div>
          <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-emerald-400 transition-all duration-1000"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="mt-4 text-sm text-slate-500 italic">
            Phase 1 covers core development, safety moderation tools, and secure
            hosting for 1 year.
          </p>
        </div>
      </section>

      {/* --- THE HAVEN DIFFERENCE --- */}
      <section id="mission" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-6 italic font-serif">
                A Space Built <br /> With Purpose.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Mainstream platforms prioritize profit. Queer Haven prioritizes
                peace. We're building the infrastructure for a digital home.
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Fingerprint className="text-purple-400" />,
                  title: "Identity First",
                  desc: "Custom pronouns and gender expressions that actually reflect who you are.",
                },
                {
                  icon: <ShieldCheck className="text-emerald-400" />,
                  title: "Proactive Safety",
                  desc: "Advanced AI-assisted moderation coupled with community-led oversight.",
                },
                {
                  icon: <MessagesSquare className="text-purple-400" />,
                  title: "Anonymous Haven",
                  desc: "Share your story without revealing your identity until you're ready.",
                },
                {
                  icon: <Globe2 className="text-emerald-400" />,
                  title: "Global Resources",
                  desc: "Direct connections to queer creators, local events, and mental health support.",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="group p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-all"
                >
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- REWARDS (PRICING TIERS) --- */}
      <section id="rewards" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Support the Sanctuary</h2>
          <p className="text-slate-400">
            Back us early and secure your place in the Founding Family.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              price: "$10",
              tier: "Supporter",
              perks: [
                "Early access link",
                "Supporter badge",
                "Weekly dev updates",
              ],
            },
            {
              price: "$50",
              tier: "Founder",
              perks: [
                "Name on Founding Wall",
                "Beta Tester status",
                "All Supporter perks",
              ],
            },
            {
              price: "$100",
              tier: "Ambassador",
              perks: [
                "Limited Edition Merch",
                "Priority Support",
                "Founder perks",
              ],
            },
            {
              price: "$500",
              tier: "Patron",
              perks: [
                "Lifetime Premium",
                "Team Video Call",
                "Ambassador perks",
              ],
            },
          ].map((r, i) => (
            <div
              key={i}
              className="flex flex-col p-8 rounded-[2rem] bg-gradient-to-b from-slate-900 to-transparent border border-white/5 hover:border-purple-500/50 transition-all"
            >
              <span className="text-purple-400 font-bold mb-2 uppercase tracking-tighter text-sm">
                {r.tier}
              </span>
              <div className="text-4xl font-bold mb-6">
                {r.price}
                <span className="text-lg text-slate-500 italic">+</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {r.perks.map((perk, pi) => (
                  <li
                    key={pi}
                    className="flex items-center gap-2 text-sm text-slate-400"
                  >
                    <CheckCircle2 size={16} className="text-purple-500" /> {perk}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold text-sm">
                Choose Tier
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 italic font-serif">
            A place where you can breathe.
          </h2>
          <p className="text-slate-400 text-lg mb-12">
            Every contribution brings us closer to a social network where safety
            isn't a feature—it's the foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-12 py-5 rounded-2xl font-bold shadow-2xl shadow-purple-900/40 transition-all">
              Donate Now
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white px-12 py-5 rounded-2xl font-bold border border-white/10 transition-all">
              Share the Vision
            </button>
          </div>
          <p className="mt-16 text-slate-600 text-sm tracking-widest uppercase font-semibold">
            🌈 Built for the community, by the community.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
