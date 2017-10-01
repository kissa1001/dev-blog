import { Mongo } from 'meteor/mongo';
import Posts from './posts';

Meteor.methods({
  'comments.insert': function(info) {
    Comments.insert({
      username : info.username,
      date: new Date(),
      content: info.content,
      postId : info.postId
    });
  }
});

export const Comments = new Mongo.Collection('comments');
