import React, { Component } from 'react'

const BookStatus = ({book}) => {

        return (
            <div className="book-shelf-changer">
                    <select defaultValue={book.bookShelf}>
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