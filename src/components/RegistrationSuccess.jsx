import React from 'react';
import './RegistrationSuccess.css';

function RegistrationSuccess({ event, onClose }) {
  return (
    <div className="success-overlay">
      <div className="success-modal">
        <div className="success-content">
          <div className="success-icon">✓</div>
          <h2>Registration Successful!</h2>
          <div className="success-details">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
          <div className="success-message">
            <p>Thank you for registering! A confirmation email has been sent to your email address.</p>
            <p className="reminder">Please arrive 15 minutes before the event starts.</p>
          </div>
          <div className="success-actions">
            <button className="close-button" onClick={onClose}>
              Close
            </button>
            <button className="calendar-button" onClick={() => {
              // Add to calendar functionality would go here
              alert('Calendar integration coming soon!');
            }}>
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccess; 