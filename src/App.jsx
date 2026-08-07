import React, { useState, useRef } from 'react';

export default function App() {
  const [service, setService] = useState('Repair');

  const formRef = useRef(null); 
  const scrollToForm = (type) => { 
    setService(type); 
    setTimeout(() => { 
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }, 50); 
  };

  return (
    <div style={styles.container}>
      {/* Header / Hero Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>ZEENOTECH</h1>
        <p style={styles.subtitle}>Properly Sourced. Tested. Delivered.</p>
        <div style={styles.heroBtnGroup}>
          <button style={styles.primaryBtn} onClick={() => scrollToForm('Repair')}>
            ⚡ Book a Repair
          </button>
          <button style={styles.secondaryBtn} onClick={() => scrollToForm('Sourcing')}>
            📦 Request Device Sourcing
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <ServiceCard title="Repair" text="Professional diagnostic and hardware repair services." />
        <ServiceCard title="Buy" text="Quality-tested, certified devices ready for deployment." />
        <ServiceCard title="Upgrade" text="Seamless system and component upgrades." />
        <ServiceCard title="Swap" text="Trade in your old device towards an upgrade." />
      </section>

      {/* Form Section */}
      <section ref={formRef} style={styles.formSection}>
        <h2>Request Service ({service})</h2>
        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" style={styles.input} required />
          <input type="email" placeholder="Email Address" style={styles.input} required />
          <input type="tel" placeholder="Phone Number" style={styles.input} required />
          <textarea placeholder="Describe your issue or request..." style={styles.textarea} rows={4} required></textarea>
          <button type="submit" style={styles.submitBtn}>Submit Request</button>
        </form>
      </section>

      {/* Corporate Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLogo}>⚡</div>
        <h3 style={{ margin: 0, letterSpacing: 1 }}>ZEENOTECH</h3>
        <p style={{ color: '#EAB308', fontWeight: 700, marginTop: 8 }}>
          Properly Sourced. Tested. Delivered.
        </p>
        <div style={styles.footerLine} />
        <div style={{ lineHeight: 1.8 }}>
          <p style={{ color: '#FFFFFF', fontWeight: 700 }}>Corporate Office</p>
          <p style={{ color: '#CBD5E1' }}>The Philippi Centre, Oluwalogbon House</p>
          <p style={{ color: '#CBD5E1' }}>Alausa, Ikeja, Lagos</p>
          <p style={{ color: '#CBD5E1' }}>RC: 9370590</p>
        </div>
        <div style={styles.footerLine} />
        <p style={{ color: '#94A3B8', fontSize: 14 }}>
          © 2026 Zeenotech · RC: 9370590
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/234XXXXXXXXXX?text=Hello%20Zeenotech,%20I%20need%20help%20with%20my%20device." 
        target="_blank" 
        rel="noreferrer" 
        style={styles.whatsappBtn}
      >
        💬
      </a>
    </div>
  );
}

function ServiceCard({ title, text }) {
  const icons = {
    Repair: '🛠️',
    Buy: '📱',
    Upgrade: '⬆️',
    Swap: '🔄',
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>{icons[title]}</div>
      <h3 style={{ marginTop: 16 }}>{title}</h3>
      <p style={{ color: '#475569', lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#0F172A',
    backgroundColor: '#F8FAFC',
    minHeight: '100vh',
    position: 'relative',
  },
  header: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#0F172A',
    color: '#FFFFFF',
  },
  title: {
    fontSize: '36px',
    margin: 0,
    letterSpacing: '2px',
  },
  subtitle: {
    color: '#EAB308',
    fontSize: '18px',
    marginTop: '10px',
  },
  heroBtnGroup: {
    marginTop: '30px',
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: '#EAB308',
    color: '#0F172A',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    border: '2px solid #334155',
    padding: '12px 24px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
  },
  servicesSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    padding: '40px 20px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
  },
  cardIcon: {
    fontSize: '32px',
  },
  formSection: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px 20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #CBD5E1',
    fontSize: '14px',
  },
  textarea: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #CBD5E1',
    fontSize: '14px',
  },
  submitBtn: {
    backgroundColor: '#0F172A',
    color: '#FFFFFF',
    border: 'none',
    padding: '14px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#0F172A',
    color: '#FFFFFF',
    padding: '40px 20px',
    textAlign: 'center',
  },
  footerLogo: {
    fontSize: '28px',
    marginBottom: '10px',
  },
  footerLine: {
    height: '1px',
    backgroundColor: '#1E293B',
    margin: '20px auto',
    maxWidth: '400px',
  },
  whatsappBtn: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: '50%',
    background: '#25D366',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    textDecoration: 'none',
    boxShadow: '0 8px 20px rgba(37, 211, 102, 0.35)',
    zIndex: 1000,
  },
};
