import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function CreateBook() {
    // form validation
    const validationSchema = yup.object({
        poster: yup.string().required(),
        bookName: yup.string().required(),
        bookRating: yup.number().min(1).max(10).required(),
        bookSummary: yup.string().required(),
    });

    // form handling
    const formik = useFormik({
        initialValues: {
            poster: "",
            bookName: "",
            bookRating: 1,
            bookSummary: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // step 1 : append to the existing book
            console.log(values);
        },
    });

    return (
        <div>
            <h1>Create a New Book</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-div">
                    <label>Poster Link</label>
                    <input
                        type="text"
                        id="poster"
                        name="poster"
                        placeholder="paste a poster link here"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.poster}
                    />
                </div>

                {formik.errors.poster ? <div className="error">{formik.errors.poster}</div> : ""}

                <div className="form-div">
                    <label>Name of the Book</label>
                    <input
                        type="text"
                        id="bookName"
                        name="bookName"
                        placeholder="Name of the book here"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bookName}
                    />
                </div>

                {formik.errors.bookName ? (
                    <div className="error">{formik.errors.bookName}</div>
                ) : (
                    ""
                )}
                <div className="form-div">
                    <label htmlFor="bookRating">Rating of the Book</label>
                    <input
                        type="number"
                        min={1}
                        max={10}
                        id="bookRating"
                        name="bookRating"
                        placeholder="enter the rating"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bookRating}
                    />
                </div>

                {formik.errors.bookRating ? (
                    <div className="error">{formik.errors.bookRating}</div>
                ) : (
                    ""
                )}

                <div className="form-div">
                    <label htmlFor="bookSummary">Summary of the Book</label>
                    <textarea
                        type="text"
                        id="bookSummary"
                        name="bookSummary"
                        placeholder="enter the summary"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bookSummary}
                    />
                </div>

                {formik.errors.bookSummary ? (
                    <div className="error">{formik.errors.bookSummary}</div>
                ) : (
                    ""
                )}
                <button type="submit">Create Book</button>
            </form>
        </div>
    );
}

export default CreateBook;
