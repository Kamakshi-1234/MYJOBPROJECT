import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../store/usersSlice';

const MyApplications = () => {
  // Get the current user from Redux state
  const currentUser = useSelector(selectUsers).currentUser;
  
  // State to store user's applications
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch the user's applications from the backend or Firebase Firestore
    // Example: fetchApplications(currentUser.email);
    // Update applications state with fetched data
    // setApplications(fetchedApplications);
    // For demo purposes, let's assume applications are fetched from an API
    const fetchedApplications = [
      { id: 1, jobTitle: 'Software Engineer', company: 'ABC Inc.' },
      { id: 2, jobTitle: 'Data Analyst', company: 'XYZ Corp.' }
    ];
    setApplications(fetchedApplications);
  }, [currentUser]); // Fetch applications whenever currentUser changes

  return (
    <div>
      <h1>My Applications</h1>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <ul>
          {applications.map(application => (
            <li key={application.id}>
              <h3>{application.jobTitle}</h3>
              <p>{application.company}</p>
              {/* Add additional details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyApplications;
