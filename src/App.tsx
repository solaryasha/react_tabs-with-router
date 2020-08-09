import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './App.css';
import { Home } from './components/Home/Home';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <>
    <NavLink to="/">
      Home
    </NavLink>
    <NavLink to="/tabs">
      Tabs
    </NavLink>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/tabs/:tabId?"
        render={(routeProps) => (
          <Tabs tabs={tabs} currentTabId="tab-2" routeProps={routeProps} />
        )}
      />
    </Switch>
  </>
);

export default App;
