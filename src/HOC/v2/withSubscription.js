import React from 'react';
import dataSource from '../DataSource';

// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {

    state = {
      data: selectData(dataSource, this.props)
    }

    handleChange = _ => {
      this.setState({
        data: selectData(dataSource, this.props)
      });
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      dataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      dataSource.removeChangeListener(this.handleChange);
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }

  };

}

export default withSubscription;
