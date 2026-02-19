import React, { useState } from "react";
import INITIAL_BOOK_LIST from "../config/books";

function BookList() {
    const [books, setBooks] = useState(INITIAL_BOOK_LIST);
    return (
        <div>
            <h1>My List of Books</h1>
            <div className="book-list">
                {books.map((eachBook, index) => {
                    return (
                        <div key={index} className="book-card">
                            <img src={eachBook.poster} alt={eachBook.name} className="poster" />
                            <div>
                                <h2>{eachBook.name}</h2>
                                <span>{eachBook.rating}</span>
                            </div>
                            <div className="summary">{eachBook.summary}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BookList;
