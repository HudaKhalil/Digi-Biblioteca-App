import React from 'react';
import Book from './Book';

const BookShelf = ({books, bookShelfTitle}) => {
    return (
           <div className="bookshelf">
                  <h2 className="bookshelf-title">{bookShelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map(eachBook =>
                          <li>
                            <Book book={eachBook} />
                          </li>
                        )}
                    </ol>
                  </div>
                </div>
    )
}

export default BookShelf