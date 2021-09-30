# React Memory

## Table of Contents

- [About The Project](#about-the-project)
  - [Memory game rules](#memory-game-rules)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Scripts](#scripts)
- [License](#license)
- [Changelog](#changelog)
- [Code Style](#code-style)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About The Project

A simple memory game made with ReactJS.

You can try the game at [react-memory.netlify.app](https://react-memory.netlify.app).

### Memory game rules

The board contains an even number of cards, every card has a pair. Initially all cards are hidden. The player has to find all the matching cards. If the player clicks on a card, it is flipped, if he clicks on a new card, it will be flipped too. If the two cards match, they will stay flipped, if they don't match, both cards will be flipped back to be hidden. The goal is to try and match all the cards, in the least possible tries.

### Built With

- [React](https://reactjs.org)
- [react-spring](https://react-spring.io/)
- [Create React App](https://github.com/facebook/create-react-app)

## Getting Started

To install or use the game first install the prerequisites, then follow the install instructions below.

### Prerequisites

- [Node.js 16.9.1 or higher](https://nodejs.org/en/)

### Installation

```bash
git clone https://github.com/grabovszky/react-memory.git
cd react-memory
npm i
```

## Usage

Run `npm start` to start the app in developemnt mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Scripts

- `npm start` Runs the app in the development mode.
- `npm run build` Builds the app for production to the `build` folder.

## License

The project is licensed under the [MIT](https://opensource.org/licenses/MIT) license, for more information about he license see the `LICENSE` file.

## Changelog

All notable changes to this project will be documented in [CHANGELOG.md](https://github.com/gaborkristof/react-memory/CHANGELOG.md).

## Code Style

The project adheres to the guidelines defined below:

- Project versioning uses [Semantic Versioning 2.0.0](https://semver.org/)
- Commits use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) style

## Contact

Kristóf Gábor - [gaborkristof.com](https://www.gaborkristof.com)

## Acknowledgements

- [Facebook](https://github.com/facebook) dev team for:
  - [React](https://github.com/facebook/react) (Licensed under [MIT](https://github.com/facebook/react/blob/main/LICENSE))
  - [Create React App](https://github.com/facebook/create-react-app) (Licensed under [MIT](https://github.com/facebook/create-react-app/blob/main/LICENSE))
- [Poimandres](https://github.com/pmndrs) developer collective for:
  - [react-spring](https://github.com/pmndrs/react-spring) (Licensed under [MIT](https://github.com/pmndrs/react-spring/blob/master/LICENSE))
