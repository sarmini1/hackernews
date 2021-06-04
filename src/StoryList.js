import React from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Story from "./Story"


/**
 * StoryList 
 *  props: none
 * 
 *  state:
 *    stories - array of story objects
 *    
 * App --> StoryList --> SearchForm & Story
 */
class StoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { stories: [] };
    this.searchStories = this.searchStories.bind(this);
  }
  // when component mounts, make API call to get base story state 
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

  // when user submits search form, reset story state to API response 
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
          {this.state.stories.map(story =>
            <li key={story.objectID} >
              <Story storyObj={story} />
            </li>
          )}
        </ul>
      </div>
    );
  }

}

export default StoryList;
