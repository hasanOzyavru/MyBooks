# MyReads Project

This is the 7th project in Udacity FEND Nanodegree Program. The project is a React implementation. It is prepared for the follow up and categorizing the books in three different shelves : Read, Want to read or Currently reading

The starter template is used in the project. It is to save time by using a static example of the CSS and HTML markup, provided. React code is main focus and completed by this project. 

Project started by cloning the starter project from [Start Repository](https://github.com/udacity/reactnd-project-myreads-starter).

## What is done in the project

Remembering that good React design practice is to create new JS files for each component, Books.js and Shelves.js component classes are created and using import statements they are included where they are needed. There is a hierarchical connections mainly from Books to Shelves and Shelves to main App. Methods are passed and implemented through props and states are altered based on user actions (such as selecting the shelf category or searching special author or title in search bar. BrowserRouter, Route and Link are used to switch between the root and search pages.

## TL;DR

Following the cloning this project, move to the directory and:
* install all project dependencies with `npm install`
* start the development server with `npm start`
Thus project will run on a given static data. 

## What You're Getting as starter material
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```



## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

The starter repository is the starter code for _all_ Udacity students. Therefore, pull requests are not accepted. This repository is the project submitted. So feel free to use it to understand or improve.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
