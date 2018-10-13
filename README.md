# MLB Standings

This is a ReactJS application to show the standings of Major League Baseball.

## Prerequisites 
* Node.js (https://nodejs.org/en/)

## Functional Website

https://thoracek.github.io/mlb-standings-react/

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

## Deploy
A basic deployment can be done to github pages.
```shell
npm run build
```

```shell
npm run deploy
```

## Supported Browsers

By default, the generated project supports all modern browsers.

## Design Decisions
* Imported bootstrap to get CSS resets and basic grid functionality built in. Could use a lighter weight framework if mobile performance was primary use case.
* Used css-modules (https://github.com/css-modules/css-modules) to avoid css collisions by using scoping.
* Imported lodash functions for grouping and sorting. (https://lodash.com)
* Use functional components where possible, limit state to reduce bugs.

## Thoughts on improvements
* Add additional statistics like winning percentage and games behind.
* Allowing the user to sort the lists in different ways, i.e. losses.
* Changing groupings of teams, for example, remove the divisions.
* Better error handling and loading states for slow connections.
* Use .env file to configure endpoints.
* Additional APIs to handle readable names for teams instead of abbreviations.
* CI/CD to run tests and linting before deploying.
