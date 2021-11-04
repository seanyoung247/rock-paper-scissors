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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Github Repo](https://github.com/seanyoung247/rock-paper-scissors)
- Live Site URL: [Github Pages](https://seanyoung247.github.io/rock-paper-scissors/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This is my first React project and my main goal was to teach myself the basics of building React apps. I think I've managed to gain a good grasp of the React life-cycle and the basics of how to build components, though I leave it for others to decide how well I've implemented them...

I also set myself the goal of using CSS transitions extensively to get a better grasp of what can be done with them.

#### Interesting code

This CSS automatically lays out game options in a circle in the chooser component. This allows different game modes with varying numbers of options without having to write too much specific case code:

```css
.chooser.<mode> {
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

This code calculates the winning player with the mathematical formula outlined in this [wikipedia article](https://en.wikipedia.org/wiki/Rock_paper_scissors#Additional_weapons). Generalised to work with variable number of options, returns 0, 1, or 2 for tie, player one, and player two respectively.

```js
_checkWinner(p1, p2) {
  const modr = (x, y) => (x + y) % y;
  const x = p1 - p2;
  return x && (modr(modr(x, this._choices.length), 2) + 1);
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
