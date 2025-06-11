import { useState } from 'react';
import './Registration.css';
import RegistrationSuccess from './RegistrationSuccess';

function Registration({ event, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: '1',
    comments: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Show success page
    setShowSuccess(true);
  };

  if (showSuccess) {
    return <RegistrationSuccess event={event} onClose={onClose} />;
  }

  return (
    <div className="registration-overlay">
      <div className="registration-modal">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="registration-header">
          <h2>Register for {event.title}</h2>
          <div className="event-details">
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="attendees">Number of Attendees *</label>
            <select
              id="attendees"
              name="attendees"
              value={formData.attendees}
              onChange={handleChange}
              required
            >
              {[...Array(5)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? 'person' : 'people'}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="comments">Additional Comments</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Any special requirements or questions?"
              rows="4"
            />
          </div>

          <button type="submit" className="submit-button">
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration; 