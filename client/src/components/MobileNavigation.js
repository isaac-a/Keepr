import React from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';

const removeSideNavOverlay = () => {
  const overlayArr = document.querySelectorAll('.sidenav-overlay');
  for (let i = 0; i < overlayArr.length; i++) {
    overlayArr[i].parentElement.removeChild(overlayArr[i]);
  }
};

export default ({ editor, signOutUser }) => (
  <ul id="slide-out" className="sidenav">
    {editor && (
      <li>
        <Link to="/notes" onClick={removeSideNavOverlay}>
          <MaterialIcon icon="note" /> Notes
        </Link>
      </li>
    )}
    <li>
      <Link
        to="/"
        onClick={() => {
          removeSideNavOverlay();
          signOutUser();
        }}
      >
        <MaterialIcon icon="account_box" /> Sign Out
      </Link>
    </li>
  </ul>
);
