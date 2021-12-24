import React from 'react';
/* import BookSearch from './BookSearch'; */
import BookShelf from './BookShelf';

const BookShelves = () => {

    const currentlyReading = [];
    /* const wantToRead = [];
    const read = []; */
    
    return (
        <div>
            <BookShelf title='Currently Reading' books={currentlyReading}/>
            {/* <BookShelf title='Want to Read' books={wantToRead}/>
            <BookShelf title='Read' books={read}/> */}
        </div>
    )
}

export default BookShelves