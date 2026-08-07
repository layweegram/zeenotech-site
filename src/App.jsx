import React, { useState } from 'react';

export default function App() {
  const [showRepair, setShowRepair] = useState(false);
  const [showSourcing, setShowSourcing] = useState(false);

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.brand}>
          <img
            src="/logo.png"
            alt="Zeenotech Logo"
            style={styles.logo}
          />

          <div>
            <div style={styles.brandName}>ZEENOTECH</div>
            <div style={styles.brandTag}>Your Trusted Device Solutions</div>
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
            <span style={styles.blue}>
              simple, safe, and completely traceable.
            </span>
          </h1>

          <p style={styles.subtitle}>
            No guesswork. No street-level hassle. Just trusted technicians,
            verified devices, and real status updates from start to finish.
          </p>

          <div style={styles.ctaGrid}>
            <div style={styles.ctaPrimary}>
              <div style={styles.iconPrimary}>🛠️</div>

              <h3 style={styles.cardTitle}>Book a Repair</h3>

              <p style={styles.cardText}>
                Fast, reliable, and professionally documented repairs from
                intake to delivery.
              </p>

              <button
                style={styles.primaryBtn}
                onClick={() => setShowRepair(true)}
              >
                Get Started →
              </button>
            </div>

            <div style={styles.ctaSecondary}>
              <div style={styles.iconSecondary}>📦</div>

              <h3 style={styles.cardTitle}>Request Device Sourcing</h3>

              <p style={styles.cardText}>
                Verified devices, transparent pricing, and secure delivery.
              </p>

              <button
                style={styles.secondaryBtn}
                onClick={() => setShowSourcing(true)}
              >
                Request Now →
              </button>
            </div>
          </div>

          <div style={styles.trustRow}>
            <span>🔒 Secure</span>
            <span>•</span>
            <span>Transparent</span>
            <span>•</span>
            <span>Professional</span>
          </div>
        </div>

        {/* SUBTLE 3D VISUAL */}
        <div style={styles.heroVisual}>
          <div style={styles.visualCircle}>
            <div style={styles.laptop}>
              <div style={styles.screen}>
                <img
                  src="/logo.png"
                  alt="Zeenotech"
                  style={styles.screenLogo}
                />
              </div>
            </div>

            <div style={styles.phone}>
              <img
                src="/logo.png"
                alt="Zeenotech"
                style={styles.phoneLogo}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <div style={styles.sectionTag}>WHAT WE DO</div>

        <h2 style={styles.sectionTitle}>Repair, Buy, Upgrade & Swap</h2>

        <p style={styles.sectionText}>
          Everything your device needs — handled through one verified,
          trusted process.
        </p>

        <div style={styles.grid}>
          <ServiceCard
            title="Repair"
            text="Professional diagnostics and verified repairs — fully documented from intake to delivery."
          />

          <ServiceCard
            title="Buy"
            text="Properly sourced, tested, and certified devices. Every unit is traceable and verified."
          />

          <ServiceCard
            title="Upgrade"
            text="Verified upgrade paths with full component testing. Trade up with confidence."
          />

          <ServiceCard
            title="Swap"
            text="Simple, transparent device swaps with fair-value grading and real tracking."
          />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, text }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>🔧</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Inter, system-ui, sans-serif',
    background: '#F8FAFC',
    color: '#0F172A',
  },

  nav: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '18px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },

  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },

  logo: {
    width: 48,
    height: 48,
    objectFit: 'contain',
  },

  brandName: {
    fontWeight: 800,
    fontSize: 22,
    letterSpacing: 0.2,
  },

  brandTag: {
    fontSize: 12,
    color: '#64748B',
  },

  navBtn: {
    background: '#EAB308',
    border: 'none',
    padding: '12px 18px',
    borderRadius: 12,
    fontWeight: 700,
    cursor: 'pointer',
    color: '#0F172A',
  },

  hero: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '40px 20px 70px',
    display: 'grid',
    gridTemplateColumns: '1.05fr .95fr',
    gap: 40,
    alignItems: 'center',
  },

  badge: {
    display: 'inline-block',
    background: '#EFF6FF',
    color: '#2563EB',
    padding: '10px 14px',
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 24,
  },

  title: {
    fontSize: 'clamp(42px, 7vw, 72px)',
    lineHeight: 1.04,
    margin: '0 0 24px',
    fontWeight: 800,
  },

  blue: {
    color: '#2563EB',
    display: 'block',
  },

  subtitle: {
    fontSize: 18,
    lineHeight: 1.8,
    color: '#475569',
    maxWidth: 560,
    marginBottom: 32,
  },

  ctaGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 18,
  },

  ctaPrimary: {
    background: '#FFFBEA',
    border: '1px solid #FDE68A',
    borderRadius: 24,
    padding: 24,
    boxShadow: '0 10px 30px rgba(234,179,8,.08)',
  },

  ctaSecondary: {
    background: '#FFFFFF',
    border: '1px solid #DBEAFE',
    borderRadius: 24,
    padding: 24,
    boxShadow: '0 10px 30px rgba(37,99,235,.06)',
  },

  iconPrimary: {
    width: 52,
    height: 52,
    borderRadius: 16,
    background: '#FEF3C7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    marginBottom: 18,
  },

  iconSecondary: {
    width: 52,
    height: 52,
    borderRadius: 16,
    background: '#EFF6FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    marginBottom: 18,
  },

  cardTitle: {
    margin: '0 0 10px',
    fontSize: 20,
  },

  cardText: {
    color: '#475569',
    lineHeight: 1.7,
    marginBottom: 18,
  },

  primaryBtn: {
    width: '100%',
    background: '#EAB308',
    border: 'none',
    padding: 14,
    borderRadius: 14,
    fontWeight: 800,
    cursor: 'pointer',
    color: '#0F172A',
  },

  secondaryBtn: {
    width: '100%',
    background: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
    padding: 14,
    borderRadius: 14,
    fontWeight: 800,
    cursor: 'pointer',
  },

  trustRow: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap',
    color: '#64748B',
    fontWeight: 600,
    marginTop: 20,
  },

  heroVisual: {
    display: 'flex',
    justifyContent: 'center',
  },

  visualCircle: {
    width: '100%',
    maxWidth: 430,
    aspectRatio: '1/1',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 30% 20%, #EFF6FF 0%, #DBEAFE 45%, #F8FAFC 100%)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 30px 80px rgba(37,99,235,.12)',
  },

  laptop: {
    width: '72%',
    aspectRatio: '1.3/1',
    background: '#111827',
    borderRadius: 24,
    padding: 10,
    transform: 'rotate(-6deg)',
    boxShadow: '0 20px 50px rgba(15,23,42,.35)',
  },

  screen: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    background: 'linear-gradient(135deg,#0F172A 0%,#1D4ED8 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  screenLogo: {
    width: '48%',
    objectFit: 'contain',
    filter: 'brightness(0) saturate(100%) invert(79%) sepia(74%) saturate(1352%) hue-rotate(357deg) brightness(96%) contrast(90%)',
  },

  phone: {
    position: 'absolute',
    left: '8%',
    bottom: '16%',
    width: 82,
    height: 152,
    borderRadius: 24,
    background: 'linear-gradient(135deg,#111827 0%,#2563EB 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 18px 40px rgba(15,23,42,.28)',
  },

  phoneLogo: {
    width: '54%',
    objectFit: 'contain',
    filter: 'brightness(0) saturate(100%) invert(79%) sepia(74%) saturate(1352%) hue-rotate(357deg) brightness(96%) contrast(90%)',
  },

  section: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '10px 20px 70px',
    textAlign: 'center',
  },

  sectionTag: {
    color: '#2563EB',
    fontWeight: 800,
    fontSize: 13,
    letterSpacing: 1,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 'clamp(30px,5vw,48px)',
    margin: '0 0 12px',
  },

  sectionText: {
    color: '#64748B',
    maxWidth: 640,
    margin: '0 auto 40px',
    lineHeight: 1.7,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
    gap: 22,
  },

  card: {
    background: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderRadius: 24,
    padding: 28,
    textAlign: 'left',
    boxShadow: '0 10px 30px rgba(15,23,42,.04)',
  },

  cardIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    background: '#EFF6FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    fontSize: 24,
  },
};
