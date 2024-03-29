# Frontend Mentor - Rock, Paper, Scissors solution

This my solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
    - [Interesting code](interesting-code)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![Multiview screenshots](./mockup.png)

### Links

- Solution URL: [Github Repo](https://github.com/seanyoung247/rock-paper-scissors)
- Live Site URL: [Github Pages](https://seanyoung247.github.io/rock-paper-scissors/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS transitions
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This is my first React project and my main goal was to teach myself the basics of building React apps. I think I've managed to gain a reasonable grasp of the React life-cycle and the basics of how to build components, though I leave it for others to decide how well I've implemented them...

I also set myself the goal of using CSS transitions extensively to get a better grasp of what can be done with them.

#### Interesting code

This CSS automatically lays out game options in a circle in the chooser component. This allows different game modes with varying numbers of options without having to write too much specific case code:

```css
.chooser.<game-mode> {
  --diameter: <x>px;
  --item-size: <x>px;
  --border-base: <x>px;
}
.chooser {
  --offset: calc((var(--diameter) - var(--item-size)) / 2);
}
.chooser li {
  position: absolute;
  top: 50%;
  left: 50%;

  --s: calc(-1.25 * (1 / var(--n)));
  --a: calc((var(--s) * 1turn) + var(--i) * (1turn / var(--n)));

  transform:
    translate(-50%, -50%)         /* Move item to center */
    rotate(var(--a))              /* Rotate to align with required position */
    translate(var(--offset))      /* Move to circle boundary */
    rotate(calc(-1 * var(--a)));  /* Realign rotation with page */
}
```

This code calculates the winning player with the mathematical formula outlined in this [wikipedia article](https://en.wikipedia.org/wiki/Rock_paper_scissors#Additional_weapons). Generalised to work with variable number of options. Returns 0, 1, or 2 for tie, player one, and player two respectively.

```js
_checkWinner(p1, p2) {
  const modr = (x, y) => (x + y) % y;
  const x = p1 - p2;
  return x && (modr(modr(x, this._choices.length), 2) + 1);
}
```

### Continued development

Possible improvements and features:
- Render polygon background in chooser instead of a circle
- Different game styles
- Tooltips to give context hints/information
- Winning/Losing explanations (i.e. paper wraps rock etc.)
- Different computer choice modes based on player heuristics:
  - Easy (weighted to make player victory more likely)
  - Hard (weighted to try to defeat the player)
  - Random (current mode)

In future projects I'll be continuing to learn React, focusing next on router and/or hooks.

### Useful resources

- [Google](https://www.google.com) - The most important programmer resource ever invented.
- [Stackoverflow](https://www.stackoverflow.com) - The second most important programmer resource ever invented.
- [React Docs](https://reactjs.org/docs/getting-started.html) - Invaluable information for getting started.
- [dev.to](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) - Useful article for getting started and deploying React apps to github pages.

## Author

- Github - [Add your name here](https://github.com/seanyoung247)
- Frontend Mentor - [@seanyoung247](https://www.frontendmentor.io/profile/seanyoung247)
- LinkedIn - [@Sean Young](https://www.linkedin.com/in/sean-young-b4957819a/)

## Acknowledgments

- The winning player formula is based on the one described here: [Rock paper scissors - wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors#Additional_weapons).
- Circular CSS layout code based on Ana Tudor's answer on this stack overflow question: [stack overflow](https://stackoverflow.com/questions/12813573/position-icons-into-circle).
