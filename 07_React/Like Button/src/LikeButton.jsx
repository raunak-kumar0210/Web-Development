import { useState } from "react";
import "./LikeButton.css";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [click, setClick] = useState(0);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        setClick(click + 1);
    };

    return (
        <div className="like-container">
            <h3>States in React</h3>
            <h4>Like Button Example</h4>
            <p className="click-count">Clicks: {click}</p>
            <div className="like-btn-container" onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart like-icon liked"></i>
                ) : (
                    <i className="fa-regular fa-heart like-icon"></i>
                )}
                <span className="like-text">{isLiked ? "Unlike" : "Like"}</span>
            </div>
        </div>
    );
}
