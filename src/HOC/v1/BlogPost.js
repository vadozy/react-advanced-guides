import React from 'react';
import DataSource from '../DataSource';

class BlogPost extends React.Component {

  state = {
    blogPost: DataSource.getBlogPost(this.props.id)
  }
  
  handleChange = _ => {
    // Update component state whenever the data source changes
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  render() {
    return (
      <div>
        {this.state.blogPost}
      </div>
    );
  }

}

export default BlogPost;
