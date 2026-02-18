import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function Contact() {
    // yup validation
    const validationSchema = yup.object({
        contactName: yup
            .string()
            .min(5, "Min 5 characters required")
            .max(20, "Only 20 characters max allowe")
            .required("Hi Sriraja, invalid contact name"),
        contactEmail: yup.string().email("standard format").required("invalid email format"),
        message: yup.string().max(500).required("message is required"),
        age: yup.number().positive("Should be a valid age above zero").required("age is required"),
    });

    // form validation
    const formik = useFormik({
        initialValues: {
            contactName: "",
            contactEmail: "",
            message: "",
            age: null,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            updateData(values);
        },
    });

    async function updateData(inputs) {
        try {
            const res = await fetch("");
        } catch (err) {
            console.log("error", err);
        }
    }

    return (
        <div>
            <h1>Contact Me</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-div">
                    <label htmlFor="contactName">Contact Name</label>
                    <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        placeholder="enter your name"
                        onChange={formik.handleChange}
                        value={formik.values.contactName}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.errors.contactName ? (
                    <div className="error">{formik.errors.contactName}</div>
                ) : (
                    ""
                )}
                <div className="form-div">
                    <label htmlFor="contactEmail">Contact Email</label>
                    <input
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        placeholder="enter your email"
                        onChange={formik.handleChange}
                        value={formik.values.contactEmail}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.contactEmail ? (
                        <div className="error">{formik.errors.contactEmail}</div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-div">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        placeholder="enter your message"
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                </div>
                {formik.errors.message ? <div className="error">{formik.errors.message}</div> : ""}
                <div className="form-div">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        placeholder="enter your age"
                        id="age"
                        name="age"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                    />
                </div>

                {formik.errors.age ? <div className="error">{formik.errors.age}</div> : ""}
                <button type="submit">Submit Form</button>
            </form>
        </div>
    );
}

export default Contact;
