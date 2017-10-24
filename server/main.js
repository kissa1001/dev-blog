import { Meteor } from 'meteor/meteor';
import { Posts } from '../imports/collections/posts';
import { Comments } from '../imports/collections/comments';

Meteor.startup(() => {

  Meteor.publish('posts', function(per_page) {
    return Posts.find({}, {sort: {date: -1}}), { limit: per_page });
  })
  Meteor.publish('comments', function(per_page) {
    return Comments.find({}, { limit: per_page });
  })
});

// Posts.insert({
//   "title": "React-router 3.x to 4.x migration",
//   "image": "img-1.png",
//   "createdAt": "September 21, 2017",
//   "description": "React router v4 is a complete rewrite and here is what I've learned",
//   "content": content,
// })
