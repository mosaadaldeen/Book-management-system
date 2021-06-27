import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
    <BrowserRouter>
      <div>
    <Header />
    <div className="main-content">
        <Switch>
          <Route component={BooksList} path="/" exact={true} />
          <Route component={AddBook} path="/add" />
          <Route component={EditBook} path="/edit/:id" />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
    </div>
      </div>
    </BrowserRouter>
      </BooksContext.Provider>
  );
};
export default AppRouter;