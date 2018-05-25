import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'markdown.insert': function() {
    return MarkDowns.insert({
      createAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  }
});

export const MarkDowns = new Mongo.Collection('markdowns'); 