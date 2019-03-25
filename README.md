# Sassquatch

An in development sass based component library.

This repository contains two packages. A react project that contains a library of react components, and an asset project for including assets in your projects.

The static directory contains twig templates that can be used for testing out the library of assets.

Currently the two packages react and theme, must be maintained individually, but should be kept in sync.

For example useage please see http://sassquatch.ca/

## Requirements

### Node.js
https://nodejs.org/en/ 6+

```shell
npm install --global gulp-cli
```

```shell
npm install
```
or

```shell
yarn install
```

## Commands

- 'gulp' : the default task which will compile all assets into minified files, render the static templates as HTML, and watch the template files and assets for changes
- 'gulp build' : compiles all assets into minified files and renders the static templates as HTML
- 'gulp serve' : Runs a webserver at localhost:8000 using the rendered HTML and minified assets and watches for changes. When changes are made the webserver will livereload
- 'gulp package' : rebuilds the sassquatch asset package to prepare it for publishing

## In packages/sassquatch-react

Make sure to add a `config.js` file in the `config` folder. See the example there for more details.

Production mode:

```shell
npm start
```

Development (Webpack dev server) mode:

```shell
mongod
npm run start:dev
```

### Storybook

yarn run storybook



