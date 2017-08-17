import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "./templates/About";
import Home from "./templates/Home";
import Topics from "./templates/Topics";
import styles from './scss/header.scss';

const BasicExample = () => (
    <Router>
      <div>
        <header>
          <ul className={styles.block}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </header>

        <hr />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </div>
  </Router>
);

render(
  <BasicExample />,
  document.getElementById("main")
);