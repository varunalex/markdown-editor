import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class Accounts extends Component {
  componentDidMount() {
    // Render the blaze accounts from then find the div
    // we just rendered in the 'render' method the place
    // the Blaze accounts from isn that div
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Go find the forms we created and destroy them
    // We need to clean up this from oueselves
    Blaze.remove(this.view);
  }
  render() {
    return (
      <div ref="container"></div>
    );
  }
}