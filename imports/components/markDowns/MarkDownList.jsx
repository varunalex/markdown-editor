import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker';
import { MarkDowns } from './../../collections/markdowns';

export default class MarkDownList extends Component {
  constructor(props) {
    super(props);
    this.state = { mkdowns : [] };
  }

  componentDidMount() {
    Tracker.autorun(() => {
      Meteor.subscribe('markdowns');
      const markdowns = MarkDowns.find({}).fetch();
      this.setState({ mkdowns: markdowns });
      console.log(this.state.mkdowns);
      
    });
  }

  onMkdownRemove(mkdown) {
    Meteor.call('markdown.remove', mkdown);
  }

  renderList() {
    return this.state.mkdowns.map((mkdown) => {
      return (
        <li className="list-group-item" key={mkdown._id}>
          {mkdown._id}
          <span className="pull-right">
            <button 
              className="btn btn-danger"
              onClick={() => this.onMkdownRemove(mkdown)}>
              Remove
            </button>
          </span>
        </li>
      );
    });
  }

  render() {
    return(
      <div>
        <ul className="list-group">
          Mark Downs : {this.renderList()}
        </ul>
      </div>
    );
  }
}