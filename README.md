# Netshoes Cart Test

## Expected result

* See a list of products; DONE
* Be able to add or remove items to the cart and get instant visual feedback;
* See the products added to the cart.

## Data

The data we provide is a static JSON file under `/public/data`. DONE

Install the server : 

```
npm install -g json-server
```
Run the server: 

```
json-server --watch ./public/data/products.json --port 8001
```
## Notes

* You can use whatever stack or tooling you want to help you;
* Feel free to ask us questions during the process (but trust your guts, please!);
* You should create a static server in order to access the JSON data provided.

## Bonus

* Persist data on page reload;
* Test your code;
* Instructions on how to build/run the project.
