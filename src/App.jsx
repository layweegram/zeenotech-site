import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('repair');

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceDetails: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form payload ready for backend:', {
      service: activeTab,
      ...formData
    });
    alert('Form submitted! Backend integration comes next once live.');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* COMPANY OVERVIEW */}
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1>Our Company</h1>
        <p><strong>Mission:</strong> Providing high-quality device repair, sourcing, and technician operations.</p>
        <p><strong>Goal:</strong> Delivering seamless operations and unmatched service reliability.</p>
      </header>

      {/* SERVICE NAVIGATION TABS */}
      <section>
        <h2>Services</h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {['repair', 'sourcing', 'technician', 'supplier'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 20px',
                backgroundColor: activeTab === tab ? '#111827' : '#E5E7EB',
                color: activeTab === tab ? '#FFF' : '#000',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* SERVICE FORM CONTAINER */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3>Request {activeTab.toUpperCase()} Service</h3>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name *"
            required
            value={formData.fullName}
            onChange={handleChange}
            style={{ padding: '10px' }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '10px' }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone / WhatsApp Number *"
            required
            value={formData.phone}
            onChange={handleChange}
            style={{ padding: '10px' }}
          />

          <textarea
            name="serviceDetails"
            placeholder={`Specify details for ${activeTab}...`}
            rows="4"
            value={formData.serviceDetails}
            onChange={handleChange}
            style={{ padding: '10px' }}
          />

          <button
            type="submit"
            style={{
              padding: '12px',
              backgroundColor: '#EAB308',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
