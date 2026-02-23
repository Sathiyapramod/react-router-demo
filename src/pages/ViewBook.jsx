import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BookListContext } from "../context/BookListProvider";

function ViewBook() {
    const { books } = useContext(BookListContext);

    let { bookId } = useParams();

    const navigate = useNavigate();

    const handleGoBack = () => navigate("/books");

    const [selectedBook, setSelectedBook] = useState(
        books.find((eachBook) => eachBook.id == bookId),
    );

    return (
        <div>
            <h1>View Book number - {bookId}</h1>
            <div className="book-card">
                <img src={selectedBook.poster} alt={selectedBook.name} className="poster" />
                <div>
                    <h2>{selectedBook.name}</h2>
                    <span>{selectedBook.rating}</span>
                </div>
                <div className="summary">{selectedBook.summary}</div>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
}

export default ViewBook;
