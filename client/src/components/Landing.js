import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';

import { Title, Description, StyledLink } from '../styles/Landing';

export default () => {
  return (
    <div>
      <Navigation landing />
      <div className="container center-align">
        <Title>Keepr</Title>
        <Description>The App For Keeping All Your Notes</Description>
        <StyledLink to="/signin">Sign In To Keepr</StyledLink>
        <StyledLink to="/signup">Sign Up For Free</StyledLink>
      </div>
      <Footer />
    </div>
  );
};
