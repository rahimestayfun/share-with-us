import React from "react";
import './../../styles/AdminLogin.css'
class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
//   handleLogin=()=>{


//   }
  render() {
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
        <button>LOGIN</button>
      </div>
    );
  }
}
export default AdminLogin;
