# Blank Storybook

This might ease the pain of setting up a Storybook...

## Installation

- Run `npx degit git@github.com:philgresh/css-challenge#blank-storybook` in your chosen directory (this will install files _within_ the directory rather than create a new one).
- `git init`
- `npm install`
- `npm run storybook` to start a Storybook server (you'll need to open a browser window manually and head to `http://localhost:6006/`...I found the auto-open feature annoying)
- [Start adding stories](https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/)!

## Features

- SASS is ready to use! Just import your .scss file into the JavaScript file like in Button.js:

```javascript
import './button.scss';
```

- Ready to [deploy to Github Pages](https://github.com/storybookjs/storybook-deployer). Simply run `npm run deploy-storybook`. The built Storybook will be hosted at `https://[yourgithubname].github.io/css-challenge/`
