import React from 'react'
/* import BookStatus from './BookStatus' */

const Book = ({book, moveBook}) => {

    return (
        
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.bookURL})`}}>
                       {/*  <BookStatus book={book}  moveBook={moveBookBTWShelves}/> */}
                        <div className="book-shelf-changer">
                            <select defaultValue={book.bookShelf} onChange={(e) => moveBook(book, e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                 </div>
            </div>
            <div className="book-title">{book.bookTitle}</div>
            <div className="book-authors">{book.bookAuthor}</div>
        </div>
        
    )
}

export default Book

