import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './Shelves'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Books from './Books'

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
    this.state = {books:[], foundBooks:[]};
    this.updateBookInShelves=this.updateBookInShelves.bind(this);
    this.searchBook=this.searchBook.bind(this);
  }
  
 
  componentDidMount (){
    BooksAPI.getAll().then((books) => {this.setState({books})});
  }

  updateBookInShelves (bookId, event){
    BooksAPI.update(bookId,event.target.value)
    .then(BooksAPI.getAll().then((books) => {this.setState({books : books})}))
  }

  searchBook(event){
    if (event.target.value !=='') {
      BooksAPI.search(event.target.value).then (results => {
 //   console.log(results.error);              
        if (results.error === undefined) {
          results.map(result => {
            result.imageLinks === undefined && (result.imageLinks = `url(https://)`);
            result.shelf === undefined && (result.shelf = 'none');
            this.state.books.map(book => {
              (book.id === result.id) && (result.shelf = book.shelf); 
              })        
          })
          this.setState({foundBooks:results});
        }else {
        this.setState({foundBooks:[]});
        }      
      })
    }else {
    this.setState({foundBooks:[]});
    }
  };
  
  render() {

    //console.log(this.state.books);
    let readingShelf = this.state.books.filter(book => book.shelf==='currentlyReading');
    let wantToReadShelf = this.state.books.filter(book => book.shelf==='wantToRead');
    let readShelf = this.state.books.filter(book => book.shelf==='read');
    
    return (     
      <div className="app">
        <Route path='/search' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={event => this.searchBook(event)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.foundBooks.map(book => 
                    <Books key={book.id} book={book} updateBooks={this.updateBookInShelves}/>
                  )
                }
              </ol>
            </div>
          </div>
          )}/>
          <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
          </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
            <Shelves shelfTitle="Currently Reading" selectedShelfTitle={readingShelf} updateShelves={this.updateBookInShelves}/>
            <Shelves shelfTitle="Want To Read" selectedShelfTitle={wantToReadShelf} updateShelves={this.updateBookInShelves}/>
            <Shelves shelfTitle="Read" selectedShelfTitle={readShelf} updateShelves={this.updateBookInShelves} />
          </div>
          )}/>
        
      </div>
    )
  }
}

export default BooksApp
