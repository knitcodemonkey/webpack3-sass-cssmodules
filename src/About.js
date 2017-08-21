import React from "react"
import { render } from "react-dom"
import styles from './scss/home.scss'
import Header from "./components/Header/Header"

const About = () => (
<div>
  <Header />
  <article>
    <h1>About</h1>
    <div className={styles.block}>
      <p>Jen Luker is a software engineer team lead at Deseret Digital Media (DDM) working on the KSL.com Classifieds; a Northern Utah classifieds site that beats the national brand on listings and traffic. Jen has spent a majority of her decade-long career as a full-stack developer using PHP, Javascript, and CSS, but has a particular fondness for front-end technologies. She is a leader on front-end teams, trains others in Reactjs, and build apps in React Native. Her spare time is spent spinning yarn from raw wool and knitting; she's even been known to 3D print her own tools for the job. You can find out more about her adventures in fiber arts at <a href="http://strongishfiber.com" target="_blank">strongishfiber.com</a>
      </p>
    </div>
  </article>
</div>
);

render(
  <About />,
  document.getElementById("main")
);
