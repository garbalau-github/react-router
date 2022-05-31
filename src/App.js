import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Error } from './pages/Error';
import { Products } from './pages/Products';
import { ProductList } from './pages/ProductList';

import './App.css';

const App = () => {
  const profiles = [
    {
      username: 'Jessica',
    },
    {
      username: 'Michael',
    },
  ];

  return (
    <div className='App'>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/products'>Products</Link>
          {profiles.map((profile, idx) => {
            return (
              <Link key={idx} to={`/profile/${profile.username}`}>
                <span>{profile.username}'s Profile</span>
              </Link>
            );
          })}
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/products' element={<Products />}>
            <Route path='/products/list' element={<ProductList />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
        <footer>Footer</footer>
      </Router>
    </div>
  );
};

export default App;
