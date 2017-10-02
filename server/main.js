import { Meteor } from 'meteor/meteor';
import { Posts } from '../imports/collections/posts';
import { Comments } from '../imports/collections/comments';

Meteor.startup(() => {

  Meteor.publish('posts', function(per_page) {
    return Posts.find({}, { limit: per_page });
  })
  Meteor.publish('comments', function(per_page) {
    return Comments.find({}, { limit: per_page });
  })
});
