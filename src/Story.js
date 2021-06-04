import React from "react"

/**
 * Story 
 *  props: {storyObj} - single story 
 *  state: none
 */
class Story extends React.Component {

  constructor(props) {
    super(props);
    this.storyObj = props.storyObj
  }
  
  render(){
    return (
      <a href={this.storyObj.url}>{this.storyObj.title}</a>
    )
  }

}

export default Story;