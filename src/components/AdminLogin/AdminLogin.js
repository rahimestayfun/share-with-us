import React from "react";
import './../../styles/AdminLogin.css'
import axios from "axios";
import { Link } from "react-router-dom";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      // isAdmin:false
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleLogin=()=>{
    const{username,password}= this.state;
    let body = {username,password}
    axios.put("/api/login",body).then(response=>{
      // console.log(response.data)
      // this.setState({isAdmin:response.data})
    })
  }
  render() {
    // console.log(this.state.isAdmin);
    return (

      <div className="login">
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={this.handleChange}
        />

       <Link to="/"> <button onClick={this.handleLogin}>LOGIN</button> </Link>
      </div>
    );
  }
}
export default AdminLogin;