### PangaEA Lumin Clone
A recreation of luminskin.com product page and cart using a GraphQL API and a ReactJS and Apollo Client.

### Project Context
This project is a medium fidelity clone of the [Lumin Site's](https://store.luminskin.com/products) product page

### Requirements to Setup
1. [Node]()
2. [NPM]() or [Yarn]()

### Setup 
1. Clone the repository
`git clone https://github.com/SrMoffat/pangaea.git`
2. Install dependencies
`yarn install` or `npm install`
3. Start the app
`yarn start` or `npm start`
4. Visit http://localhost:3000/

### Project requirements
- [x] Should query from this [GraphQL API](https://pangaea-interviews.now.sh/api/graphql)
- [x] Retrieve the products and display them in a grid
- [x] Each item should display the image, title, price and a "Add to Cart" button
- [x] When a user clicks "Add to Cart" on an item it should open the cart sidebar and add the item in
- [] If the item already exists it should increment the quantity
- [] Clicking the + or - buttons will increase or descrease the quantity
- [] If the quantity is 1 and the "-" button is pressed it should remove the item
- [] In the top left there is a currency select, doing so should requery the GraphQL api with a new currency and update the prices
- [] It should sum the items in the cart and display them in the correct selected currency
- [] For screens `> 768px` show grid of `3 items` for `< 768px` show `2 items`

### Stretch
- [x] Attempted pixel-perfect reacreation
- [x] Implemented the page navbar
- [] Added tests and [TravisCI Badge]()
- [] Deployed to [Heroku]()
- [] CI/CD with Github Actions
- [] Filter dropdown
