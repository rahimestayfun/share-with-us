import React from "react";
import "../../styles/StoryCard.css";
// import DetailedStoryCard from "../DetailedStoryCard/DetailedStoryCard";
import { Link } from "react-router-dom";

class StoryCard extends React.Component {
  constructor() {
    super();
    this.state = {
      // showDetailStatus: false
    };
  }

  render() {
    // const { showDetailStatus } = this.state;
    const { image, title, fullName, id, content } = this.props;
    let firstSentence = content.split(".")[0];

    return (
      
      <Link to={`/stories/${id}`} className="showLink">
        <article key={id} className="storyCard">
          <figure className="story-image-container">
            <img src={image} alt="memory" id="storyImage" />
          </figure>
          <aside className="story-info-container">
            <div className="title-container">
              <h2>{title}</h2>
            </div>
            <div className="sentence-container">
              <p>{firstSentence}...</p>
            </div>
            <ul className="name-container">
              <li>
              <img
                id="avatar"
                alt="avatar"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
              </li>
              <li>
              <p id="author">{fullName}</p>
              </li>
            </ul>
          </aside>
          {/* <Link to={`/stories/${id}`}><button>Show More</button></Link> */}
        </article>
      </Link>
    );
  }
}
export default StoryCard;
