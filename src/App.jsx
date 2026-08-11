import React, { useState } from 'react';

// Zeenotech node logo, unchanged from the approved mark
function ZeenotechLogo({ size = 42, color = "#2563EB" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="18" fill={color} />
      <line x1="50" y1="32" x2="50" y2="18" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <line x1="62" y1="40" x2="75" y2="30" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <line x1="67" y1="52" x2="80" y2="52" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="62" x2="70" y2="73" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <line x1="38" y1="62" x2="24" y2="76" stroke={color} strokeWidth="7" strokeLinecap="round" />
      <line x1="33" y1="52" x2="20" y2="52" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <line x1="36" y1="40" x2="22" y2="28" stroke={color} strokeWidth="7" strokeLinecap="round" />
      <circle cx="50" cy="14" r="5" stroke={color} strokeWidth="4" fill="#F8FAFC" />
      <circle cx="78" cy="27" r="5" stroke={color} strokeWidth="4" fill="#F8FAFC" />
      <circle cx="83" cy="52" r="7" stroke={color} strokeWidth="5" fill="#F8FAFC" />
      <circle cx="73" cy="76" r="7" stroke={color} strokeWidth="5" fill="#F8FAFC" />
      <circle cx="20" cy="79" r="8" stroke={color} strokeWidth="6" fill="#F8FAFC" />
      <circle cx="18" cy="52" r="4" stroke={color} strokeWidth="4" fill="#F8FAFC" />
      <circle cx="18" cy="24" r="10" stroke={color} strokeWidth="6" fill="#F8FAFC" />
    </svg>
  );
}

// ---------------------------------------------------------------
// CONTENT NOTE FOR THE FOUNDER
// Every value below marked [FOUNDER TO CONFIRM] is a placeholder.
// Structure and flow are locked for this MVP. Swap the marked
// values with real pricing, categories, addresses, and reviews
// and this is ready to point real traffic at.
// ---------------------------------------------------------------

const QUICK_LINKS = [
  { label: "Screen Repair", target: "services" },
  { label: "Battery Replacement", target: "services" },
  { label: "Buy a Phone", target: "shop" },
  { label: "Buy a Laptop", target: "shop" },
  { label: "Swap My Device", target: "services" },
  { label: "Track My Order", target: "track" },
];

const JOURNEY = [
  { step: "Intake", detail: "Device logged and condition recorded" },
  { step: "Diagnosis", detail: "Technician runs a full fault check" },
  { step: "Verified", detail: "Work confirmed against the report" },
  { step: "Delivered", detail: "Handed back with a status log" },
];

const CATEGORIES = [
  { label: "Phones", note: "New & used" },
  { label: "Laptops", note: "New & used" },
  { label: "Tablets", note: "New & used" },
  { label: "Accessories", note: "Chargers, cases, parts" },
  { label: "Used Devices", note: "Graded & tested" },
  { label: "New Devices", note: "Sealed & verified" },
];

const SERVICES = [
  {
    title: "Repair",
    text: "Full diagnosis before any work starts. You see the fault and the fix, not just the bill.",
    price: "From ₦8,000 [FOUNDER TO CONFIRM]",
  },
  {
    title: "Buy",
    text: "Every unit tested and graded before listing. Condition is stated, not guessed at.",
    price: "From ₦45,000 [FOUNDER TO CONFIRM]",
  },
  {
    title: "Upgrade",
    text: "Trade your current device toward a better one. Component testing sets the trade value.",
    price: "Trade value on request",
  },
  {
    title: "Swap",
    text: "Straight device-for-device exchange with fair grading on both sides.",
    price: "Grading fee from ₦2,000 [FOUNDER TO CONFIRM]",
  },
];

const TRUST_FOR = [
  "Devices tested before they reach you",
  "Technicians vetted before they touch your device",
  "One price, stated upfront",
  "Status updates you can check yourself",
];

const TRUST_AGAINST = [
  "Refurbished units sold as new",
  "Repairs with no diagnosis report",
  "Charges added after work has started",
  "Devices that go quiet with no updates",
];

