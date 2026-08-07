import React, { useState } from 'react';

export default function App() {
  const [showRepair, setShowRepair] = useState(false);
  const [showSourcing, setShowSourcing] = useState(false);

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.brand}>
          <div style={styles.logo}>Z</div>
          <div>
            <div style={styles.brandName}>ZEENOTECH</div>
            <div style={styles.brandTag}>Properly Sourced. Tested. Delivered.</div>
          </div>
        </div>

        <button style={styles.navBtn}>Request a Service</button>
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

          <div style={styles.ctaGrid}>
            <div style={styles.ctaCardYellow}>
              <div style={styles.iconBoxYellow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Book a Repair</h3>
              <p>Professional diagnostics and verified repairs from intake to delivery.</p>
              <button style={styles.primaryBtn} onClick={() => setShowRepair(true)}>
                Get Started
              </button>
            </div>

            <div style={styles.ctaCardBlue}>
              <div style={styles.iconBoxBlue}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.3 7L12 12l8.7-5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V12" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Request Device Sourcing</h3>
              <p>Properly sourced, tested, and certified devices with transparent pricing.</p>
              <button style={styles.secondaryBtn} onClick={() => setShowSourcing(true)}>
                Request Now
              </button>
            </div>
          </div>
        </div>

        {/* SUBTLE 3D VISUAL */}
        <div style={styles.heroVisual}>
          <div style={styles.visualCircle}>
            <div style={styles.laptop}>
              <div style={styles.screen}>Z</div>
            </div>
            <div style={styles.phone}>Z</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <div style={styles.sectionTag}>WHAT WE DO</div>
        <h2 style={styles.sectionTitle}>Repair, Buy, Upgrade & Swap</h2>
        <p style={styles.sectionText}>
          Everything your device needs — handled through one verified, trusted process.
        </p>

        <div style={styles.grid}>
          <Card
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Repair"
            text="Professional diagnostics and verified repairs — fully documented from intake to delivery."
          />

          <Card
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="7" y="2" width="10" height="20" rx="2" stroke="#2563EB" strokeWidth="2"/>
                <line x1="11" y1="18" x2="13" y2="18" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
            title="Buy"
            text="Properly sourced, tested, and certified devices. Every unit is traceable and verified."
          />

          <Card
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7h10v10" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Upgrade"
            text="Verified upgrade paths with full component testing. Trade up with confidence."
          />

          <Card
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 1l4 4-4 4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 11V9a4 4 0 0 1 4-4h14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 23l-4-4 4-4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 13v2a4 4 0 0 1-4 4H3" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Swap"
            text="Simple, transparent device swaps with fair-value grading and real tracking."
          />
        </div>
      </section>

      {/* TRUST */}
      <section style={styles.trust}>
        <div>🛡️ Trusted Devices</div>
        <div>🔒 Secure Transactions</div>
        <div>👨‍🔧 Expert Support</div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div>
            <div style={styles.footerBrand}>ZEENOTECH</div>
            <p>Your trusted device solutions partner.</p>
          </div>

          <div>
            <h4>Corporate Office</h4>
            <p>The Philippi Centre</p>
            <p>Oluwalogbon House</p>
            <p>Alausa, Ikeja, Lagos</p>
            <p>RC: 9370590</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>support@zeenotech.com.ng</p>
            <p>+234 813 965 0067</p>
          </div>
        </div>

        <div style={styles.footerBottom}>
          © 2026 Zeenotech. All rights reserved.
        </div>
      </footer>

      {/* PREMIUM WHATSAPP */}
      <a
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

function Card({ icon, title, text }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.modalHead}>
          <h3>{title}</h3>
          <button style={styles.close} onClick={onClose}>✕</button>
        </div>
        <div style={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
  page: { fontFamily: 'Inter, system-ui, sans-serif', background: '#F8FAFC', color: '#0F172A' },
  nav: { maxWidth: 1200, margin: '0 auto', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 },
  brand: { display: 'flex', alignItems: 'center', gap: 12 },
  logo: { width: 42, height: 42, borderRadius: 12, background: '#EAB308', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 22 },
  brandName: { fontWeight: 800, fontSize: 22 },
  brandTag: { fontSize: 12, color: '#64748B' },
  navBtn: { background: '#EAB308', border: 'none', padding: '12px 18px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' },

  hero: { maxWidth: 1200, margin: '0 auto', padding: '40px 20px 70px', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 40, alignItems: 'center' },
  badge: { display: 'inline-block', background: '#EFF6FF', color: '#2563EB', padding: '10px 14px', borderRadius: 999, fontSize: 13, fontWeight: 700, marginBottom: 24 },
  title: { fontSize: 'clamp(42px, 7vw, 72px)', lineHeight: 1.04, margin: '0 0 24px', fontWeight: 800 },
  blue: { color: '#2563EB', display: 'block' },
  subtitle: { fontSize: 18, lineHeight: 1.8, color: '#475569', maxWidth: 560, marginBottom: 32 },

  ctaGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 },
  ctaCardYellow: { background: '#FFFBEA', border: '1px solid #FDE68A', borderRadius: 24, padding: 22, boxShadow: '0 10px 30px rgba(234,179,8,.08)' },
  ctaCardBlue: { background: '#FFFFFF', border: '1px solid #DBEAFE', borderRadius: 24, padding: 22, boxShadow: '0 10px 30px rgba(37,99,235,.06)' },
  iconBoxYellow: { width: 48, height: 48, borderRadius: 14, background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  iconBoxBlue: { width: 48, height: 48, borderRadius: 14, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },

  primaryBtn: { width: '100%', background: '#EAB308', border: 'none', padding: 14, borderRadius: 14, fontWeight: 800, cursor: 'pointer', marginTop: 14 },
  secondaryBtn: { width: '100%', background: '#2563EB', color: '#FFFFFF', border: 'none', padding: 14, borderRadius: 14, fontWeight: 800, cursor: 'pointer', marginTop: 14 },

  heroVisual: { display: 'flex', justifyContent: 'center' },
  visualCircle: { width: '100%', maxWidth: 420, aspectRatio: '1/1', borderRadius: '50%', background: 'radial-gradient(circle at 30% 20%, #EFF6FF 0%, #DBEAFE 45%, #F8FAFC 100%)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 80px rgba(37,99,235,.12)' },
  laptop: { width: '72%', aspectRatio: '1.3/1', background: '#111827', borderRadius: 24, padding: 10, transform: 'rotate(-6deg)', boxShadow: '0 20px 50px rgba(15,23,42,.35)' },
  screen: { width: '100%', height: '100%', borderRadius: 16, background: 'linear-gradient(135deg,#0F172A 0%,#1D4ED8 100%)', color: '#EAB308', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 58, fontWeight: 900 },
  phone: { position: 'absolute', left: '8%', bottom: '16%', width: 78, height: 148, borderRadius: 24, background: 'linear-gradient(135deg,#111827 0%,#2563EB 100%)', color: '#EAB308', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, boxShadow: '0 18px 40px rgba(15,23,42,.28)' },

  section: { maxWidth: 1200, margin: '0 auto', padding: '10px 20px 70px', textAlign: 'center' },
  sectionTag: { color: '#2563EB', fontWeight: 800, fontSize: 13, letterSpacing: 1, marginBottom: 12 },
  sectionTitle: { fontSize: 'clamp(30px,5vw,48px)', margin: '0 0 12px' },
  sectionText: { color: '#64748B', maxWidth: 640, margin: '0 auto 40px', lineHeight: 1.7 },

  grid: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 },
  card: { background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 24, padding: 28, textAlign: 'left', boxShadow: '0 10px 30px rgba(15,23,42,.04)' },
  cardIcon: { width: 52, height: 52, borderRadius: 16, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 },

  trust: { maxWidth: 1200, margin: '0 auto 70px', padding: '22px 20px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 24, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', fontWeight: 700, color: '#334155' },

  footer: { background: '#0B132B', color: '#FFFFFF', padding: '48px 20px 24px' },
  footerGrid: { maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 32 },
  footerBrand: { fontSize: 24, fontWeight: 900, marginBottom: 14 },
  footerBottom: { maxWidth: 1200, margin: '28px auto 0', paddingTop: 24, borderTop: '1px solid #253047', textAlign: 'center', color: '#94A3B8' },

  whatsapp: { position: 'fixed', right: 20, bottom: 20, background: '#25D366', color: '#FFFFFF', borderRadius: 999, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', boxShadow: '0 18px 40px rgba(37,211,102,.28)', zIndex: 1000 },
  whatsappIcon: { width: 34, height: 34, borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  whatsappTitle: { fontWeight: 800, fontSize: 14 },
  whatsappSub: { fontSize: 12, opacity: .9 },

  overlay: { position: 'fixed', inset: 0, background: 'rgba(15,23,42,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, zIndex: 2000 },
  modal: { width: '100%', maxWidth: 440, background: '#FFFFFF', borderRadius: 28, overflow: 'hidden', boxShadow: '0 30px 80px rgba(15,23,42,.25)' },
  modalHead: { padding: '20px 24px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  close: { background: 'transparent', border: 'none', fontSize: 22, cursor: 'pointer', color: '#64748B' },
  modalBody: { padding: 24, display: 'flex', flexDirection: 'column', gap: 16 },

  input: { padding: 16, borderRadius: 14, border: '1px solid #CBD5E1', fontSize: 16, outline: 'none' },
  textarea: { padding: 16, borderRadius: 14, border: '1px solid #CBD5E1', fontSize: 16, minHeight: 120, resize: 'vertical', outline: 'none' }
};
