import { Meteor } from 'meteor/meteor';
import { MarkDowns } from './../imports/collections/markdowns';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('markdowns', function(){
    return MarkDowns.find({ ownerId: this.userId } );
  });
});
