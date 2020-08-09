#### Scripts

- `npm run dev:serve` - run webpack development build with dev server (sandbox)
- `npm run dev` - run webpack development build with watching (in-project integration)
- `npm run build` - run webpack production build for deploy
- `npm run remove-redux` - remove redux library and source files from project
- `npm run prettier:fix` - fix all js and jsx files using .prettierrc rules of code style

#### Template Structure

* **public** - directory for asset files like icons, images, fonts and etc.
* **src** - directory with source code of app
  * **components** - directory for app components (reusable components)
  * **containers** - directory for HOCs (High Order Components)
  * **pages** - directory for app pages (not a reusable components, root components - pages of app)
  * **redux** - directory for all redux logic such as: actions, reducers and etc.
  * **utils** - directory for util functional (support functions for app)
  **App.jsx** - main app component
  **index.js** - entry point in app
* **webpack** - webpack config directory (build config for app... dependence on running environment)

#### Remove Redux from template

Run npm script: `npm run remove-redux`

#### Fix style of code

Run npm script: `npm run prettier:fix` for format all files of app using .prettierrc rules

#### Configure Webpack

##### !!! Build path starts from project directory

You can configure webpack in `webpack/` directory

Change property `paths` in `webpack/index.js` to configure path for your webpack build

#### Assets

In sandbox mode `npm run dev:serve` better when you store your assets just like in project. Example: store your images in `public/design/images`, to have the same path like in real project

#### Documentation links

* [git conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
* [prettier](https://prettier.io)
* [redux](https://redux.js.org/introduction/getting-started)
* [redux-thunk](https://github.com/reduxjs/redux-thunk)
* [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
* [webpack](https://webpack.js.org/concepts/)