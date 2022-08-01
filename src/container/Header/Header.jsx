import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="C-stemp Innovation" />
      <h1 className="app__header-h1">Discover Your Place in The 21th Century Technology</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Where You Learn: How To explore The profitable Oppotunities In The 21th Century Technology in Education, Business, Socialisaation etc</p>
      <button type="button" className="custom__button"> Learn more</button>
    </div>

  </div>
);

export default Header;
