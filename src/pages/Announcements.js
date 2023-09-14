import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState({
    a_title: '',
    a_body: '',
  });

  // Function to fetch announcements from the backend
  const fetchAnnouncements = () => {
    axios
      .get('/api/announcements')
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error('Error fetching announcements:', error);
      });
  };

  // Function to handle form submission for creating a new announcement
  const handleCreateAnnouncement = (e) => {
    e.preventDefault();
    axios
      .post('/api/announcements', newAnnouncement)
      .then((response) => {
        // Clear the form and update the list of announcements
        setNewAnnouncement({ a_title: '', a_body: '' });
        fetchAnnouncements();
      })
      .catch((error) => {
        console.error('Error creating announcement:', error);
      });
  };

  useEffect(() => {
    // Fetch announcements when the component mounts
    fetchAnnouncements();
  }, []);

  return (
    <div>
      <h1>Announcements</h1>

      {/* Form for creating a new announcement */}
      <form onSubmit={handleCreateAnnouncement}>
        <div>
          <label htmlFor="a_title">Title:</label>
          <input
            type="text"
            id="a_title"
            value={newAnnouncement.a_title}
            onChange={(e) =>
              setNewAnnouncement({ ...newAnnouncement, a_title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="a_body">Body:</label>
          <textarea
            id="a_body"
            value={newAnnouncement.a_body}
            onChange={(e) =>
              setNewAnnouncement({ ...newAnnouncement, a_body: e.target.value })
            }
          />
        </div>
        <div>
          <button type="submit">Create Announcement</button>
        </div>
      </form>

      {/* List of announcements */}
      <div>
        <h2>Announcement List</h2>
        <ul>
          {announcements.map((announcement) => (
            <li key={announcement._id}>
              <h3>{announcement.a_title}</h3>
              <p>{announcement.a_body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Announcements;
