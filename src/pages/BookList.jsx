import React, { useState } from "react";
import INITIAL_BOOK_LIST from "../config/books";
import Book from "../components/Book";

function BookList() {
    const [books, setBooks] = useState(INITIAL_BOOK_LIST);
    return (
        <div>
            <h1>My List of Books</h1>
            <div className="book-list">
                {books.map((eachBook) => {
                    return (
                        <Book
                            key={eachBook.id}
                            poster={eachBook.poster}
                            name={eachBook.name}
                            rating={eachBook.rating}
                            summary={eachBook.summary}
                            bookId={eachBook.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default BookList;
