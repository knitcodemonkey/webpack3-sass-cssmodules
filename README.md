# Static React and CSS Modules

A React, Webpack and CSS Modules project that generates static markup. All markup is generated in `/example` from `/src`. This boilerplate is inspired by https://github.com/robinrendle/react-css-modules-boilerplate, but has been upgraded, includes sass compilers, and uses a multi-page app example.


## Getting started

Hop into the terminal:

1. `npm install`
2. `npm start`

BrowserSync will then open up a new tab where you can start to make new components and templates as you see fit. It does not currently update the sass on the fly, and will need to be rebuilt each time.

## Workflow

React is used in this project not to build a complex web app but instead to organise bundles of CSS and JS in order to write maintainable code and create static markup. This is what our directory structure looks like:

```
/src
  /components
    /Header
      Header.js
      header.scss
  /scss
    /base
        _base.scss
        _variables.scss
    home.scss
    talks.scss
  /templates
    index.html
  About.js
  Home.js
  Talks.js
        
```

## Issues

This is a proof of concept for my Styling React for Reuse talk.
