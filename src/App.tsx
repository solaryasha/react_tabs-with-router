import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import { Home } from './components/Home/Home';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
    <Route path="/tabs" component={Tabs} />
  </BrowserRouter>
);

export default App;
