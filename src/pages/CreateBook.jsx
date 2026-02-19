import React from "react";

function CreateBook() {
    return (
        <div>
            <h1>Create a New Book</h1>
            <form>
                <div className="form-div">
                    <label>Poster Link</label>
                    <input
                        type="text"
                        id="poster"
                        name="poster"
                        placeholder="paste a poster link here"
                    />
                </div>
                <div className="form-div">
                    <label>Name of the Book</label>
                    <input type="text" id="name" name="name" placeholder="Name of the book here" />
                </div>
                <div className="form-div">
                    <label>Poster Link</label>
                    <input
                        type="text"
                        id="poster"
                        name="poster"
                        placeholder="paste a poster link here"
                    />
                </div>
                <div className="form-div">
                    <label htmlFor="contactName">Contact Name</label>
                    <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        placeholder="enter your name"
                    />
                </div>
            </form>
        </div>
    );
}

export default CreateBook;
