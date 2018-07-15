import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Books'
import Shelves from './Shelves'

class BooksApp extends React.Component {
  /** 
  state = {
    
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     
    showSearchPage: false
  }
  */
  constructor(props){
    super(props);
    this.state = {books:[]};
    this.updateBookInShelves=this.updateBookInShelves.bind(this);
  }

  
  componentDidMount (){
    BooksAPI.getAll().then(books => this.setState({books}));
  }

  updateBookInShelves (bookId, event){
    BooksAPI.update(bookId,event.target.value).then(BooksAPI.getAll().then(books => this.setState({books})));
  }
  
  render() {

    //console.log(this.state.books);
    let readingShelf = this.state.books.filter(book => book.shelf==='currentlyReading');
    let wantToReadShelf = this.state.books.filter(book => book.shelf==='wantToRead');
    let readShelf = this.state.books.filter(book => book.shelf==='read');
    return (
      
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
          </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
            {/*        Receiving directly from Books 
            <ol>
              {this.state.books.map(book => <Books key={book.id} book={book}/>)}
            </ol>  */} 

            <Shelves shelfTitle="Currently Reading" selectedShelfTitle={readingShelf} updateShelves={this.updateBookInShelves}/>
            <Shelves shelfTitle="Want To Read" selectedShelfTitle={wantToReadShelf} updateShelves={this.updateBookInShelves}/>
            <Shelves shelfTitle="Read" selectedShelfTitle={readShelf} updateShelves={this.updateBookInShelves} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
