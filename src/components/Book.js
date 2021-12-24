import React from 'react'
import BookStatus from './BookStatus'

const Book = ({book}) => {
    return (
        
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.bookURL})`}}>
                        <BookStatus book={book}/>
                 </div>
            </div>
            <div className="book-title">{book.bookTitle}</div>
            <div className="book-authors">{book.bookAuthor}</div>
        </div>
        
    )
}

export default Book

