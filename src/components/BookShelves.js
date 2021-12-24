import React from 'react';
import BookShelf from './BookShelf';

const BookShelves = ({books}) => {

    const currentlyReading = books.filter((book) => book.bookShelfChanger === "CurrentlyReading");
    const wantToRead = books.filter((book) => book.bookShelfChanger === "WantToRead");
    const read = books.filter((book) => book.bookShelfChanger === "Read");

    return (
        <div>
            <BookShelf title='Currently Reading' books={currentlyReading}/>
            <BookShelf title='Want to Read' books={wantToRead}/>
            <BookShelf title='Read' books={read}/>
        </div>
    )
}

export default BookShelves