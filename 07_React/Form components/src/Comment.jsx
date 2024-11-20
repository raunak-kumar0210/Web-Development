import "./Comment.css";
import { useState } from "react";
import CommentsForm from "./CommentsForm.jsx";

export default function Comment() {
    let [comments, setComments] = useState([
        {
            username: "@sk",
            remarks: "Great job!",
            ratings: 4,
        },
    ]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    };

    return (
        <>
            <div className="comment-section">
                <h3>All Comments</h3>
                {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span>{comment.remarks}</span>
                        <span className="rating">(Rating: {comment.ratings})</span>
                        <p>- {comment.username}</p>
                    </div>
                ))}
            </div>
            <hr />
            <CommentsForm addNewComment={addNewComment} />
        </>
    );
}
