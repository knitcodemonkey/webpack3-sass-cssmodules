import React from 'react';
import styles from '../scss/home.scss';

const Home = () => (
  <div>
    <h2>Home</h2>
    <div>
      <p className={styles.red}>Welcome to my pretty basic boilerplate! It's goal is to show off how to use Webpack 3, React, and SASS together.</p>
    </div>
  </div>
);

export default Home;
