import React from "react";
import axios from "axios";
import StoryCard from "./../StoryCard/StoryCard";
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import Header from '../Header/Header'
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      showDetailStatus: false,
      adminStatus: true,
      username: "easy",
      password: "qwe",
      searchInput:"",
    };
  }
  componentDidMount() {
    axios
      .get("/api/stories")
      .then(response => {
        // console.log(response)
        this.setState({ stories: response.data });
      })
      .catch(error => console.log(error));

    //another axios request to see if user is
    axios.get("/api/admin").then(response => {
      this.setState({ adminStatus: response.data.isAdmin });
    });
  }
  handleLogout = () => {
    const { username, password } = this.state;
    let body = { username, password };
    axios.put("/api/logout", body).then(response => {
      // console.log(response.data)
      this.setState({ adminStatus: response.data.isAdmin });
    });
  };
  handleInputChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    console.log(this.state.adminStatus);
    const { stories,searchInput } = this.state;
    let mappedStories = stories.map(el => {
      return (
        <StoryCard
          key={el.id}
          id={el.id}
          fullName={el.fullName}
          title={el.title}
          image={el.image}
          category={el.category}
          content={el.content}
        />
      );
    });

    let filteredStories = stories.filter(el=>{
      return el.category.toLowerCase().includes(searchInput.toLocaleLowerCase());
    }).map(el=>{
      return (
        <StoryCard
          key={el.id}
          id={el.id}
          fullName={el.fullName}
          title={el.title}
          image={el.image}
          category={el.category}
          content={el.content}
          searchInput={searchInput}
        />
      );
    });


    return (
      <div>
        <Header/>
        <section className="app">
          {this.state.adminStatus ? (
            <button onClick={this.handleLogout} className="admin">Logout</button>
          ) : (
            <Link to="/admin">
              <button className="admin">Admin Login</button>
            </Link>
          )}
          <div className="quote-add-container">
            <div className="quote-container">
          <p id="quote">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          </div>
          
          <Link to="/add">
            <button id="add">Would you like to share your story?</button>
          </Link>
          </div>
          <input id="search" name="searchInput" placeholder="Search for category" onChange={this.handleInputChange}></input>
        </section>
        {!searchInput? mappedStories: filteredStories}
        <Footer/>
      </div>
    );
  }
}
export default Home;
