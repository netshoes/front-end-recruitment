# Netshoes Cart Test

The objective of this project is implement an interface that has a list of products, be able to add and remove items to the cart and see products on the cart.

### Prerequisites

You need to have node.js installed in your machine, you can find it in the link bellow.

```
https://nodejs.org/en/
```

### Installing

Open the project root folder in your command line and type the command bellow for download the node modules needed for the project run:

```
npm install
```

Then, install the server for acess the json file:
```
npm install -g json-server
```

Wait for download the Node Modules.

## Running the project

For run everything on a single command just type:

```
npm run dev
```

If you want to run each command separately:

command to create a static server:
```
json-server --watch ./public/data/products.json --port 8001
```
command for run the app:
```
npm run start
```

If you want to create the product version:
```
npm run build
``` 

### IMPORTANT
If you generated the build version you can change the server url this project use to fetch data on the file ./src/config/const.js


## Expected result

* See a list of products; DONE
* Be able to add or remove items to the cart and get instant visual feedback; DONE
* See the products added to the cart. DONE

## Data

The data we provide is a static JSON file under `/public/data`. DONE

## Notes

* You can use whatever stack or tooling you want to help you;
* Feel free to ask us questions during the process (but trust your guts, please!);
* You should create a static server in order to access the JSON data provided. DONE

## Bonus

* Persist data on page reload; DONE
* Test your code;
* Instructions on how to build/run the project. DONE
* Responsive design. DONE

## Built With

- [React](https://github.com/facebook/react) - Using the v2, it includes babel 7, webpack 4, jest 23.
- [Sass](https://github.com/webpack-contrib/sass-loader) - Loads a Sass/SCSS file and compiles it to CSS (Using BEM methodology)