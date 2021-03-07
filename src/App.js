
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Anime from './pages/anime';
import AnimeInfo from './pages/anime-info';

function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={Anime} />
        <Route path='/anime-info/:id' component={AnimeInfo} />
      </Router>
    </>
  )
}

export default App;
