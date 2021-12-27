import React from 'react'
import _ from "lodash";
/* import BookStatus from './BookStatus' */

const Book = ({book, moveBook}) => {

    return (
        
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
                       {/*  <BookStatus book={book}  moveBook={moveBookBTWShelves}/> */}
                        <div className="book-shelf-changer">
                            {/* Adding condition if new books, set shelf none */}
                            <select defaultValue={book.shelf ? book.shelf : "none"} onChange={(e) => moveBook(book, e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                 </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {/*All of the authors of the book should be shown*/}
                {_.isArray(book.authors) ? (
                    book.authors.map((author) => (
                    <div key={author}>
                        <span>{author}</span>
                       {/*  <br /> */}
                    </div>
                    ))
                ) : (
                    <span>{book.authors}</span>
                    )}
          </div>
        </div>
        
    )
}

export default Book

