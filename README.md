# MyReads Project

This is the 7th project in Udacity FEND Nanodegree Program. The project is a React implementation. It is prepared for the follow up and categorizing the books in three different shelves : Read, Want to read or Currently reading

The start repository from Udacity team is used in the project. It is to save time by using a static example of the CSS and HTML markup, provided. React code is main focus and completed by this project. 

Project started by cloning the starter project from [Start Repository](https://github.com/udacity/reactnd-project-myreads-starter).

## About the project

In MyReads project it is targeted to follow up the books Read, Want to read or Currently Reading (categories or shelf title). One can change the category of the book from one to another by use of attached select menu. 
Routing to the search page, one can search for a new book based on title or author info and when found, it can be added to one of the three categories on the main page. 

## What is done in the project

Remembering that good React design practice is to create new JS files for each component, Books.js and Shelves.js component classes are created and using import statements they are included where they are needed. There is a hierarchical connections mainly from Books to Shelves and Shelves to main App. Methods are passed and implemented through props and states are altered based on user actions (such as selecting the shelf category or searching special author or title in search bar. BrowserRouter, Route and Link are used to switch between the root and search pages.

The recommended starting point is to use BooksAPI getAll method to display the books, their properties. Visualizing book objects, writing the Books component class is easier. Considering the main page layout (shelf title - related books - shelf title -...) It is good to create Shelves component class as parent of Books component class. Thus main App calls for Shelves instance 3 times to render the main page.

BooksAPI update method is used to change the category (shelf title) of the book

Link to search page and return to main page is achieved by React Router.

In the search page BooksAPI search method is used to find what is looked for. Care must be given to unexpected (error creating) cases such as book without thumbnail. 

## How to install project

Following the cloning this project[MyReads](https://github.com/hasanOzyavru/MyBooks), move to the directory and:
* install all project dependencies with `npm install`
* start the development server with `npm start`
Thus project will run on a default browser. 

## The project material
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # 
└── src
    ├── App.css # Styles for your app. 
    ├── App.js # This is the root of the app. 
    ├── Shelves.js # This is the Shelves component class
    ├── Books.js # This is the Books component class.
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # It is used for DOM rendering only.
```



## Backend Server

To simplify the development process, Udacity team has provided a backend server for using in development. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods for necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

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
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
