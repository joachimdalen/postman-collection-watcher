import * as React from 'react';
import '../app.global.css';
export default class App extends React.Component {
  render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}
