import React from 'react';

class PageLoader extends React.Component {
  componentDidMount() {
    let value = this.page;
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.page;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.page;
    /* ... */
  }
  render() {
    let value = this.page;
    /* render something based on the value of MyContext */
  }
}
PageLoader.contextType = page;

export default PageLoader;