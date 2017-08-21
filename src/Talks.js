import React from "react"
import { render } from "react-dom"
import styles from './scss/talks.scss'
import Header from "./components/Header/Header"

const Talks = () => (
  <div>
    <Header />
    <article>
      <h1>Talks</h1>
      <div className={styles.block}>
        <h2>Styling React for Reuse</h2>
        <div className={styles.talk}>
          <h3>Abstract</h3>
          <p>We've all installed a third-party component that fit our functional needs, only to sacrifice design, hours, and css elegance getting it "close enough". Using real-world examples, we'll explore how to use your preferred css approach to develop widely-customizable components without causing pain.</p>

          <h3>Description</h3>
          <p>The front-end programming sphere has exploded in recent years. Between state-based components, class naming conventions, and the inline versus stylesheet wars, it's difficult to wrap your head around your own components, let alone releasing them for reuse.</p>

          <p>My goal is to take all that information and distill it down into an easy to digest discussion for those who are looking to standardize their own components, or release their first components for public use. My goal is to help the community, at large, think about css in their OSS components in an extensible way, without sacrificing their favorite css approach.</p>

          <h3>Bio</h3>
          <p>Sr. Software Engineer, Mom, Knitter and Spinner (wool, not fidget). Currently working with PHP, ReactJS, React Native, MongoDB, and Yarn (both kinds).</p>
        </div>
      </div>
    </article>
  </div>
);

render(
  <Talks />,
  document.getElementById("main")
);
