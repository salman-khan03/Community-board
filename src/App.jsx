import { useState } from 'react'
import './App.css'
import Registration from './components/Registration'

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events] = useState([
    {
      id: 1,
      title: "Community Garden Workshop",
      date: "March 15, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Central Park Community Garden",
      description: "Learn about sustainable gardening practices and get hands-on experience.",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80",
      capacity: 20,
      ageRequirement: "All ages welcome",
      additionalInfo: "Bring your own gardening gloves and water bottle. Tools will be provided.",
      organizer: "Green Thumb Community Group"
    },
    {
      id: 2,
      title: "Local Art Exhibition",
      date: "March 20, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "Community Arts Center",
      description: "Showcasing works from local artists. Free admission.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=80",
      capacity: 100,
      ageRequirement: "All ages welcome",
      additionalInfo: "Art pieces available for purchase. Refreshments provided.",
      organizer: "Downtown Arts Collective"
    },
    {
      id: 3,
      title: "Neighborhood Clean-up Day",
      date: "March 25, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Various locations",
      description: "Join us in keeping our community clean and beautiful.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format&fit=crop&q=80",
      capacity: 50,
      ageRequirement: "Ages 12+ (minors must be accompanied by an adult)",
      additionalInfo: "Gloves, bags, and safety vests provided. Wear comfortable shoes.",
      organizer: "Community Improvement Committee"
    },
    {
      id: 4,
      title: "Youth Sports Tournament",
      date: "April 1, 2024",
      time: "11:00 AM - 4:00 PM",
      location: "Community Sports Complex",
      description: "Annual youth sports tournament for ages 8-14.",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&auto=format&fit=crop&q=80",
      capacity: 80,
      ageRequirement: "Ages 8-14",
      additionalInfo: "Registration required. Bring your own sports equipment. Trophies for winners.",
      organizer: "Youth Sports Association"
    },
    {
      id: 5,
      title: "Community Book Club",
      date: "April 5, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Public Library",
      description: "Monthly book discussion. This month: 'The Great Gatsby'",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=80",
      capacity: 30,
      ageRequirement: "Ages 16+",
      additionalInfo: "Copies available at the library. Light refreshments provided.",
      organizer: "Friends of the Library"
    },
    {
      id: 6,
      title: "Local Farmers Market",
      date: "Every Saturday",
      time: "8:00 AM - 2:00 PM",
      location: "Downtown Square",
      description: "Fresh local produce and handmade goods.",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&auto=format&fit=crop&q=80",
      capacity: "Open to public",
      ageRequirement: "All ages welcome",
      additionalInfo: "Over 30 local vendors. Accepts cash and credit cards. Bring reusable bags.",
      organizer: "Local Farmers Association"
    },
    {
      id: 7,
      title: "Tech Workshop for Seniors",
      date: "April 10, 2024",
      time: "1:00 PM - 3:00 PM",
      location: "Community Center",
      description: "Learn to use smartphones and tablets effectively.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&auto=format&fit=crop&q=80",
      capacity: 15,
      ageRequirement: "Ages 60+",
      additionalInfo: "Bring your own device. Basic computer knowledge required.",
      organizer: "Senior Tech Support Group"
    },
    {
      id: 8,
      title: "Community Theater Production",
      date: "April 15-20, 2024",
      time: "7:00 PM - 9:30 PM",
      location: "Community Theater",
      description: "Local production of 'Our Town'",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=80",
      capacity: 200,
      ageRequirement: "All ages welcome",
      additionalInfo: "Tickets available online and at the door. Concessions available.",
      organizer: "Community Theater Group"
    },
    {
      id: 9,
      title: "Health & Wellness Fair",
      date: "April 25, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center",
      description: "Free health screenings and wellness workshops.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      capacity: 150,
      ageRequirement: "All ages welcome",
      additionalInfo: "Free health screenings, fitness demonstrations, and healthy cooking classes.",
      organizer: "Community Health Initiative"
    },
    {
      id: 10,
      title: "Music in the Park",
      date: "May 1, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Central Park Amphitheater",
      description: "Live music featuring local bands.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=80",
      capacity: 500,
      ageRequirement: "All ages welcome",
      additionalInfo: "Bring blankets or chairs. Food vendors available. No alcohol permitted.",
      organizer: "Parks & Recreation Department"
    }
  ]);

  const handleRegister = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseRegistration = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Community Events & Resources</h1>
        <p>Stay connected with your local community</p>
      </header>
      
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image-container">
              <img 
                src={event.image} 
                alt={event.title}
                className="event-image"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80";
                }}
              />
            </div>
            <h2>{event.title}</h2>
            <div className="event-details">
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Organizer:</strong> {event.organizer}</p>
              <p><strong>Capacity:</strong> {event.capacity}</p>
              <p><strong>Age Requirement:</strong> {event.ageRequirement}</p>
              <p>{event.description}</p>
              <p className="additional-info"><strong>Additional Information:</strong> {event.additionalInfo}</p>
            </div>
            <button 
              className="register-button"
              onClick={() => handleRegister(event)}
            >
              Register Now
            </button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <Registration 
          event={selectedEvent} 
          onClose={handleCloseRegistration}
        />
      )}
    </div>
  )
}

export default App
