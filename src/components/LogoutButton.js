// src/components/LogoutButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './../assets/css/LogoutButton.scss';

const LogoutButton = ({ handleLogout }) => {
  return (
    <div className="logout-button-container" onClick={handleLogout}>
      <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
      <span className="tooltip">Logout</span>
    </div>
  );
};

export default LogoutButton;
