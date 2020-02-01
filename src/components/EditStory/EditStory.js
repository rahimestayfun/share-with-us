import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EditStory extends React.Component {
  constructor() {
    super();
    this.state = {
      story: { fullName: "", title: "", content: "", image: "" ,category:""},
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
      <div>
        <h2>What's your name</h2>
        <input
          name="fullName"
          value={story.fullName}
          onChange={this.nameChange}
        />
        <h2>How was your first day at work?</h2>
        <input
          name="content"
          value={story.content}
          onChange={this.contentChange}
        ></input>
        <h2>What is the best headline for your first day?</h2>
        <input
          name="title"
          value={story.title}
          onChange={this.titleChange}
        ></input>
        <h2>Which sector was it?</h2>
        <select name="category" onChange={this.categoryChange} value={story.category}>
          <option>-----</option>
          <option >Technology</option>
          <option>Marketing</option>
          <option>Education</option>
        </select>
        <h2>Do you have any image about that work?</h2>
        <input
          name="image"
          value={story.image}
          onChange={this.imageChange}
        ></input>
        <button onClick={() => this.handleEdit(story.id)}>Save </button>
      </div>
    );
  }
}
export default EditStory;
