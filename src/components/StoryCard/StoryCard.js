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
  showDetail = () => {
    const { showDetailStatus } = this.state;
    this.setState({ showDetailStatus: !showDetailStatus });
    console.log(showDetailStatus);
  };
  
  render() {
    // const { showDetailStatus } = this.state;
    const { image, title, name, id, content } = this.props;
    let firstSentence = content.split(".")[0];

    return (
      // <div>
      //   {showDetailStatus ? (
      //     <DetailedStoryCard
      //       id={id}
      //       name={name}
      //       title={title}
      //       image={image}
      //       // category={category}
      //       content={content}
      //       showDetail={this.showDetail}
      //     />
      //   ) : (
          <div key={id} className="storyCard">
            <img src={image} alt="memory" className="storyImage" />
            <h2>{title}</h2>
            <h4>{firstSentence}</h4>
            <p>By {name}</p>
            <Link to={`/stories/${id}`}><button>Show More</button></Link>
          </div>
      //   )}
      // </div>
    );
  }
}
export default StoryCard;
