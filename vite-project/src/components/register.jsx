import { useState } from 'react';

export default function StudentEventRegistration() {
  const [formData, setFormData] = useState({
    studentName: '',
    emailAddress: '',
    department: '',
    yearOfStudy: '',
    password: '',
    attendanceMode: 'In person',
    chooseEvent: '',
    accessibilitySupport: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      emailAddress: '',
      department: '',
      yearOfStudy: '',
      password: '',
      attendanceMode: 'In person',
      chooseEvent: '',
      accessibilitySupport: false,
      message: ''
    });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '32px', fontFamily: 'sans-serif', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#6b7280', fontWeight: '600', marginBottom: '8px' }}>
        Save Your Seat
      </div>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
        Student Event Registration
      </h2>
      <p style={{ color: '#4b5563', marginBottom: '24px' }}>
        Complete the required fields to register for a campus event
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
              Student name <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
              Email address <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="student@example.com"
              required
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
              Department <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
            >
              <option value="">Select your department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Business Administration">Business Administration</option>
              <option value="Arts & Humanities">Arts & Humanities</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
              Year of study
            </label>
            <input
              type="text"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              placeholder="Example: 2"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
              Create a demo password (optional)
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password input example"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}
            />
            <span style={{ display: 'block', fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
              This is a teaching example only, no password is saved or sent
            </span>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
              How will you attend?
            </label>
            <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#374151', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="attendanceMode"
                  value="In person"
                  checked={formData.attendanceMode === 'In person'}
                  onChange={handleChange}
                  style={{ marginRight: '6px' }}
                />
                In person
              </label>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#374151', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="attendanceMode"
                  value="Online"
                  checked={formData.attendanceMode === 'Online'}
                  onChange={handleChange}
                  style={{ marginRight: '6px' }}
                />
                Online
              </label>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
            Choose an event <span style={{ color: '#dc2626' }}>*</span>
          </label>
          <select
            name="chooseEvent"
            value={formData.chooseEvent}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
          >
            <option value="">Select a campus event</option>
            <option value="Tech Fest 2026">Tech Fest 2026</option>
            <option value="Cultural Day">Cultural Day</option>
            <option value="Sports Meet">Sports Meet</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#374151', cursor: 'pointer' }}>
            <input
              type="checkbox"
              name="accessibilitySupport"
              checked={formData.accessibilitySupport}
              onChange={handleChange}
              style={{ marginRight: '8px' }}
            />
            I would like the team to contact me about accessibility support.
          </label>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
            Message (optional)
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any questions or notes for the event team?"
            style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            type="submit"
            style={{ backgroundColor: '#1d4ed8', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
          >
            Submit Registration
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{ backgroundColor: '#f3f4f6', color: '#374151', padding: '10px 20px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
          >
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
}