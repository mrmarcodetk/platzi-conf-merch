import React from 'react';
import initialState from '../initialState';
import { Products } from '../components';

const Home = () => {
  return (
    <Products products={initialState.products}></Products>
  );
};

export default Home;
