import React from "react";
import Header from '../Header/Header';
import Footer from "../Footer/Footer"
import "../../styles/AddStory.css";
import axios from 'axios';
import Recaptcha from 'react-recaptcha';
import {Redirect,Link} from 'react-router-dom';
class AddStory extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      title:"",
      content:"",
      image:"",
      category:"",
      redirect: false,
      isVerified:false
    };
  }
  handleInputChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleAdd=(e)=>{
    e.preventDefault();
    let {fullName,title,content,image,category,isVerified}= this.state;
    let newStory = {fullName,title,content,image,category};
    if(isVerified){
      axios.post('/api/stories',newStory).then(() => {
        this.setState({redirect:true})
      })
    }else{
      alert("Please, verify that you're a human!")
    }
  }
  recaptchaLoaded=()=>{
    console.log("captcha successfully loaded.")
  }
  verifyRecaptcha=(response)=>{
    if(response){
      this.setState({isVerified:true})
    }
  }

  render() {
    if(this.state.redirect === true){
      return <Redirect to="/" />;
    }
    return (
      <main>
        {/* <div className="header"></div> */}
        <Header/>
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
          <option >Architecture and Construction</option>
        </select>
        <label htmlFor="dd">Which image represents that day?</label>
        <textarea id="image" onChange={this.handleInputChange} name="image" value={this.state.image}></textarea>
        <Recaptcha
             sitekey="6LctW9UUAAAAAM9fMF7QezV7g39PjF3UMSnmkePa"
             render="explicit"
             onloadCallback={this.recaptchaLoaded}
             verifyCallback={this.verifyRecaptcha}
        />
        <div className="button-list">
        <button onClick={this.handleAdd} id="add-button">Share</button>
        <Link to="/"><button id="cancel-button">Cancel</button></Link>
        </div>
      </form>
      <Footer/>
      </main>
    );
  }
}
export default AddStory;
