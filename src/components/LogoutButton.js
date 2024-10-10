// src/components/LogoutButton.js
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './../assets/css/LogoutButton.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const LogoutButton = () => {
  const [setUser] = useState(null);


  const handleLogout = async () => {

    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  return (
    <div className="logout-button-container" onClick={handleLogout}>
      <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
      <span className="tooltip">Logout</span>
    </div>
  );
};

export default LogoutButton;
