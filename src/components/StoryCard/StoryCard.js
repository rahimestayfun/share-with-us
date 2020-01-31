import React from "react";
import "../../styles/StoryCard.css";
import DetailedStoryCard from "../DetailedStoryCard/DetailedStoryCard";

class StoryCard extends React.Component {

  render() {
    const { image, title, name, id, content, showDetail,showDetailStatus } = this.props;
    let firstSentence = content.split(".")[0];

    return (
      <div>
        {showDetailStatus ? (
          <DetailedStoryCard
            id={id}
            name={name}
            title={title}
            image={image}
            // category={category}
            content={content}
            showDetail={showDetail}
          />
        ) : (
          <div key={id} className="storyCard">
            <img src={image} alt="memory" className="storyImage" />
            <h2>{title}</h2>
            <h4>{firstSentence}</h4>
            <p>By {name}</p>
            <button onClick={() => showDetail}>Show More</button>
          </div>
        )
      }
      </div>
    );
  }
}
export default StoryCard;
