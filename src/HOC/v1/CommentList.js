import React from 'react';
import dataSource from '../DataSource';

class CommentList extends React.Component {

  state = {
    // "dataSource" is some global data source singleton
    comments: dataSource.getComments()
  }

  componentDidMount() {
    // Subscribe to changes
    dataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    dataSource.removeChangeListener(this.handleChange);
  }

  handleChange = _ => {
    // Update component state whenever the data source changes
    this.setState({
      comments: dataSource.getComments()
    });
  }

  render() {
    console.log('CommentList.render()');
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
