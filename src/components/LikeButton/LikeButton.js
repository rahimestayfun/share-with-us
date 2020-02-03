import React from "react";
import "../../styles/LikeButton.css";

function LikeButton(props) {
  console.log(props.likes);

  return (
    <div >
      <span
        className="like-button"
        onClick={props.incrementLike}
        key={props.id}
        role="img"
        aria-label="heart"
      >
        ❤️
      </span>
      <span>{props.likes}</span>
    </div>
  );
}
export default LikeButton;
