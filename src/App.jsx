import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Users2,
  Fingerprint,
  Sparkles,
  ArrowRight,
  Globe2,
  MessageSquare,
  Smartphone,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Lock,
  Heart,
  Calendar,
  Github,
  Twitter,
  Linkedin,
  HelpCircle,
  Play,
} from "lucide-react";

// --- UTILS ---
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

// --- COMPONENTS ---

// 1. Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#020617]/80 backdrop-blur-xl border-white/5 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            {/* The glow effect behind the logo */}
            <div className="" />

            <div className="r">
              <img
                src="/logo.png"
                alt="Queer Haven Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-100">
            Queer<span className="text-purple-400">Haven</span>
          </span>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400 items-center">
          {["Manifesto", "Roadmap", "Team", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            v0.1.0 Alpha
          </span>
          <button className="bg-white text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-purple-50 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
            Back Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 p-6 md:hidden flex flex-col gap-4">
          {["Manifesto", "Roadmap", "Team", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-purple-600 text-white w-full py-3 rounded-lg font-bold mt-2">
            Back Project
          </button>
        </div>
      )}
    </nav>
  );
};

// 2. Interactive Funding Card
const FundingProgress = ({ onBack, onRemind }) => {
  const goal = 10000;
  const current = 2240;
  const percentage = (current / goal) * 100;
  const backers = 142;

  return (
    <div className="w-full bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full group-hover:bg-purple-500/20 transition-all duration-700" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">
              Phase 1 Funding
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {formatCurrency(current)}
              </span>
              <span className="text-slate-500 font-medium">
                of {formatCurrency(goal)}
              </span>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <div className="text-2xl font-bold text-white">{backers}</div>
            <div className="text-slate-500 text-sm">Backers</div>
          </div>
        </div>

        <div className="h-4 bg-slate-800 rounded-full overflow-hidden mb-4 border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-purple-400 to-emerald-400 rounded-full relative"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
          </div>
        </div>

        <div className="flex justify-between text-xs font-medium text-slate-400 mb-8">
          <span>0%</span>
          <span>50% (MVP Launch)</span>
          <span>100%</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onBack}
            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-500 hover:to-purple-400 text-white py-4 rounded-xl font-bold shadow-lg shadow-purple-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Back this Project <ArrowRight size={18} />
          </button>
          <button
            onClick={onRemind}
            className="px-6 py-4 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Heart size={18} className="text-pink-500" /> Remind Me
          </button>
        </div>

        <p className="text-center text-xs text-slate-600 mt-4">
          30-day money back guarantee if funding goal is not reached.
        </p>
      </div>
    </div>
  );
};
// 3. Roadmap Item
const RoadmapItem = ({ phase, title, date, items, active }) => (
  <div
    className={`relative pl-8 md:pl-0 md:group ${
      active ? "opacity-100" : "opacity-50 hover:opacity-100 transition-opacity"
    }`}
  >
    {/* Timeline Line */}
    <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

    <div
      className={`md:flex items-center justify-between gap-12 ${
        phase % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Date Side */}
      <div
        className={`hidden md:block w-1/2 ${
          phase % 2 === 0 ? "text-left" : "text-right"
        }`}
      >
        <span className="text-purple-400 font-mono text-sm border border-purple-500/20 bg-purple-900/10 px-3 py-1 rounded-full">
          {date}
        </span>
      </div>

      {/* Dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#020617] border-2 border-purple-500 rounded-full -translate-x-[5px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

      {/* Content Side */}
      <div className="md:w-1/2 mb-12 md:mb-0">
        <div className="md:hidden mb-2">
          <span className="text-purple-400 font-mono text-xs border border-purple-500/20 bg-purple-900/10 px-2 py-1 rounded-full">
            {date}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-slate-400"
            >
              <CheckCircle2
                size={16}
                className="text-emerald-500 shrink-0 mt-0.5"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// 4. Team Member
const TeamMember = ({ name, role, img, bio }) => (
  <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.04] transition-colors group">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xl overflow-hidden border border-white/10">
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-cover" />
        ) : (
          "👾"
        )}
      </div>
      <div>
        <h4 className="text-white font-bold">{name}</h4>
        <p className="text-purple-400 text-xs uppercase tracking-wider font-semibold">
          {role}
        </p>
      </div>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed mb-4">{bio}</p>
    <div className="flex gap-3">
      <Github
        size={16}
        className="text-slate-600 hover:text-white cursor-pointer transition-colors"
      />
      <Twitter
        size={16}
        className="text-slate-600 hover:text-white cursor-pointer transition-colors"
      />
      <Linkedin
        size={16}
        className="text-slate-600 hover:text-white cursor-pointer transition-colors"
      />
    </div>
  </div>
);

// 5. FAQ Item
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:text-purple-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-slate-200">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-slate-500" />
        ) : (
          <ChevronDown className="text-slate-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-slate-400 leading-relaxed text-sm pr-8">{answer}</p>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
const App = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success
  const [toast, setToast] = useState({ show: false, message: "" });

  const triggerToast = (msg) => {
    setToast({ show: true, message: msg });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-purple-500/30 font-sans overflow-x-hidden">
      {/* Background Noise Texture */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${
          toast.show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-2xl shadow-purple-900/40 border border-purple-400 flex items-center gap-3">
          <Sparkles size={18} />
          <span className="font-bold text-sm">{toast.message}</span>
        </div>
      </div>

      <Navbar
        onCtaClick={() =>
          triggerToast("Our payment gateway is coming online soon!")
        }
      />
      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        {/* Abstract Background Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Copy */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-purple-950/30 border border-purple-500/30 px-4 py-1.5 rounded-full text-purple-300 text-xs font-bold mb-8 uppercase tracking-widest hover:bg-purple-900/40 transition-colors cursor-default">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-[0_0_10px_#a855f7]" />
              Live Crowdfunding
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-8 text-white tracking-tight">
              A Place Our Voices Can{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-white">
                Be Heard.
              </span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg font-light">
              Mainstream social media wasn't built for us. So we’re building an
              <span className="text-slate-200 font-medium"> Haven </span>
              where you can breathe, be real, and belong on your own terms.
            </p>

            <form
              onSubmit={handleJoin}
              className="flex flex-col sm:flex-row gap-3 max-w-md mb-8"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="enter@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder:text-slate-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "success"}
                />
                {status === "success" && (
                  <CheckCircle2
                    className="absolute right-4 top-4 text-emerald-400"
                    size={20}
                  />
                )}
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  status === "success"
                    ? "bg-emerald-500 text-white"
                    : "bg-white text-slate-950 hover:bg-purple-50"
                }`}
              >
                {status === "loading" ? (
                  <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                ) : status === "success" ? (
                  "You're in!"
                ) : (
                  <>
                    Waitlist <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Social Proof Mini */}
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center text-xs text-white font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p>Joined by 2,000+ early believers</p>
            </div>
          </div>

          {/* Right: Visuals */}
          <div className="relative">
            {/* Funding Card Overlay */}
            <div className="relative z-20 transform md:rotate-[-2deg] md:hover:rotate-0 transition-transform duration-500">
              <FundingProgress
                onBack={() =>
                  triggerToast("Funding will open officially in Q1 2026!")
                }
                onRemind={() =>
                  triggerToast(
                    "We'll save your spot! Reminder system launching soon."
                  )
                }
              />
            </div>

            {/* Decor Elements behind */}
            <div className="absolute top-10 -right-10 w-full h-full border border-dashed border-white/10 rounded-3xl -z-10 hidden md:block" />
          </div>
        </div>
      </header>

      {/* --- LOGO STRIP --- */}
      <div className="border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {/* Mock Logos */}
          {["TechCrunch", "TheVerge", "Wired", "ProductHunt"].map((logo) => (
            <span
              key={logo}
              className="text-xl font-bold font-serif italic tracking-tighter"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* --- MANIFESTO / FEATURES --- */}
      <section id="manifesto" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built Different.
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl">
              We aren't just cloning Twitter or Instagram. We are rebuilding
              social interactions from the kernel up to prioritize safety and
              identity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Fingerprint className="text-purple-400" size={32} />,
                title: "Granular Identity",
                desc: "Your profile adapts to who is viewing it. Show your professional side to colleagues and your true self to the community.",
              },
              {
                icon: <Lock className="text-emerald-400" size={32} />,
                title: "Zero-Knowledge Safety",
                desc: "End-to-end encryption for DMs. Moderation tools that run on your device, not in the cloud.",
              },
              {
                icon: <Globe2 className="text-blue-400" size={32} />,
                title: "Federated Servers",
                desc: "We don't own your data. The network is distributed, making it censorship-resistant and resilient.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 hover:bg-purple-900/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-white/5 group-hover:border-purple-500/20">
                  {f.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-100">
                  {f.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ROADMAP --- */}
      <section
        id="roadmap"
        className="py-32 px-6 bg-[#030921] border-y border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-purple-400 font-bold tracking-widest text-xs uppercase mb-2 block">
              The Master Plan
            </span>
            <h2 className="text-4xl font-bold">Execution Roadmap</h2>
          </div>

          <div className="space-y-12 md:space-y-0 relative">
            {/* Phase 1: The Foundation - Focus on Safety & Web */}
            <RoadmapItem
              phase={1}
              date="Q1 2026"
              title="Foundation & Safety (MVP)"
              items={[
                "Secure Web Platform Launch",
                "Core Identity & Pronoun Systems",
                "Trust & Safety Moderation Tools",
                "Founding Member Onboarding (First 1,000)",
              ]}
              active={true}
            />

            {/* Phase 2: Going Mobile - Focus on Accessibility */}
            <RoadmapItem
              phase={2}
              date="Q3 2026"
              title="Mobile & Community Expansion"
              items={[
                "iOS & Android Beta App Launch",
                "Private Group Spaces",
                "Real-time Safety Alerts",
                "Live Community Events Interface",
              ]}
              active={false}
            />

            {/* Phase 3: Sustainability - Focus on Creator Economy (No Crypto) */}
            <RoadmapItem
              phase={3}
              date="Q1 2027"
              title="Ecosystem Growth"
              items={[
                "Creator Marketplace (Support Queer Artists)",
                "Premium 'Founding Wall' Features",
                "Global Virtual Pride Events",
                "Partner Resource Integration",
              ]}
              active={false}
            />
          </div>
        </div>
      </section>

      {/* --- TEAM --- */}
      <section id="team" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">The Builders</h2>
              <p className="text-slate-400 max-w-lg">
                A diverse team of engineers, designers, and activists from big
                tech and non-profits, united by a single mission.
              </p>
            </div>
            <button className="text-purple-400 hover:text-white font-bold flex items-center gap-2 transition-colors">
              Join the team <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember
              name="Alex V."
              role="Founder & CEO"
              bio="Ex-Stripe engineer. Building for the community I love."
            />
            <TeamMember
              name="Sam J."
              role="Head of Product"
              bio="Designed safety tools at Discord. Focused on user agency."
            />
            <TeamMember
              name="Jordan T."
              role="Lead Engineer"
              bio="Rust specialist. Ensuring encryption is unbreakable."
            />
            <TeamMember
              name="Casey L."
              role="Community Lead"
              bio="10 years in non-profit advocacy. Keeping us honest."
            />
          </div>
        </div>
      </section>

      {/* --- REWARDS TIERS --- */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#020617] to-purple-950/20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Support the Haven
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Queer Haven is built for the community, by the community. Your
            support helps us stay independent, secure, and ad-free forever.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 items-stretch">
          {/* $10 Tier */}
          <div className="p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-[#0b1021] h-full rounded-[1.9rem] p-6 flex flex-col items-center text-center">
              <span className="text-slate-400 font-bold text-xs tracking-widest uppercase mb-4">
                Supporter
              </span>
              <div className="text-3xl font-bold text-white mb-2">$10+</div>
              <ul className="space-y-3 mb-8 text-sm text-slate-300 text-left w-full mt-4">
                <li className="flex gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-purple-500 shrink-0"
                  />{" "}
                  Early Access
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-purple-500 shrink-0"
                  />{" "}
                  Supporter Badge
                </li>
              </ul>
              <button
                onClick={() =>
                  triggerToast("Supporter slots opening in Q1 2026!")
                }
                className="w-full mt-auto py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-bold transition-all text-white text-sm"
              >
                Join Haven
              </button>
            </div>
          </div>

          {/* $50 Tier */}
          <div className="p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-[#0b1021] h-full rounded-[1.9rem] p-6 flex flex-col items-center text-center">
              <span className="text-purple-400 font-bold text-xs tracking-widest uppercase mb-4">
                Member
              </span>
              <div className="text-3xl font-bold text-white mb-2">$50+</div>
              <ul className="space-y-3 mb-8 text-sm text-slate-300 text-left w-full mt-4">
                <li className="flex gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-purple-500 shrink-0"
                  />{" "}
                  All $10 Rewards
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-purple-500 shrink-0"
                  />{" "}
                  Name on Founding Wall
                </li>
              </ul>
              <button
                onClick={() =>
                  triggerToast("Founding Wall spots are being reserved!")
                }
                className="w-full mt-auto py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-bold transition-all text-white text-sm"
              >
                Be a Founder
              </button>
            </div>
          </div>

          {/* $100 Tier (Featured) */}
          <div className="p-1 rounded-[2rem] bg-gradient-to-b from-purple-500 to-pink-500 shadow-xl scale-105 relative z-10">
            <div className="bg-[#0b1021] h-full rounded-[1.9rem] p-6 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-20 bg-purple-500/10 blur-xl" />
              <span className="text-purple-400 font-bold text-xs tracking-widest uppercase mb-4">
                Heritage
              </span>
              <div className="text-4xl font-bold text-white mb-2">$100+</div>
              <ul className="space-y-3 mb-8 text-sm text-slate-200 text-left w-full mt-4">
                <li className="flex gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-emerald-400 shrink-0"
                  />{" "}
                  All $50 Rewards
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-emerald-400 shrink-0"
                  />{" "}
                  Exclusive Merch Kit
                </li>
                <li className="flex gap-2 text-xs text-slate-400 italic pl-6">
                  (Stickers, pins, or t-shirt)
                </li>
              </ul>
              <button
                onClick={() =>
                  triggerToast("Merch kits will ship upon project launch!")
                }
                className="w-full mt-auto py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold transition-all"
              >
                Claim Merch
              </button>
            </div>
          </div>

          {/* $500 Tier */}
          <div className="p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-[#0b1021] h-full rounded-[1.9rem] p-6 flex flex-col items-center text-center">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-4">
                Patron
              </span>
              <div className="text-3xl font-bold text-white mb-2">$500+</div>
              <ul className="space-y-3 mb-8 text-sm text-slate-300 text-left w-full mt-4">
                <li className="flex gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-purple-500 shrink-0"
                  />{" "}
                  All $100 Rewards
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-purple-500 shrink-0"
                  />{" "}
                  Private Video Call
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-purple-500 shrink-0"
                  />{" "}
                  Lifetime Premium
                </li>
              </ul>
              <button
                onClick={() =>
                  triggerToast("Visionary Patron spots are strictly limited!")
                }
                className="w-full mt-auto py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-bold transition-all text-white text-sm"
              >
                Support Vision
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          <FAQItem
            question="Why do we need another social network?"
            answer="Existing platforms monetize your attention and sell your data. We are building a public utility focused on connection, not addiction."
          />
          <FAQItem
            question="How will the funds be used?"
            answer="100% of Phase 1 funding goes to development costs (server infrastructure, security audits, and developer stipends). We publish monthly financial reports."
          />
          <FAQItem
            question="Is my data safe?"
            answer="We use a zero-knowledge architecture. Your DMs are encrypted on your device. We cannot read them even if we wanted to."
          />
          <FAQItem
            question="When can I start using it?"
            answer="Beta access opens in Q1 2026 for 'Founder' tier backers. Public access is scheduled for Q3 2026."
          />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/10 bg-[#01040f] pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              {/* The glow effect behind the logo */}
              <div className="" />

              <div className="r">
                <img
                  src="/logo.png"
                  alt="Queer Haven Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>

            <span className="text-xl font-bold tracking-tight text-slate-100">
              Queer<span className="text-purple-400">Haven</span>
            </span>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Project</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Transparency Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Brand Assets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; 2026 Queer Haven Foundation. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            All Systems Operational
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
