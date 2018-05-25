import React, { Component } from 'react';
import Accounts from './Accounts.jsx';

export default class Header extends Component {
  onCreateMD(e) {
    e.preventDefault();

    Meteor.call('markdown.insert');
  }
  render () {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a href="" className="navbar-brand">MarkDown Editor</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="" onClick={this.onCreateMD.bind(this)}>Create Markdown</a>
          </li>
        </ul>
      </nav>
    );
  }
}