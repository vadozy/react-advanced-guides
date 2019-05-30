import React from 'react';
import DataSource from '../DataSource';

class CommentList extends React.Component {

  state = {
    // "DataSource" is some global data source
    comments: DataSource.getComments()
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange = _ => {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment.text} key={comment.id} />
        ))}
      </div>
    );
  }

}

const Comment = props => <div>{props.comment}</div>;

export default CommentList;
