import React, {useState, useContext } from 'react';
import BooksContext from '../context/BooksContext';
import _ from 'lodash';
import Book from './Book';
import Pagination from './Pagination';

const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);
    const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [term, setTerm] = useState('');

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentBooks = books.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = !term ? currentBooks : currentBooks.filter((book) =>book.bookname.toLowerCase().includes(term.toLocaleLowerCase()))

  return (
    <React.Fragment>
      <input className='input-search'  type="search" placeholder="Search for books" value={term} onChange={(e) => {
              setTerm(e.target.value);
            }} />      
      <div  className="book-list">
        {!_.isEmpty(filteredBooks) ? (
          filteredBooks
          .map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={books.length}
        paginate={paginate}
      />
    </React.Fragment>
  );
};

export default BooksList;