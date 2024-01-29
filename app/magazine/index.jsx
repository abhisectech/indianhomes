// /app/magazine/index.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MagazinePage from './page';
import PostDetails from './postDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/magazine" component={MagazinePage} />
        <Route path="/magazine/post/:postId" component={PostDetails} />
      </Switch>
    </Router>
  );
};

export default App;
