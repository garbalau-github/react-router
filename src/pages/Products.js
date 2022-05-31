import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link to='/products/list'>List</Link>
      <Outlet />
    </div>
  );
};
