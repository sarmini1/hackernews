import logo from './logo.svg';
import './App.css';
import React from 'react';
import StoryList from './StoryList';

// STRING!
class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <StoryList />
      </div>
    );
  }
}

export default App;
