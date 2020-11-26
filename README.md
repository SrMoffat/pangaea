### PangaEA Lumin Clone
A recreation of luminskin.com product page and cart using a GraphQL API and a ReactJS and Apollo Client.

### Project Context
This project is a medium fidelity clone of the [Lumin Site's](https://store.luminskin.com/products) product page

### Requirements to Setup
1. [Node](https://nodejs.org/en/download/) which comes with [NPM](https://www.npmjs.com/package/npm) 
2. If you want to use `Yarn` instead of `NPM`, follow these instructions for respective OS [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

### Setup 
1. Clone the repository
`git clone https://github.com/SrMoffat/pangaea.git`
2. Move into the project director
`cd pangaea`
3. Install dependencies
`yarn install` or `npm install`
4. Start the app
`yarn start` or `npm start`
5. Visit http://localhost:3000/

### Project requirements
- [x] Should query from this [GraphQL API](https://pangaea-interviews.now.sh/api/graphql)
- [x] Retrieve the products and display them in a grid
- [x] Each item should display the image, title, price and a "Add to Cart" button
- [x] When a user clicks "Add to Cart" on an item it should open the cart sidebar and add the item in
- [x] If the item already exists it should increment the quantity
- [x] It should sum the items in the cart 
- [x] Clicking the + button will increase the quantity
- [x] For screens `> 768px` show grid of `3 items` for `< 768px` show `2 items` (bug with my css requires page reload)
- [x] Clicking the - button will decrease the quantity
- [x] If the quantity is 1 and the "-" button is pressed it should remove the item
- [] In the top left there is a currency select, doing so should requery the GraphQL api with a new currency and update the prices
- [] It should display the sum of items in the correct selected currency

