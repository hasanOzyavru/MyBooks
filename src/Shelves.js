import React from 'react'
import Books from './Books'

class Shelves extends React.Component {
    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.selectedShelfTitle.map(book => <Books key={book.id} book={book}/>)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelves