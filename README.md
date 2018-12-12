# Front end Recruitment Test

## Why components/services as folder structure?

I believe that a component should be self-contained, each component,
scene or service (a feature) must have everything it needs to work on its own,
such as its own styles, images, translations, set of actions as well as
unit tests. I learned that this pattern help my projects to be
both more scalable and reusable.

#### Features

- Add and remove products from the floating cart
- Sort products by highest to lowest and lowest to highest price

![Sort](./doc/sort.png 'Sort')

- Filter products by available sizes

![Filters](./doc/filters.png 'Filters')

- Products persist in floating cart even after page reloads
- Responsive design for desktop, tablets and mobile
- Product stoppers for free shipping

#### Using

- React
  - Redux - state management
- Nodejs
  - Express CORS Middleware (Node and React run in different port)
  - Nodemon - for a better development experience
  - Concurrently - To run multiple tasks at once
- Axios - for promise HTTP requests
- CSS
  - BEM methodology
  - SASS
- Moxios - to stub http request
- Enzyme - to mount, shallow, render and query the DOM tree of React components
- Webdriverio - to do automated tests in a real browser environment
- Native local storage - to persist products in cart even after page reload

## About tests

- Unit tests
  - All components have at least a basic smoke test
- **Integration tests**
  - **Fetch product and add to cart properly**
- e2e
  - Webdriverio - Add and remove product from cart

### Coverage report

![Filters](./doc/coverage-report.png 'Filters')

## Build/Run

```javascript

/* Install the needed packages */
npm install

/* To start both Node and React*/
npm start

/* To run the tests */
npm run test

/* Running e2e tests */
npm run wdio

```

The React app should open automatically on localhost:3000
