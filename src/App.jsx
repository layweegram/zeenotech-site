import React, { useState } from 'react';

export default function App() {
  const [service, setService] = useState('Repair');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      service,
      ...formData,
    });

    alert('Request submitted successfully!');
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          We make buying, selling, and repairing your devices
          <span style={styles.blue}> simple, safe, and completely traceable.</span>
        </h1>

        <p style={styles.heroText}>
          No guesswork. No street-level hassle. Just trusted technicians,
          verified devices, and real status updates from start to finish.
        </p>

        <div style={styles.badge}>
          YOUR TRUSTED DEVICE SOLUTIONS • PROPERLY SOURCED. TESTED. DELIVERED.
        </div>

        <div style={styles.ctaRow}>
          <button style={styles.primaryBtn}>⚡ Book a Repair</button>
          <button style={styles.secondaryBtn}>📦 Request Device Sourcing</button>
        </div>
      </section>

      <section style={styles.services}>
        <h2 style={styles.sectionTitle}>Repair, Buy, Upgrade & Swap</h2>
        <p style={styles.sectionText}>
          Everything your device needs — handled through one verified,
          trusted process.
        </p>

        <div style={styles.cardGrid}>
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

      <section style={styles.formSection}>
        <div style={styles.formCard}>
          <h2 style={styles.sectionTitle}>Request a Service</h2>

          <div style={styles.tabRow}>
            {['Repair', 'Sourcing'].map((item) => (
              <button
                key={item}
                onClick={() => setService(item)}
                style={{
                  ...styles.tabBtn,
                  ...(service === item ? styles.activeTab : {}),
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              required
              value={formData.fullName}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone / WhatsApp Number *"
              required
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />

            <textarea
              name="details"
              rows={5}
              placeholder={`Describe your ${service.toLowerCase()} request...`}
              value={formData.details}
              onChange={handleChange}
              style={styles.textarea}
            />

            <button type="submit" style={styles.submitBtn}>
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerLogo}>⚙️</div>
        <h3 style={{ margin: 0 }}>Zeenotech</h3>
        <p style={{ color: '#CBD5E1' }}>Your Trusted Device Solutions Partner</p>
        <p style={{ color: '#CBD5E1' }}>📍 Lagos, Nigeria</p>
        <div style={styles.footerLine} />
        <p style={{ color: '#94A3B8', fontSize: 14 }}>
          © 2026 Zeenotech. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function ServiceCard({ title, text }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>🔧</div>
      <h3 style={{ marginTop: 16 }}>{title}</h3>
      <p style={{ color: '#475569', lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Inter, Arial, sans-serif',
    background: '#F8FAFC',
    color: '#0F172A',
  },

  hero: {
    maxWidth: 900,
    margin: '0 auto',
    padding: '80px 20px 60px',
    textAlign: 'center',
  },

  heroTitle: {
    fontSize: 'clamp(36px, 6vw, 64px)',
    lineHeight: 1.1,
    marginBottom: 24,
    fontWeight: 800,
  },

  blue: {
    color: '#2563EB',
    display: 'block',
  },

  heroText: {
    maxWidth: 720,
    margin: '0 auto 24px',
    color: '#475569',
    fontSize: 18,
    lineHeight: 1.7,
  },

  badge: {
    display: 'inline-block',
    padding: '10px 18px',
    borderRadius: 999,
    background: '#E2E8F0',
    color: '#334155',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0.6,
    marginBottom: 28,
  },

  ctaRow: {
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  primaryBtn: {
    background: '#EAB308',
    color: '#111827',
    border: 'none',
    padding: '16px 24px',
    borderRadius: 14,
    fontWeight: 700,
    cursor: 'pointer',
    fontSize: 16,
  },

  secondaryBtn: {
    background: '#FFFFFF',
    color: '#111827',
    border: '1px solid #CBD5E1',
    padding: '16px 24px',
    borderRadius: 14,
    fontWeight: 700,
    cursor: 'pointer',
    fontSize: 16,
  },

  services: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '40px 20px 60px',
  },

  sectionTitle: {
    textAlign: 'center',
    fontSize: 36,
    marginBottom: 12,
  },

  sectionText: {
    textAlign: 'center',
    color: '#475569',
    marginBottom: 36,
    fontSize: 16,
  },

  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 24,
  },

  card: {
    background: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderRadius: 20,
    padding: 28,
    boxShadow: '0 4px 12px rgba(15,23,42,0.04)',
  },

  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    background: '#DBEAFE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },

  formSection: {
    maxWidth: 760,
    margin: '0 auto',
    padding: '20px 20px 80px',
  },

  formCard: {
    background: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderRadius: 24,
    padding: 32,
    boxShadow: '0 8px 24px rgba(15,23,42,0.06)',
  },

  tabRow: {
    display: 'flex',
    gap: 12,
    marginBottom: 24,
  },

  tabBtn: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    border: '1px solid #CBD5E1',
    background: '#FFFFFF',
    cursor: 'pointer',
    fontWeight: 700,
  },

  activeTab: {
    background: '#111827',
    color: '#FFFFFF',
    borderColor: '#111827',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },

  input: {
    padding: 16,
    borderRadius: 12,
    border: '1px solid #CBD5E1',
    fontSize: 16,
  },

  textarea: {
    padding: 16,
    borderRadius: 12,
    border: '1px solid #CBD5E1',
    fontSize: 16,
    resize: 'vertical',
  },

  submitBtn: {
    background: '#EAB308',
    color: '#111827',
    border: 'none',
    padding: 16,
    borderRadius: 14,
    fontWeight: 800,
    cursor: 'pointer',
    fontSize: 16,
  },

  footer: {
    background: '#0B132B',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '56px 20px',
  },

  footerLogo: {
    width: 72,
    height: 72,
    borderRadius: '50%',
    background: '#111827',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    fontSize: 32,
  },

  footerLine: {
    height: 1,
    background: '#253047',
    maxWidth: 720,
    margin: '28px auto',
  },
};
