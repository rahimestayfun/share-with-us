import React from "react";
import axios from "axios";
import StoryCard from "./../StoryCard/StoryCard";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      showDetailStatus: false,
      adminStatus: true,
      username: "easy",
      password: "qwe",
      searchInput: ""
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
    axios
      .get("/api/admin")
      .then(response => {
        this.setState({ adminStatus: response.data.isAdmin });
      })
      .catch(error => console.log(error));
  }
  handleLogout = () => {
    const { username, password } = this.state;
    let body = { username, password };
    axios
      .put("/api/logout", body)
      .then(response => {
        // console.log(response.data)
        this.setState({ adminStatus: response.data.isAdmin });
      })
      .catch(error => console.log(error));
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state.adminStatus);
    const { stories, searchInput } = this.state;
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

    let filteredStories = stories
      .filter(el => {
        return el.category
          .toLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      })
      .map(el => {
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
        <Header />
        <section className="app">
          {this.state.adminStatus ? (
            <button onClick={this.handleLogout} className="admin">
              Logout
            </button>
          ) : (
            <Link to="/admin">
              <button className="admin">Admin Login</button>
            </Link>
          )}
          <div className="quote-add-container">
            <div className="quote-container">
              <q id="quote">
                There is no enjoying the possession of anything valuable unless
                one has someone to share it with.
              </q>
              <cite id="quote-author">
                ― Lucius Annaeus Seneca, Letters from a Stoic
              </cite>
            </div>

            <Link to="/add">
              <button id="add">Would you like to share your story?</button>
            </Link>
          </div>
          <input
            id="search"
            name="searchInput"
            placeholder="Search for category"
            onChange={this.handleInputChange}
          ></input>
        </section>
        {!searchInput ? mappedStories : filteredStories}
        <Footer />
      </div>
    );
  }
}
export default Home;
