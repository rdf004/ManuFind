import React from 'react';
import TagsInput from 'react-tagsinput';

import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

class InputTags extends React.Component {
  constructor() {
    super()
    this.state = {tags: []}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(tags) {
    console.log(this);
    this.setState({tags})
  }

  render() {
    return <TagsInput value={this.state.tags} onChange={this.handleChange} />
  }
}

export default InputTags;