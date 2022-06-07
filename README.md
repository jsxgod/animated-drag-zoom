
# Skate shop

A mobile only ecommerce shop brought to life with React.</br>
Built upon a singular idea - fun deck exploring while making a purchase.
####
The goal for the shop was to have an unique skateboard deck viewing user experience. Clients can drag to enlarge the decks to break the established visual boundaries of the page. Grew into a full-stack ecommerce project.

## Website
Visit the live site on your mobile device or use the dev tools to target a mobile view in a browser of your choice.
The project is available [here 🌐](http://skateshop-ksdev.vercel.app/).

![skateshop](https://user-images.githubusercontent.com/22659815/172367561-c9e5fa91-d8a6-4059-9f15-e42ef9c9d00e.png)

## Technologies
#### Design
- Figma

#### front-end
- React
- Redux-toolkit
- Sass
- framer-motion

#### back-end
- Node.js
- MongoDB

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI` set to the connection string of your MongoDB

## Run Locally
⚠️ DANGER ZONE ⚠️
####
The project modifies local storage.</br>
If you have anything important saved under the default localhost:3000 make sure to back it up before running the application.</br>
##
Clone the project files or download them manually

```bash
  git clone https://github.com/jsxgod/skate-shop.git
```

Go to the project's frontend directory

```bash
  cd skate-shop
```

Install dependencies

```bash
  npm install
```

Go to the project's backend directory (skate-shop/backend)

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Seed the data into the database (skate-shop/backend directory)

```bash
  npm run data:import
```

Start the application (skate-shop/backend directory)

```bash
  npm run dev
```

