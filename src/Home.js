import React from "react"
import { render } from "react-dom"
import Header from "./components/Header/Header"
import styles from './scss/home.scss'

const Home = () => (
  <div>
    <Header />
    <article>
      <h1>Home</h1>
      <div className={styles.block}>
        <p className={styles.red}>Welcome to a basic boilerplate. It's goal is to show off how to use Webpack 3, React, CSS Modules and SASS together.</p>
        <blockquote>npm install</blockquote>
        <blockquote>npm start</blockquote>
      </div>
    </article>
  </div>
);

render(
  <Home />,
  document.getElementById("main")
);
