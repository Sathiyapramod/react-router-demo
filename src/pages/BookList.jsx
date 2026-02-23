import React, { useContext } from "react";
import Book from "../components/Book";
import { BookListContext } from "../context/BookListProvider";

function BookList() {
    // destructure the context
    const { books } = useContext(BookListContext);

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
