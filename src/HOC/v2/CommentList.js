import React from 'react';
import withSubscription from './withSubscription';

function CommentList(props) {

    return (
      <div>
        {props.data.map((comment) => (
          <Comment comment={comment.text} key={comment.id} />
        ))}
      </div>
    );

}

const Comment = props => <div>{props.comment}</div>;

export default withSubscription(CommentList, DataSource => DataSource.getComments());
