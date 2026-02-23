import React, { useState, createContext } from "react";
import INITIAL_BOOK_LIST from "../config/books";

// step 1
const BookListContext = createContext();

function BookListProvider({ children }) {
    // step 2
    // state - to use globally
    // declare
    const [books, setBooks] = useState(INITIAL_BOOK_LIST);

    // step 3
    // publishing event

    return (
        <BookListContext.Provider value={{ books, setBooks }}>{children}</BookListContext.Provider>
    );
}

export { BookListContext };

export default BookListProvider;
