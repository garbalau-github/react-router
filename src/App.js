import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Error } from './pages/Error';
import { Products } from './pages/Products';
import { ProductList } from './pages/ProductList';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
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
        <footer className='Footer'>React Router v6</footer>
      </Router>
    </div>
  );
};

export default App;
