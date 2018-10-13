# MLB Standings

This is a ReactJS application to show the standings of Major League Baseball.

## Prerequisites 
* Node.js (https://nodejs.org/en/)

## Installation
First, clone this repo and `cd` into the main directory.  Then:
```shell
npm install
```

## Start the Server
```shell
npm start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Run Tests
```shell
npm test
```

## Code Linter
A linter was added to keep code consistent among developers.
```shell
npm run lint
```

To autofix linting errors (not all errors are auto-fixable):
```shell
npm run lint:fix
```

## Supported Browsers

By default, the generated project supports all modern browsers.

## Design Decisions
* Imported bootstrap to get CSS resets and basic grid functionality built in. Could use a lighter weight framework if mobile performance was primary use case.
* Used css-modules (https://github.com/css-modules/css-modules) to avoid css collisions by using scoping.
* Imported lodash functions for grouping and sorting.

## Thoughts on improvements
* Add additional statistics like winning percentage and games behind.
* Allowing the user to sort the lists in different ways, i.e. losses.
* Changing groupings of teams, for example, remove the divisions.
