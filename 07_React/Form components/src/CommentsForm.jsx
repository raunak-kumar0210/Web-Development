import "./Comment.css";
import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        ratings: "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => ({
            ...currData,
            [event.target.name]: event.target.value,
        }));
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        addNewComment(formData);
        setFormData({
            username: "",
            remarks: "",
            ratings: "",
        });
    };

    return (

        <form className="form" onSubmit={handleSubmit}>
            <h4>Give a Comment!</h4>
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                placeholder="username"
                id="username"
                value={formData.username}
                name="username"
                onChange={handleInputChange}
                required
            />

            <label htmlFor="remarks">Remarks: </label>
            <textarea
                placeholder="remarks"
                id="remarks"
                value={formData.remarks}
                name="remarks"
                onChange={handleInputChange}
            ></textarea>

            <label htmlFor="ratings">Ratings: </label>
            <input
                type="number"
                id="ratings"
                value={formData.ratings}
                min={1}
                max={5}
                name="ratings"
                onChange={handleInputChange}
            />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}
