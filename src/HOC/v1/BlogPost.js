import React from 'react';
import dataSource from '../DataSource';

class BlogPost extends React.PureComponent {

  state = {
    blogPost: dataSource.getBlogPost(this.props.id)
  }
  
  handleChange = _ => {
    // Update component state whenever the data source changes
    this.setState({
      blogPost: dataSource.getBlogPost(this.props.id)
    });
  }

  componentDidMount() {
    // Subscribe to changes
    dataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    dataSource.removeChangeListener(this.handleChange);
  }

  render() {
    console.log('BlogPost.render()');
    return (
      <div>
        {this.state.blogPost}
      </div>
    );
  }

}

export default BlogPost;
