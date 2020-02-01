import React from "react";

import "./../../styles/DetailedStoryCard.css";
import axios from "axios";
import { Link,Redirect } from "react-router-dom";

class DetailedStoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story:{},
      adminStatus: false,
      redirect:false,
      // stories:[]
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/stories/${id}`).then(response => {
      // console.log(response.data);
      this.setState({ story: response.data[0]});     
    });
    axios.get("/api/admin").then(response => {
      this.setState({ adminStatus: response.data.isAdmin });
    });
  }
  // getAdminStatus=()=>{

  // }

  handleDelete=(id)=>{
    axios.delete(`/api/stories/${id}`).then(response=>{
      console.log(response);
      this.setState({redirect: true})
    });
    

  }

  render() {
    const { story } = this.state;
    if(this.state.redirect === true){
      return <Redirect to="/"/>;
    }
    console.log(story)
    return (
      <div key={story.id} className="detailedStory">
        <h2>{story.title}</h2>
        <h3>By {story.name} </h3>
        <img src={story.image} alt="random" className="detailedSImage" />
        <p>{story.content}</p>
        <Link to="/">
          <h1>X</h1>
        </Link>
        {this.state.adminStatus ? (
          <div>
            <button>Edit</button>
            <button onClick={()=>this.handleDelete(story.id)}>Delete</button>
          </div>
        ) : null}
      </div>
    );
  }
}
export default DetailedStoryCard;
