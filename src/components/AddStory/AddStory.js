import React from "react";
import "../../styles/AddStory.css";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class AddStory extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      title:"",
      content:"",
      image:"",
      category:"",
      redirect: false
    };
  }
  handleInputChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleAdd=(e)=>{
    e.preventDefault();
    let {fullName,title,content,image,category}= this.state;
    let newStory = {fullName,title,content,image,category};
    axios.post('/api/stories',newStory).then(() => {
      this.setState({redirect:true})
    })
    
  }


  render() {
    if(this.state.redirect === true){
      return <Redirect to="/" />;
    }
    return (
      <form className="formContainer">
        <label htmlFor="name">What's your name</label>
        <input type="text" name="fullName" placeholder="full name" onChange={this.handleInputChange} value={this.state.fullName} />
        <label htmlFor="feeling">How was your first day at work?</label>
        <textarea name="content" onChange={this.handleInputChange} value={this.state.content}></textarea>
        <label htmlFor="sentence">
          What is the best headline for your first day?
        </label>
        <textarea name="title" onChange={this.handleInputChange} value={this.state.title}></textarea>
        <label htmlFor="category">Which sector was it?</label>
        <select name="category" onChange={this.handleInputChange} value={this.state.category}>
          <option>-----</option>
          <option >Technology</option>
          <option >Marketing</option>
          <option  name="category"  >Education</option>
        </select>
        <label htmlFor="dd">Do you have any image about that work?</label>
        <textarea onChange={this.handleInputChange} name="image" value={this.state.image}></textarea>
        <button onClick={this.handleAdd}> Let's share your story with others.</button>
      </form>
    );
  }
}
export default AddStory;
