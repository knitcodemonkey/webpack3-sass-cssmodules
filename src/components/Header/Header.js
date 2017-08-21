import React from 'react';
import styles from './header.scss';

const Header = () => (
  <header>
    <ul className={styles.block}>
      <li>
        <a href="/example">Home</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      <li>
        <a href="talks.html">Talks</a>
      </li>
    </ul>
  </header>
);

export default Header;


