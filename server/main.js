import { Meteor } from 'meteor/meteor';
import { Posts } from '../imports/collections/posts';
import { Comments } from '../imports/collections/comments';

const content = "<p>Everybody that have used React.js as UI framework have used react-router package. On August 23, 2017 the react-router v4 was released. </p><p>In v4, react-router exports the core components and functions. react-router-dom exports DOM-aware components. So basically you will use the bindings so in 99% of the web dev you will do <code>npm i --s react-router-dom</code></p><h3>The Router new structure</h3><p>In v3 of react-router all routes were centralized in one place. In v4 I had to rewrite my routes into 2 files.</p><p>Here in v3:</p><img src='/posts/Sep21-17_1.png' alt='1'><p>Here are some key concepts in v3 that are not true in v4 anymore:</p><ul><li>The router is centralized to one place.</li><li>Layout and page nesting is derived by the nesting of <Route> components.</li></ul><p>Lets take a look at same thing in v4:</p><img src='/posts/Sep21-17_2.png' alt='2'/><h3>Other changes:</h3><h4><code><Router> => <BrowserRouter></code></h4><p>Notice in v3 there was a single<code><Router></code> component with a prop <code>history</code></p><p>With React Router v4, one of the big changes is that there are a number of different router components. Each one will create a history object for you. The <BrowserRouter> creates a browser history, the <HashRouter> creates a hash history, and the <MemoryRouter> creates a memory history.</p><h4>No more <code>IndexRoute</code></h4><p>V3 routing rules were 'exclusive' which meant that only one route would win. V4 routes are 'inclusive' by default which means more than one <code>Route</code> can match and render at the same time. So if you remove <code>exact</code> both routes will be rendered same time when you visit the url.</p><h4>props.params => <code>props.match.params</code></h4><p>If you want to access the current route, in v4 the <code>props.params</code> object now is <code>props.match.params</code></p><h4><code>Redirect</code></h4><p>In v3, if you wanted to redirect from one path to another, for instance / to /welcome, you would use <code>IndexRedirect</code></p><img src='/posts/Sep21-17_3.png' alt='3'><p>In v4, its <code>Redirect</code>:</p><img src='/posts/Sep21-17_4.png' alt='4'><h4>Conclusions:</h4><ul><li>React Router v4 is a complete rewrite, but still its fairly easy to dive in with docs.</li><li>Unlike the prior versions of React Router, in v4, everything is 'just components'. Moreover, the new design pattern perfectly fits into the React way of doing things.</li></ul>"

Meteor.startup(() => {

  Meteor.publish('posts', function(per_page) {
    return Posts.find({}, { limit: per_page });
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
