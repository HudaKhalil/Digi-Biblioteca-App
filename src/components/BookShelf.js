import React from 'react';
import Book from './Book';

const BookShelf = ({books}) => {
    return (
           <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
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