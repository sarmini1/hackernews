import React from "react";


class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(evt) {
    const { value } = evt.target;
    this.setState({ searchTerm: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("search form thinks searchterm is", this.state.searchTerm)
    this.props.searchStories(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="search"
          value={this.state.searchTerm}
          placeholder="Search here..."
        >
        </input>
        <button type="submit">Search!</button>
      </form>
    );
  }

}

export default SearchForm