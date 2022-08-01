import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    {/* <img src={images.spoon} alt="image_image" className="image__img" /> */}
  </div>
);

export default SubHeading;
