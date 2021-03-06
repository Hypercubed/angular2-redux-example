# Angular 2 + Redux + JSPM!

An example of Angular 2 and Redux using JSPM/SystemJS.

This repo is an example of [Angular 2](https://angular.io/) application using [SystemJS](https://github.com/systemjs/systemjs) and [JSPM](http://jspm.io/).  In this example I use NPM for development tools and build scripts (no gulp or grunt).  The front end resources are installed and managed using JSPM and loaded using SystemJS (the Universal dynamic module loader).  JavaScript resources, styles and templates are dynamically loaded during development and bundled for production using [SystemJS builder](https://github.com/systemjs/builder) via the JSPM cli.

* Angular2 Beta-0
* ES6 syntax and modules (+ES7 Decorators) via Babel (no typescript)
* Manage front end resources using JSPM
* Load resources using SystemJS
* Bundle builds via SystemJS Builder
* Template and styles compilation via SystemJS plugins
* [Semi-Standard Style](https://github.com/Flet/semistandard) (because languages have punctuation)
* gh-pages deploy via [tschaub/gh-pages](https://github.com/tschaub/gh-pages)
* Routing capability
* State managed by redux.
* Persistent storage using redux-localstorage.

## How is JSPM/SystemJS different from WebPack

Good explanation [here](https://github.com/angularclass/NG6-starter/tree/jspm#how-is-this-different-than-webpack).

## Why Redux?

[Motivation](http://redux.js.org/docs/introduction/Motivation.html)

## Quick start

```bash
git clone --depth 1 https://github.com/Hypercubed/angular2-redux-example
cd angular2-redux-example
npm install
npm start
```

## Other commands

- `npm run check` -  run semi-standard on application files
- `npm run bundle` - bundle resources and inject into SystemJS config
- `npm run unbundle` - unbundle resources and remove bundle
- `npm run start:dist` - bundle and start server
- `npm run deploy` - bundle, deploy to gh-pages, unbundle

## File Structure

This example follows the [angular-cli](https://github.com/angular/angular-cli) structure.

```
root/
 ├──src/
 │   ├──jspm_packages/
 │   ├──app/
 │   │   ├──components/
 │   │   ├──services/
 │   │   ├──pipes/
 │   │   ├──main.js
 │   │   ├──main.html
 │   │   └──main.css
 |   ├──app.js
 |   ├──index.html
 |   ├──config.js
 |   ├──build.js
 |   └──build.js.map
 ├──package.json
 └──README.md
```

## Other Example Repos

* [angular2-go](https://github.com/johnpapa/angular2-go) (John Papa)
  - TypeScript, SystemJS
* [ng2-jspm-seed](https://github.com/robwormald/ng2-jspm-seed) (Rob Wormald)
  - TypeScript, Gulp, JSPM
* [babel-angular2-app](https://github.com/shuhei/babel-angular2-app) (Shuhei Kagawa)
  - Babel, ES6+, Gulp, Karma, Browserify
* [Hypercubed/angular2-example](https://github.com/Hypercubed/angular2-example)
  - Babel, ES6+, JSPM, SystemJS

## History and Acknowledgements

Base application code from [Hypercubed/angular2-example](https://github.com/Hypercubed/angular2-example), originally based on [angular2-go](https://github.com/johnpapa/angular2-go) by John Papa.

Angular2/Todo redux based on [Angular 2 — Introduction to Redux](https://medium.com/google-developer-experts/angular-2-introduction-to-redux-1cf18af27e6e#.rvl2d7u6v) by gsans (itself a port of Todo application from [Getting Started with Redux](https://egghead.io/series/getting-started-with-redux) by Dan Abramov) and [redux - todomvc](https://github.com/rackt/redux/tree/master/examples/todomvc).

Styled using [tastejs/todomvc-app-css](https://github.com/tastejs/todomvc-app-css).

## License

MIT
