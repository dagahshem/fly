import React from 'react';

import {  Footer, Header, gallary, } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <gallary />
    <Footer />
  </div>
);

export default App;
