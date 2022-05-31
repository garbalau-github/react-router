import React from 'react';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  const profiles = [
    {
      username: 'anastasia_789',
      name: 'Anastasia',
    },
    {
      username: 'nickkk001',
      name: 'Nick',
    },
  ];
  return (
    <nav className='Navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
      {profiles.map((profile, idx) => {
        return (
          <Link key={idx} to={`/profile/${profile.username}`}>
            <span>{profile.name}'s Profile</span>
          </Link>
        );
      })}
    </nav>
  );
};
