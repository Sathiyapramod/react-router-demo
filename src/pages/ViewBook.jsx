import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ViewBook() {
    let { bookId } = useParams();

    const navigate = useNavigate();

    const handleGoBack = () => navigate(-1);

    return (
        <div>
            <h1>View Book number - {bookId}</h1>
            <div className="book-card">
                <img src={""} alt={""} className="poster" />
                <div>
                    <h2>{}</h2>
                    <span>{}</span>
                </div>
                <div className="summary">{}</div>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
}

export default ViewBook;
