import React from 'react';
import withSubscription from './withSubscription';

function BlogPost(props) {

    return (
      <div>
        {props.data}
      </div>
    );

}

export default withSubscription(BlogPost, (DataSource, props) => {
  return DataSource.getBlogPost(props.id)
});
