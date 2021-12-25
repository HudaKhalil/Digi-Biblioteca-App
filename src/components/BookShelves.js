import React from 'react';
import BookShelf from './BookShelf';

const BookShelves = ({books, moveBookBTWShelves}) => {

    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");

    return (
        <div>
            <BookShelf bookShelfTitle='Currently Reading' books={currentlyReading} moveBookBTWShelves={moveBookBTWShelves}/>
            <BookShelf bookShelfTitle='Want to Read' books={wantToRead} moveBookBTWShelves={moveBookBTWShelves}/>
            <BookShelf bookShelfTitle='Read' books={read} moveBookBTWShelves={moveBookBTWShelves}/>
        </div>
    )
}

export default BookShelves