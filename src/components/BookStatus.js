import React from 'react'

const BookStatus = ({book}) => {

    const moveBook = () => {

    }

        return (
            <div className="book-shelf-changer">
                    <select defaultValue={book.bookShelf} onChange={(e) => moveBook(book, e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
            </div>
        )
    }

export default BookStatus