const LOCATIONS = [
  {
    name: "Computer Village Hub",
    note: "Partnership repair and sourcing point, Ikeja [FOUNDER TO CONFIRM ADDRESS]",
    image: "https://picsum.photos/seed/zeeno-hub/800/450",
  },
  {
    name: "Igando Drop-off",
    note: "Device intake and pickup point [FOUNDER TO CONFIRM ADDRESS]",
    image: "https://picsum.photos/seed/zeeno-igando/800/450",
  },
];

const TESTIMONIALS = [
  { name: "[FOUNDER TO ADD]", text: "[Pull 3 real reviews from WhatsApp or Google here before launch]", rating: 5, avatar: "https://i.pravatar.cc/150?img=32" },
  { name: "[FOUNDER TO ADD]", text: "[Placeholder so the layout is not empty]", rating: 5, avatar: "https://i.pravatar.cc/150?img=47" },
  { name: "[FOUNDER TO ADD]", text: "[Placeholder so the layout is not empty]", rating: 5, avatar: "https://i.pravatar.cc/150?img=25" },
];

export default function App() {
  const [showRepair, setShowRepair] = useState(false);
  const [showSourcing, setShowSourcing] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.brand}>
          <div style={styles.logoWrapper}>
            <ZeenotechLogo size={38} color="#2563EB" />
          </div>
          <div>
            <div style={styles.brandName}>ZEENOTECH</div>
            <div style={styles.brandTag}>Properly Sourced. Tested. Delivered.</div>
          </div>
        </div>
        <div style={styles.navLinks}>
          <button style={styles.navLink} onClick={() => scrollTo("services")}>Services</button>
          <button style={styles.navLink} onClick={() => scrollTo("shop")}>Shop</button>
          <button style={styles.navLink} onClick={() => scrollTo("track")}>Track Order</button>
          <button style={styles.navLink} onClick={() => scrollTo("coverage")}>Locations</button>
        </div>
        <button style={styles.navBtn} onClick={() => setShowRepair(true)}>Request a Service</button>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <div style={styles.badge}>YOUR TRUSTED DEVICE SOLUTIONS</div>
          <h1 style={styles.title}>
            We make buying, selling, and repairing your devices
            <span style={styles.blue}> simple, safe, and completely traceable.</span>
          </h1>
          <p style={styles.subtitle}>
            No guesswork. No street-level hassle. Just trusted technicians,
            verified devices, and real status updates from start to finish.
          </p>

          <div style={styles.pillRow}>
            {QUICK_LINKS.map((q) => (
              <button key={q.label} style={styles.pill} onClick={() => scrollTo(q.target)}>
                {q.label}
              </button>
            ))}
          </div>

          <div style={styles.ctaGrid}>
            <div style={styles.ctaCardYellow}>
              <h3 style={styles.ctaHeading}>Book a Repair</h3>
              <p style={styles.ctaText}>Professional diagnostics and verified repairs from intake to delivery.</p>
              <button style={styles.primaryBtn} onClick={() => setShowRepair(true)}>Get Started</button>
            </div>
            <div style={styles.ctaCardBlue}>
              <h3 style={styles.ctaHeading}>Request Device Sourcing</h3>
              <p style={styles.ctaText}>Properly sourced, tested, and certified devices with transparent pricing.</p>
              <button style={styles.secondaryBtn} onClick={() => setShowSourcing(true)}>Request Now</button>
            </div>
          </div>
        </div>

        <div style={styles.heroVisual}>
          <div style={styles.photoFrame}>
            <img
              src="https://picsum.photos/seed/zeeno-hero/900/675"
              alt="Technician repairing a smartphone"
              style={styles.photoImg}
            />
          </div>

          <div style={styles.trailCard}>
            <div style={styles.trailLabel}>Every device follows this trail</div>
            {JOURNEY.map((j, i) => (
              <div key={j.step} style={styles.trailRow}>
                <div style={styles.trailDotCol}>
                  <div style={styles.trailDot}>{i + 1}</div>
                  {i < JOURNEY.length - 1 && <div style={styles.trailLine} />}
                </div>
                <div style={styles.trailTextCol}>
                  <div style={styles.trailStep}>{j.step}</div>
                  <div style={styles.trailDetail}>{j.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WE STAND FOR / WE DON'T DO */}
      <section style={styles.section}>
        <div style={styles.sectionTag}>WHERE WE STAND</div>
        <h2 style={styles.sectionTitle}>What you get, and what you will not</h2>
        <div style={styles.forAgainstGrid}>
          <div style={styles.forCard}>
            <div style={styles.forAgainstHead}>We stand for</div>
            {TRUST_FOR.map((t) => (
              <div key={t} style={styles.forRow}>
                <span style={styles.checkMark}>✓</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div style={styles.againstCard}>
            <div style={styles.forAgainstHead}>We do not do</div>
            {TRUST_AGAINST.map((t) => (
              <div key={t} style={styles.againstRow}>
                <span style={styles.crossMark}>✕</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.photoFrameWide}>
          <img
            src="https://picsum.photos/seed/zeeno-trust/1400/525"
            alt="Technician showing a customer their device"
            style={styles.photoImg}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <div style={styles.sectionTag}>WHAT WE DO</div>
        <h2 style={styles.sectionTitle}>Repair, Buy, Upgrade & Swap</h2>
        <p style={styles.sectionText}>
          Everything your device needs, handled through one verified process.
        </p>
        <div style={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardText}>{s.text}</p>
              <div style={styles.cardPrice}>{s.price}</div>
              <button style={styles.cardBtn} onClick={() => setShowRepair(true)}>Start request</button>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP CATEGORIES */}
      <section id="shop" style={styles.sectionAlt}>
        <div style={styles.sectionTag}>SHOP</div>
        <h2 style={styles.sectionTitle}>Browse by category</h2>
        <p style={styles.sectionText}>
          Full catalog with live pricing goes here. Categories below match what Zeenotech already stocks.
        </p>
        <div style={styles.categoryGrid}>
          {CATEGORIES.map((c) => (
            <button key={c.label} style={styles.categoryChip} onClick={() => setShowSourcing(true)}>
              <div style={styles.categoryLabel}>{c.label}</div>
              <div style={styles.categoryNote}>{c.note}</div>
            </button>
          ))}
        </div>
      </section>

      {/* TRACK ORDER */}
      <section id="track" style={styles.section}>
        <div style={styles.sectionTag}>STATUS</div>
        <h2 style={styles.sectionTitle}>Track your repair or order</h2>
        <p style={styles.sectionText}>
          Enter the reference number you got at intake to see where your device is right now.
        </p>
        <div style={styles.trackBox}>
          <input
            style={styles.trackInput}
            placeholder="e.g. ZT-2026-0451"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
          <button style={styles.primaryBtn}>Check Status</button>
        </div>
        <p style={styles.trackNote}>
          [FOUNDER TO CONFIRM: this connects to the Agent1 dispatch record for the reference number.]
        </p>
      </section>

      {/* COVERAGE / LOCATIONS */}
      <section id="coverage" style={styles.sectionAlt}>
        <div style={styles.sectionTag}>WHERE TO FIND US</div>
        <h2 style={styles.sectionTitle}>Drop off or meet a technician</h2>
        <div style={styles.locationGrid}>
          {LOCATIONS.map((l) => (
            <div key={l.name} style={styles.locationCard}>
              <div style={styles.locationPhotoFrame}>
                <img src={l.image} alt={l.name} style={styles.photoImg} />
              </div>
              <div style={styles.locationName}>{l.name}</div>
              <div style={styles.locationNote}>{l.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.section}>
        <div style={styles.sectionTag}>WHAT PEOPLE SAY</div>
        <h2 style={styles.sectionTitle}>Trusted by repeat customers</h2>
        <div style={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={styles.card}>
              <img src={t.avatar} alt="Customer" style={styles.avatarImg} />
              <div style={styles.stars}>{"★".repeat(t.rating)}</div>
              <p style={styles.cardText}>{t.text}</p>
              <div style={styles.testimonialName}>{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={styles.trust}>
        <div>🛡️ Trusted Devices</div>
        <div>🔒 Secure Transactions</div>
        <div>👨‍🔧 Expert Support</div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerCta}>
          <div>
            <div style={styles.footerCtaTitle}>Get in touch</div>
            <div style={styles.footerCtaText}>Have a device that needs sorting out? Talk to us directly.</div>
          </div>
          <button style={styles.footerCtaBtn} onClick={() => setShowRepair(true)}>Send a message</button>
        </div>

        <div style={styles.footerGrid}>
          <div>
            <div style={styles.footerBrand}>ZEENOTECH</div>
            <p style={{ color: '#94A3B8', fontSize: 14 }}>Your trusted device solutions partner.</p>
          </div>
          <div>
            <h4 style={styles.footerHead}>Corporate Office</h4>
            <p style={styles.footerLine}>The Philippi Centre</p>
            <p style={styles.footerLine}>Oluwalogbon House</p>
            <p style={styles.footerLine}>Alausa, Ikeja, Lagos</p>
            <p style={styles.footerLine}>RC: 9370590</p>
          </div>
          <div>
            <h4 style={styles.footerHead}>Contact</h4>
            <p style={styles.footerLine}>support@zeenotech.com.ng</p>
            <p style={styles.footerLine}>+234 813 965 0067</p>
          </div>
        </div>
        <div style={styles.footerBottom}>© 2026 Zeenotech. All rights reserved.</div>
      </footer>

      {/* WHATSAPP */}
      
        href="https://wa.me/2348139650067?text=Hello%20Zeenotech,%20I%20need%20help%20with%20my%20device."
        target="_blank"
        rel="noreferrer"
        style={styles.whatsapp}
      >
        <div style={styles.whatsappIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4A8.5 8.5 0 1 1 21 11.5Z" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 11a4 4 0 0 0 4 4h1l2 2v-2a4 4 0 0 0 4-4" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div style={styles.whatsappTitle}>WhatsApp</div>
          <div style={styles.whatsappSub}>Chat with Zeenotech</div>
        </div>
      </a>

      {/* MODALS */}
      {showRepair && (
        <Modal title="Book a Repair" onClose={() => setShowRepair(false)}>
          <input style={styles.input} placeholder="Full Name" />
          <input style={styles.input} placeholder="Phone / WhatsApp" />
          <input style={styles.input} placeholder="Device Type" />
          <textarea style={styles.textarea} placeholder="Describe the issue" />
          <button style={styles.primaryBtn}>Submit Repair Request</button>
        </Modal>
      )}

      {showSourcing && (
        <Modal title="Request Device Sourcing" onClose={() => setShowSourcing(false)}>
          <input style={styles.input} placeholder="Full Name" />
          <input style={styles.input} placeholder="Phone / WhatsApp" />
          <input style={styles.input} placeholder="Device Needed" />
          <input style={styles.input} placeholder="Budget (₦)" />
          <button style={styles.secondaryBtn}>Submit Sourcing Request</button>
        </Modal>
      )}
    </div>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.modalHead}>
          <h3 style={{ margin: 0, fontSize: 18 }}>{title}</h3>
          <button style={styles.close} onClick={onClose}>✕</button>
        </div>
        <div style={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}

const BLUE = "#2563EB";
const YELLOW = "#EAB308";
const NAVY = "#0B132B";

const styles = {
  page: { fontFamily: 'Inter, system-ui, sans-serif', background: '#F8FAFC', color: '#0F172A', minHeight: '100vh', overflowX: 'hidden' },

  nav: { maxWidth: 1200, margin: '0 auto', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 },
  brand: { display: 'flex', alignItems: 'center', gap: 12 },
  logoWrapper: { width: 44, height: 44, borderRadius: 12, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #DBEAFE' },
  brandName: { fontWeight: 800, fontSize: 20 },
  brandTag: { fontSize: 11, color: '#64748B' },
  navLinks: { display: 'flex', gap: 4, flexWrap: 'wrap' },
  navLink: { background: 'none', border: 'none', color: '#334155', fontWeight: 600, fontSize: 14, padding: '8px 10px', borderRadius: 8, cursor: 'pointer' },
  navBtn: { background: YELLOW, border: 'none', padding: '10px 16px', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontSize: 14 },

  hero: { maxWidth: 1200, margin: '0 auto', padding: '24px 20px 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, alignItems: 'start' },
  badge: { display: 'inline-block', background: '#EFF6FF', color: BLUE, padding: '8px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 16 },
  title: { fontSize: 'clamp(28px, 6vw, 52px)', lineHeight: 1.15, margin: '0 0 16px', fontWeight: 800 },
  blue: { color: BLUE, display: 'inline' },
  subtitle: { fontSize: 'clamp(15px, 3.5vw, 18px)', lineHeight: 1.6, color: '#475569', maxWidth: 560, marginBottom: 20 },

  pillRow: { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 },
  pill: { background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 999, padding: '8px 14px', fontSize: 13, fontWeight: 600, color: '#334155', cursor: 'pointer' },

  ctaGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 },
  ctaCardYellow: { background: '#FFFBEA', border: '1px solid #FDE68A', borderRadius: 20, padding: 20, boxShadow: '0 10px 30px rgba(234,179,8,.08)' },
  ctaCardBlue: { background: '#FFFFFF', border: '1px solid #DBEAFE', borderRadius: 20, padding: 20, boxShadow: '0 10px 30px rgba(37,99,235,.06)' },
  ctaHeading: { margin: '0 0 8px', fontSize: 18, fontWeight: 700 },
  ctaText: { margin: 0, fontSize: 14, color: '#475569', lineHeight: 1.5 },

  primaryBtn: { background: YELLOW, border: 'none', padding: '12px 18px', borderRadius: 12, fontWeight: 800, cursor: 'pointer', fontSize: 14 },
  secondaryBtn: { background: BLUE, color: '#FFFFFF', border: 'none', padding: '12px 18px', borderRadius: 12, fontWeight: 800, cursor: 'pointer', fontSize: 14 },

  heroVisual: { display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', padding: '10px 0' },
  photoFrame: { width: '100%', maxWidth: 340, aspectRatio: '4/3', borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 50px rgba(37,99,235,.15)' },
  photoFrameWide: { width: '100%', maxWidth: 640, aspectRatio: '16/6', margin: '24px auto 0', borderRadius: 20, overflow: 'hidden', boxShadow: '0 15px 40px rgba(15,23,42,.10)' },
  locationPhotoFrame: { width: '100%', aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', marginBottom: 12 },
  photoImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  avatarImg: { width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', marginBottom: 10, border: '2px solid #EFF6FF' },
  trailCard: { width: '100%', maxWidth: 340, background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 20, padding: 24, boxShadow: '0 20px 50px rgba(37,99,235,.10)' },
  trailLabel: { fontSize: 13, fontWeight: 700, color: BLUE, marginBottom: 18 },
  trailRow: { display: 'flex', gap: 12 },
  trailDotCol: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  trailDot: { width: 28, height: 28, borderRadius: '50%', background: BLUE, color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, flexShrink: 0 },
  trailLine: { width: 2, flex: 1, minHeight: 24, background: '#DBEAFE' },
  trailTextCol: { paddingBottom: 18 },
  trailStep: { fontWeight: 700, fontSize: 14, marginBottom: 2 },
  trailDetail: { fontSize: 12, color: '#64748B' },

  section: { maxWidth: 1200, margin: '0 auto', padding: '30px 20px 50px', textAlign: 'center' },
  sectionAlt: { maxWidth: 1200, margin: '0 auto', padding: '30px 20px 50px', textAlign: 'center', background: '#FFFFFF', borderRadius: 24 },
  sectionTag: { color: BLUE, fontWeight: 800, fontSize: 12, letterSpacing: 1, marginBottom: 8 },
  sectionTitle: { fontSize: 'clamp(24px, 5vw, 38px)', margin: '0 0 10px', fontWeight: 800 },
  sectionText: { color: '#64748B', maxWidth: 640, margin: '0 auto 30px', lineHeight: 1.6, fontSize: 'clamp(14px, 3vw, 16px)' },

  forAgainstGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, textAlign: 'left' },
  forCard: { background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 20, padding: 22 },
  againstCard: { background: NAVY, borderRadius: 20, padding: 22, color: '#FFFFFF' },
  forAgainstHead: { fontWeight: 800, fontSize: 15, marginBottom: 14 },
  forRow: { display: 'flex', gap: 10, marginBottom: 10, fontSize: 14, color: '#334155' },
  againstRow: { display: 'flex', gap: 10, marginBottom: 10, fontSize: 14, color: '#CBD5E1' },
  checkMark: { color: '#16A34A', fontWeight: 800 },
  crossMark: { color: '#F87171', fontWeight: 800 },

  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 },
  card: { background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 20, padding: 22, textAlign: 'left', boxShadow: '0 10px 25px rgba(15,23,42,.03)' },
  cardTitle: { margin: '0 0 8px', fontSize: 18, fontWeight: 700 },
  cardText: { margin: '0 0 14px', color: '#64748B', fontSize: 14, lineHeight: 1.6 },
  cardPrice: { fontSize: 13, fontWeight: 700, color: BLUE, marginBottom: 14 },
  cardBtn: { width: '100%', background: '#EFF6FF', color: BLUE, border: 'none', padding: 10, borderRadius: 10, fontWeight: 700, cursor: 'pointer', fontSize: 13 },

  categoryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 },
  categoryChip: { background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 16, padding: 18, textAlign: 'left', cursor: 'pointer' },
  categoryLabel: { fontWeight: 700, fontSize: 15, marginBottom: 4 },
  categoryNote: { fontSize: 12, color: '#64748B' },

  trackBox: { display: 'flex', gap: 10, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' },
  trackInput: { flex: 1, minWidth: 200, padding: 12, borderRadius: 12, border: '1px solid #CBD5E1', outline: 'none', fontSize: 14 },
  trackNote: { color: '#94A3B8', fontSize: 12, marginTop: 14 },

  locationGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, textAlign: 'left' },
  locationCard: { background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 16, padding: 20 },
  locationName: { fontWeight: 700, fontSize: 15, marginBottom: 6 },
  locationNote: { fontSize: 13, color: '#64748B' },

  stars: { color: YELLOW, fontSize: 16, marginBottom: 10 },
  testimonialName: { fontWeight: 700, fontSize: 13, color: '#334155' },

  trust: { maxWidth: 1200, margin: '0 20px 50px', padding: '18px 20px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 20, display: 'flex', justifyContent: 'space-around', gap: 12, flexWrap: 'wrap', fontWeight: 700, color: '#334155', fontSize: 'clamp(13px, 3.2vw, 15px)' },

  footer: { background: NAVY, color: '#FFFFFF', padding: '40px 20px 20px' },
  footerCta: { maxWidth: 1200, margin: '0 auto 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', borderBottom: '1px solid #1E293B', paddingBottom: 30 },
  footerCtaTitle: { fontSize: 20, fontWeight: 800, marginBottom: 4 },
  footerCtaText: { color: '#94A3B8', fontSize: 14 },
  footerCtaBtn: { background: BLUE, color: '#FFFFFF', border: 'none', padding: '12px 20px', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontSize: 14, whiteSpace: 'nowrap' },
  footerGrid: { maxWidth: 1200, margin: '0 auto 30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 },
  footerBrand: { fontWeight: 900, fontSize: 22, color: YELLOW, marginBottom: 8 },
  footerHead: { margin: '0 0 8px', fontSize: 16 },
  footerLine: { margin: '4px 0', color: '#94A3B8', fontSize: 14 },
  footerBottom: { maxWidth: 1200, margin: '0 auto', paddingTop: 20, borderTop: '1px solid #1E293B', textAlign: 'center', color: '#64748B', fontSize: 13 },

  whatsapp: { position: 'fixed', bottom: 20, right: 20, background: '#111827', border: '1px solid #1E293B', padding: '10px 14px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#FFFFFF', boxShadow: '0 10px 25px rgba(0,0,0,.25)', zIndex: 1000 },
  whatsappIcon: { width: 32, height: 32, borderRadius: '50%', background: '#052E16', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  whatsappTitle: { fontSize: 12, fontWeight: 800, color: '#25D366', lineHeight: 1 },
  whatsappSub: { fontSize: 10, color: '#94A3B8', marginTop: 2 },

  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15,23,42,.6)', display: 'flex',
