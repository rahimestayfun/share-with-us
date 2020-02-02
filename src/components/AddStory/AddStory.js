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
      <main>
        <div className="header"></div>
      <form className="formContainer">
        {/* <h2>Let's Start</h2> */}
        <label htmlFor="name">What's your name? </label>
        <textarea type="text" name="fullName" id="name" onChange={this.handleInputChange} value={this.state.fullName} ></textarea>
        <label htmlFor="feeling">How was your first day at work?</label>
        <textarea name="content" id="content" onChange={this.handleInputChange} value={this.state.content}></textarea>
        <label htmlFor="sentence">What is the best title for your first day?</label>
        <textarea name="title" id="title" onChange={this.handleInputChange} value={this.state.title}></textarea>
        <label htmlFor="category">Which sector was it?</label>
        <select name="category" id="category" onChange={this.handleInputChange} value={this.state.category}>
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
        <label htmlFor="dd">Which image represents that day?</label>
        <textarea id="image" onChange={this.handleInputChange} name="image" value={this.state.image}></textarea>
        <button onClick={this.handleAdd} id="add-button">Share</button>
      </form>
      </main>
    );
  }
}
export default AddStory;
