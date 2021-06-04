import React from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

class StoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { stories: [] };
    this.searchStories = this.searchStories.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await axios
        .get(`https://hn.algolia.com/api/v1/search?query=react`);

      this.setState({ stories: response.data.hits });
      console.log("response from API is", response.data.hits);
    } catch (err) {
      console.log("error occurred", err);
    }
  }

  async searchStories(searchTerm) {
    try {
      console.log("")
      const response = await axios
        .get(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`);

      this.setState({ stories: response.data.hits });
      console.log("response from API is", response);
    } catch (err) {
      console.log("error occurred", err);
    }
  }

  render() {
    return (
      <div>
        <SearchForm
          searchStories={this.searchStories}>
        </SearchForm>
        <ul>
          {this.state.stories.map(story => <li key={story.objectID}>{story.title}</li>)}
        </ul>
      </div>
    );
  }

}

export default StoryList;

//           searchTerm={this.state.searchTerm}
//        