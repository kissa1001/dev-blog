import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'posts.increment_comments': function(postId) {
    Posts.update({
        _id: postId.postId
      },
      {
        $inc: {
          comments: 1
        }
      }
    )
  }
});

export const Posts = new Mongo.Collection('posts');
