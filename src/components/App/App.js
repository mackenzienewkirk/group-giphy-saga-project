import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import GifFeed from '../GifFeed/GifFeed';
import FavoritesFeed from '../FavoritesFeed/FavoritesFeed';


function App() {

  return (
    <Router>
   <div className='App'>
     <nav>
          <Link to="/favorites">Favorites</Link>
          <div></div>
          <Link to="/">Trending</Link>
        </nav>
      <header className='App-header'>
        <h1 className='App-title'>Trending</h1>
      </header>
        <Route exact path="/">
            <GifFeed/>
        </Route>

        <Route exact path="/favorites">
            <FavoritesFeed />
        </Route>

    </div>
</Router>
  );
}

export default App;