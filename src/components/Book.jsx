import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Book({ poster, name, rating, summary, bookId }) {
    // declare one variable for handling navigation
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        console.log(id);
        navigate(`/books/${id}`)
    };

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const handleLike = () => setLike(like + 1);
    const handleDislike = () => setDislike((prev) => prev + 1);

    return (
        <div>
            <div className="book-card">
                <img src={poster} alt={name} className="poster" />
                <div>
                    <h2>
                        {name}-{bookId}
                    </h2>
                    <span>{rating}</span>
                </div>
                <div className="summary">{summary}</div>
                <button onClick={() => handleNavigate(bookId)}>View Book</button>
                <div>
                    <button onClick={handleLike}>Like - {like}</button>
                    <button onClick={handleDislike}>Dislike - {dislike}</button>
                </div>
            </div>
        </div>
    );
}

export default Book;
