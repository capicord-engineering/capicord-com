import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Our Brands", href: "#brands" },
  { label: "What We Stand For", href: "#principles" },
  { label: "Contact", href: "#contact" },
];


export default function Home() {
  return (
    <>
      {/* Skip to main content — keyboard/screen-reader accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-teal focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold focus:text-[15px] focus:no-underline"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* ── HERO ── */}
        <section aria-labelledby="hero-heading" className="bg-white px-5 pt-14 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h1
              id="hero-heading"
              className="text-[clamp(36px,7vw,64px)] font-bold text-navy leading-[1.1] tracking-[-1.5px] mb-5"
            >
              Credit, Connected.
            </h1>
            <p className="text-[clamp(16px,2.5vw,20px)] text-muted max-w-xl mx-auto leading-[1.7] mb-10">
              Capicord Technologies Pvt Ltd is a technology holding company building regulated,
              RBI-compliant fintech brands for India. Our flagship brand, Lendcord, connects
              borrowers, agents, and NBFC lending partners through a transparent digital platform.
            </p>

            {/* Capicord → Lendcord — parent company to lending brand */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-10"
              aria-label="Capicord is the parent company of Lendcord"
            >
              <div className="px-5 py-2.5 rounded-lg text-[15px] font-semibold border w-40 sm:w-auto text-center bg-navy text-white border-navy">
                Capicord
              </div>
              {/* Down arrow on mobile */}
              <svg className="sm:hidden" width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true">
                <path d="M7 0v16M1 10l6 8 6-8" stroke="#0E6B5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {/* Right arrow on desktop */}
              <svg className="hidden sm:block" width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                <path d="M0 7h16M10 1l7 6-7 6" stroke="#0E6B5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="px-5 py-2.5 rounded-lg text-[15px] font-semibold border w-40 sm:w-auto text-center bg-site-bg text-navy border-slate-200">
                Lendcord
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://lendcord.in"
                rel="noopener noreferrer"
                className="bg-teal hover:bg-teal-dark text-white font-semibold text-[16px] px-8 py-3.5 rounded-lg transition-colors no-underline text-center"
              >
                Visit Lendcord
              </a>
              <a
                href="#contact"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold text-[16px] px-8 py-3.5 rounded-lg transition-colors no-underline text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <aside
          aria-label="Trust signals"
          className="bg-site-bg border-y border-slate-200 px-5 py-4"
        >
          <p className="text-[13px] text-muted font-medium tracking-wide text-center">
            RBI Digital Lending Guidelines Compliant&nbsp;&nbsp;·&nbsp;&nbsp;
            Group-Level Data Governance&nbsp;&nbsp;·&nbsp;&nbsp;256-bit Data
            Encryption&nbsp;&nbsp;·&nbsp;&nbsp;Powering Regulated NBFC Partnerships
          </p>
        </aside>

        {/* ── ABOUT ── */}
        <section id="about" aria-labelledby="about-heading" className="bg-white px-5 py-14 md:py-20">
          <div className="max-w-[1100px] mx-auto">
            <h2
              id="about-heading"
              className="text-center text-[clamp(26px,4vw,36px)] font-bold text-navy tracking-[-0.5px] mb-14"
            >
              About Capicord
            </h2>
            <ol
              className="grid grid-cols-1 md:grid-cols-3 gap-10 list-none m-0 p-0"
              aria-label="What Capicord does"
            >
              {[
                {
                  n: 1,
                  title: "Building Regulated Fintech",
                  body: "We design and operate technology platforms for regulated digital lending, built from the ground up for compliance with RBI's Digital Lending Guidelines.",
                },
                {
                  n: 2,
                  title: "Group-Level Compliance & Oversight",
                  body: "Every brand under Capicord operates under a shared compliance, data-security, and governance framework — audited consistently across the group, not brand by brand.",
                },
                {
                  n: 3,
                  title: "One Team, Many Brands",
                  body: "Starting with Lendcord, Capicord is building a portfolio of consumer and business fintech brands for India's credit ecosystem.",
                },
              ].map((step) => (
                <li key={step.n} className="flex flex-col gap-5">
                  <div
                    className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center font-bold text-xl shrink-0"
                    aria-hidden="true"
                  >
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2.5">{step.title}</h3>
                    <p className="text-muted leading-[1.7] text-[15px]">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── OUR BRANDS ── */}
        <section id="brands" aria-labelledby="brands-heading" className="bg-site-bg px-5 py-14 md:py-20">
          <div className="max-w-[1100px] mx-auto">
            <h2
              id="brands-heading"
              className="text-center text-[clamp(26px,4vw,36px)] font-bold text-navy tracking-[-0.5px] mb-14"
            >
              Our Brands
            </h2>
            <div className="max-w-2xl mx-auto">
              <article className="bg-white rounded-xl border border-slate-200 p-8 md:p-10 flex flex-col gap-4 text-center">
                <p className="text-[13px] font-semibold text-teal uppercase tracking-widest">
                  Flagship Brand
                </p>
                <h3 className="text-2xl font-bold text-navy">Lendcord</h3>
                <p className="text-muted leading-[1.7] text-[15px]">
                  Lendcord is Capicord&apos;s Lending Service Provider (LSP), connecting borrowers,
                  DSA agents, and NBFC lending partners through a transparent, fully digital
                  platform — minimal paperwork, upfront pricing, and real-time application
                  tracking. Lendcord does not lend money directly; all lending is carried out by
                  partner NBFCs registered with and regulated by the Reserve Bank of India.
                </p>
                <a
                  href="https://lendcord.in"
                  rel="noopener noreferrer"
                  className="mt-2 self-center bg-teal hover:bg-teal-dark text-white font-semibold text-[15px] px-6 py-2.5 rounded-lg no-underline transition-colors"
                >
                  Visit Lendcord →
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ── KEY PRINCIPLES ── */}
        <section id="principles" aria-labelledby="principles-heading" className="bg-white px-5 py-14 md:py-20">
          <div className="max-w-[1100px] mx-auto">
            <h2
              id="principles-heading"
              className="text-center text-[clamp(26px,4vw,36px)] font-bold text-navy tracking-[-0.5px] mb-14"
            >
              What We Stand For
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 list-none m-0 p-0">
              {[
                {
                  title: "Transparency First",
                  body: "Every brand we build discloses interest rates, fees, and repayment terms upfront — no hidden charges, ever.",
                },
                {
                  title: "Compliance by Design",
                  body: "We embed regulatory compliance — RBI Digital Lending Guidelines, data protection, KYC — into our platforms from day one, not as an afterthought.",
                },
                {
                  title: "Mobile-First, India-First",
                  body: "Every product we build is designed for real India — mobile-first, vernacular-ready, and accessible to first-time digital users.",
                },
                {
                  title: "Built for the Long Term",
                  body: "We partner with regulated NBFCs and invest in durable, secure technology — built to last, not to chase short-term growth.",
                },
              ].map((p) => (
                <li key={p.title} className="bg-site-bg rounded-xl border border-slate-200 p-6 md:p-8">
                  <h3 className="text-[17px] font-bold text-navy mb-3">{p.title}</h3>
                  <p className="text-muted leading-[1.7] text-[15px]">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" aria-labelledby="contact-heading" className="bg-site-bg px-5 py-14 md:py-20">
          <div className="max-w-[1100px] mx-auto">
            <h2
              id="contact-heading"
              className="text-center text-[clamp(26px,4vw,36px)] font-bold text-navy tracking-[-0.5px] mb-3"
            >
              Get in Touch
            </h2>
            <p className="text-center text-muted text-[15px] mb-3">
              For partnerships, media, and general questions about Capicord and its brands.
            </p>
            <p className="text-center text-muted text-[14px] mb-12">
              Looking for a loan, or want to become an agent? <a href="https://lendcord.in" rel="noopener noreferrer" className="text-teal hover:text-teal-dark font-semibold no-underline transition-colors">Visit Lendcord directly →</a>
            </p>

            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14 max-w-2xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-xl px-6 py-6 text-center">
                <p className="text-[13px] font-semibold text-muted uppercase tracking-widest mb-2">
                  General &amp; Partnership Inquiries
                </p>
                <p className="text-[15px] text-navy font-medium">Fill in the form below — we read every message.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl px-6 py-6 text-center">
                <p className="text-[13px] font-semibold text-muted uppercase tracking-widest mb-2">
                  Response Time
                </p>
                <p className="text-[15px] text-navy font-medium">Within 1 business day</p>
              </div>
            </div>

            {/* Contact form — Client Component */}
            <div className="max-w-[560px] mx-auto bg-white rounded-xl border border-slate-200 p-6 md:p-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-navy text-white px-5 pt-12 pb-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
            <div>
              <p className="font-bold text-[22px] mb-2">Capicord</p>
              <p className="text-[14px] text-slate-400">Credit, Connected.</p>
            </div>

            <nav aria-label="Footer navigation">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
                Quick Links
              </p>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-slate-300 hover:text-white text-[14px] no-underline transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
                Follow Us
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Twitter", href: "https://twitter.com/capi_cord" },
                  { label: "Instagram", href: "https://instagram.com/capi.cord" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`Capicord on ${s.label} (opens in new tab)`}
                    className="text-[14px] text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-md px-3 py-1.5 no-underline transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-none bg-slate-700 h-px mb-6" />

          <p className="text-[13px] text-slate-500 text-center mb-4">
            © 2025 Capicord Technologies Pvt Ltd. All rights reserved.&nbsp;&nbsp;·&nbsp;&nbsp;RBI
            Digital Lending Guidelines Compliant
          </p>
          <p className="text-[12px] text-slate-600 text-center leading-[1.6] max-w-2xl mx-auto">
            Capicord Technologies Pvt Ltd is a technology holding company. Lendcord, a brand
            operated by Capicord, is a Lending Service Provider (LSP). Lendcord does not lend
            money, approve loans, or disburse funds. All lending is done by our partner NBFCs who
            are registered and regulated by the Reserve Bank of India.
          </p>
        </div>
      </footer>
    </>
  );
}
