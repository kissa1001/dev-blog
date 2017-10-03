import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Posts } from '../../../imports/collections/posts';
import { Comments } from '../../../imports/collections/comments';
import LikeButton from 'material-ui/svg-icons/action/favorite-border';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import NewComment from './create_comment';
import SocialBtns from './SocialButtons';
var Highlight = require('react-highlight');
import './agate.css';

class PostPage extends Component {
  showCategory() {
    if(this.props.post.category === "Tech") {
      return <span style={{backgroundColor: '#f7b733', padding: '3px 5px', color:'#fff', borderRadius: '5px'}}><i className="fa fa-code" aria-hidden="true"></i> {this.props.post.category}</span>
    }
    else if(this.props.post.category === "Travel") {
      return <span style={{backgroundColor: 'rgb(147, 84, 202)', padding: '3px 5px', color:'#fff', borderRadius: '5px'}}><i className="fa fa-globe" aria-hidden="true"></i> {this.props.post.category}</span>
    }
    else if(this.props.post.category === "Lifestyle") {
      return <span style={{backgroundColor: 'rgb(72, 191, 131)', padding: '3px 5px', color:'#fff', borderRadius: '5px'}}><i className="fa fa-heart" aria-hidden="true"></i> {this.props.post.category}</span>
    }
    else if(this.props.post.category === "Books") {
      return <span style={{backgroundColor: 'rgb(239, 86, 79)', padding: '3px 5px', color:'#fff', borderRadius: '5px'}}><i className="fa fa-book" aria-hidden="true"></i> {this.props.post.category}</span>
    }
  }

  showReplyButtton(props) {
    if(this.props.post) {
        return <NewComment postId={this.props.post._id} />
    }
  }

  renderComments() {
    if(this.props.comments.length !== 0) {
      const comments = this.props.comments;
      return (
        comments.map((comment, i) => {
          return (
            <div className="card" key={i} style={{marginTop: '1em'}}>
              <div className="card-header">
                <div style={{color: '#059ECE', fontSize: '1em'}} dangerouslySetInnerHTML={{__html: comment.username}}></div>
                    <span style={{color: 'rgb(189, 189, 189)', fontSize: '0.8em'}}>{comment.date.toString()}</span>
                </div>
              <div className="card-block">
                <div dangerouslySetInnerHTML={{__html: comment.content}}></div>
              </div>
            </div>
          )
        })
      )
    }
  }

  renderPostDetails() {
    if(this.props.post) {
      const post = this.props.post;
      return (
        <div className="container">
            <div className="post-details">
              <h2>{post.title}</h2>
              {this.showCategory()}
              <span style={{color: 'rgb(189, 189, 189)', fontSize: '0.8em'}}> {post.createdAt}</span>
              <br/>
                <SocialBtns
                url={`${String(window.location)}`}
                media={post.image}
                image={post.image}
                subject={post.title}
                body={post.content}
                quote={post.title}
                title={post.title}
                 />
              </div>
              <div style={{paddingTop: '2em', paddingBottom: '2em'}} dangerouslySetInnerHTML={{__html: post.content}}></div>
        </div>
      )
    }
  }
  render() {
    console.log(this.props.post)
    console.log(this.props.comments)
    return (
      <div className="post-page" style={{paddingBottom: '3em'}}>
        {this.renderPostDetails()}
        <div className="responses">
          <h4>{this.props.comments.length} Comments:</h4>
          {this.showReplyButtton()}
        </div>
        <div className="comments-box">
          {this.renderComments()}
        </div>
      </div>
    )
  }
}

export default createContainer((props) => {
  const postId = props.match.params.postId;
  Meteor.subscribe('posts');
  Meteor.subscribe('comments');
  return { post: Posts.findOne(postId), comments: Comments.find({postId: postId }).fetch() };
}, PostPage);
