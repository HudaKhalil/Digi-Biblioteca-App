import React from 'react';
import Book from './Book';

const BookShelf = ({books, bookShelfTitle, moveBookBTWShelves}) => {
    return (
           <div className="bookshelf">
                  <h2 className="bookshelf-title">{bookShelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map(eachBook =>
                          <li key={eachBook.bookId}>
                            <Book book={eachBook} moveBook={moveBookBTWShelves} />
                          </li>
                        )}
                    </ol>
                  </div>
                </div>
    )
}

export default BookShelf