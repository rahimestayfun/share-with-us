import React from "react";
import axios from "axios";
import { Redirect,Link } from "react-router-dom";
import "../../styles/EditStory.css";

class EditStory extends React.Component {
  constructor() {
    super();
    this.state = {
      story: { fullName: "", title: "", content: "", image: "" ,category:"",id:""},
      redirect: false
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/stories/${id}`).then(response => {
      // console.log(response.data[0]);
      this.setState({ story: response.data[0] });
    });
  }
  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  nameChange=(e)=>{
    let story= this.state.story;
    story.fullName= e.target.value;
    this.setState({story:story})

  }
  titleChange=(e)=>{
    let story= this.state.story;
    story.title= e.target.value;
    this.setState({story:story})

  }
  contentChange=(e)=>{
    let story= this.state.story;
    story.content= e.target.value;
    this.setState({story:story})
  }
  categoryChange=(e)=>{
    let story= this.state.story;
    story.category= e.target.value;
    this.setState({story:story})
  }
  imageChange=(e)=>{
    let story= this.state.story;
    story.image= e.target.value;
    this.setState({story:story})
  }
  

  handleEdit = id => {
    // e.preventDefault(e);
    // const {story}= this.state;
    const{fullName,title,content,image,category}= this.state.story;
    let body= {fullName,title,content,image,category}
    // let body= {story}
    axios.put(`/api/stories/${id}`,body).then(response => {
      // this.setState({story:response.data,redirect:true})
      // this.setState({ story: response.data });
      this.setState({redirect:true})
      console.log(response.data)
      // this.setState({redirect:true})
    });
  };

  render() {
    const { story } = this.state;
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    // console.log(story)

    return (
      <main>
        <div className="header"></div>
      <div className="edit-container">
        <label>What's your name</label>
        <textarea
          name="fullName"
          id="nameE"
          value={story.fullName}
          onChange={this.nameChange}
        />
        <label>How was your first day at work?</label>
        <textarea
          name="content"
          id="contentE"
          value={story.content}
          onChange={this.contentChange}
        />
        <label>What is the best headline for your first day?</label>
        <textarea
          name="title"
          id="titleE"
          value={story.title}
          onChange={this.titleChange}
        />
        <label>Which sector was it?</label>
        <select name="category" id="categoryE" onChange={this.categoryChange} value={story.category}>
        <option>-----</option>
          <option >Accounting</option>
          <option >Administrative and Support Services</option>
          <option >Art</option>
          <option >Business Development/Marketing/Sales</option>
          <option >Finance</option>
          <option >Learning and Development</option>
          <option >Health Industry</option>
          <option >Hospitality and Tourism</option>
          <option >Information Technology</option>
        </select>
        <label>Do you have any image about that work?</label>
        <textarea
          name="image"
          id="imageE"
          value={story.image}
          onChange={this.imageChange}
        />
        <div className="buttons">
        <button id="save-button" onClick={() => this.handleEdit(story.id)}>Save </button>
        <Link to={`/stories/${story.id}`} className="showLink">
        <button>Cancel</button>
        </Link>
        </div>
      </div>
      </main>
    );
  }
}
export default EditStory;
