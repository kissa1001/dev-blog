import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'posts.insert': function(info) {
    return Posts.insert({
      createdAt: new Date(),
      content: info.content,
      title: info.title,
      category: info.category,
      comments: 0
    });
  },
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
