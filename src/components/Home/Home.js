import React from "react";
import axios from "axios";
import StoryCard from "./../StoryCard/StoryCard";
import { Link } from "react-router-dom";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      showDetailStatus: false,
      adminStatus: true,
      username: "easy",
      password: "qwe"
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

  render() {
    console.log(this.state.adminStatus);
    const { stories } = this.state;
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
    return (
      <div>
        <section className="app">
          {this.state.adminStatus ? (
            <button onClick={this.handleLogout}>Logout</button>
          ) : (
            <Link to="/admin">
              <button>Login As Admin</button>
            </Link>
          )}
          <p className="quote">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Link to="/add">
            <button>Would you like to add your story?</button>
          </Link>
        </section>
        {mappedStories}
      </div>
    );
  }
}
export default Home;
