import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import album from './pages/album';
import favorites from './pages/favorites';
import login from './pages/login';
import search from './pages/search';
import profile from './pages/profile';
import profileEdit from './pages/profileEdit';
import notFound from './pages/notFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Route path="/" component={ login } />
      <Route path="/search" component={ search } />
      <Route path="/album/:id" component={ album } />
      <Route path="/favorites" component={ favorites } />
      <Route path="/profile" component={ profile } />
      <Route path="/profile/edit" component={ profileEdit } />
      <Route path="" component={ notFound } />
      </BrowserRouter>
    );
  }
}

export default App;
