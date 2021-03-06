import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useDebounce } from 'use-debounce'
import * as BooksAPI from './BooksAPI'
import './App.css'
/* import BookSearch from './components/BookSearch' */
import BookShelves from './components/BookShelves'
import Book from './components/Book'

const BooksApp = () => {
     /** TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    const [books, setBooks] = useState([]);
    const [arrayOfBooksIds, setArrayOfBooksIds] = useState(new Map());
    const [searchData, setSearchData] = useState([]);
    const [find, setFind] = useState("");
    // https://github.com/xnimorz/use-debounce#simple-values-debouncing
    const [value] = useDebounce(find, 500);
    const [joindBooks, setJoindBooks] = useState([]);

    //calling books from booksAPI
    useEffect(() => {
          BooksAPI.getAll()
          .then(data => 
            {
              setBooks(data)
              setArrayOfBooksIds(arrayOfBooks(data))
            }
            );
      }, [])

    //Map books in search when self updated, to books in shelves in main page
    useEffect(() => {
    const joined = searchData.map(book => {
      if (arrayOfBooksIds.has(book.id)) {
        return arrayOfBooksIds.get(book.id);
      } else {
        return book;
      }
    })
    setJoindBooks(joined);
  }, [searchData])

    //calling search from booksAPI to query books
    useEffect(() => {

       let isReset = true; 

      if (value) {
         BooksAPI.search(value).then(d => {
           if (d.error) {
             setSearchData([])
           } else {
             if (isReset)
             {setSearchData(d);
            }
           }
         })
      }
      return () => {
        // If user clear search bar reset the search data
        isReset = false;
        setSearchData([]);
      }
        
    }, [value])
    

    const arrayOfBooks = (books) => 
    {
      const arry = new Map();
      books.map(book => arry.set(book.id, book));
      return arry;
  }

    const moveBookBTWShelves = (book, moveTo ) => {
          const newBookShelf = books.map(b => {
            if (b.id === book.id){
              book.shelf = moveTo;
              return book;
            }
            return b;
          })
          if (!arrayOfBooksIds.has(book.id)) {
            book.shelf = moveTo;
            newBookShelf.push(book)
          }
          setBooks(newBookShelf);
          BooksAPI.update(book, moveTo);
    }

    return (
      <div className="app">
      <Router>
        <Switch>
            {/*App Search*/}
            <Route path="/search">
                <div className="search-books">
                <div className="search-books-bar">
                  <Link to="/">
                    <button className="close-search">Close</button>
                  </Link>
                  <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author" value={find} onChange={(e) => setFind(e.target.value)}/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    {joindBooks.map(eachBook =>
                              <li key={eachBook.id}>
                                <Book book={eachBook} moveBook={moveBookBTWShelves} />
                              </li>
                            )}
                  </ol>
                    
                </div>
              </div>
            </Route>

            {/*App Main*/}
            <Route path="/">
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
                  <Link to="/search">
                      <button>Add a book</button>
                  </Link>
                </div>
              </div>
            </Route>
        </Switch>
      </Router>
    </div>
    )
 }

export default BooksApp
