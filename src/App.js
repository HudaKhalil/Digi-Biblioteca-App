import React, {useState, useEffect} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
/* import BookSearch from './components/BookSearch' */
import BookShelves from './components/BookShelves'

const BooksApp = () => {
     /** TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

     useEffect(() => {
          BooksAPI.getAll()
          .then(data => {
            /* console.log(data) */
            setBooks(data)}
            );
      }, [])

    const [showSearchPage, setShowSearchPage ] = useState(false);

    /* const [books, setBooks] = useState(initBooks) */
    const [books, setBooks] = useState([])
    const moveBookBTWShelves = (book, moveTo ) => {
          const newBookShelf = books.map(b => {
            if (b.id === book.id){
              book.shelf = moveTo;
              return book;
            }
            return b;
          })
          setBooks(newBookShelf);
          BooksAPI.update(book, moveTo);
    }

    return (
      <div className="app">
        {showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => setShowSearchPage(false)}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            {/*App Header*/}
            <div className="list-books-title">
              <h1>Digi-Biblioteca</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelves  books={books} moveBookBTWShelves={moveBookBTWShelves}/>
              </div>
            </div>
            {/*SearchResult Component*/}
            <div className="open-search">
              <button onClick={() => setShowSearchPage(true)}>Add a book</button>
            </div>
          </div>
        )}
        
    </div>
    )
 }

export default BooksApp
