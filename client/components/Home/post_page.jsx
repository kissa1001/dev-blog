import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Posts } from '../../../imports/collections/posts';
import { Comments } from '../../../imports/collections/comments';
import LikeButton from 'material-ui/svg-icons/action/favorite-border';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import CreateComment from './create_comment';

class PostDetail extends Component {
  showCategory() {
    if(this.props.post.category === "Tech") {
      return <span style={{backgroundColor: '#f7b733', padding: '3px 5px', color:'#fff', borderRadius: '5px'}}>{this.props.post.category}</span>
    }
    else if(this.props.post.category === "Travel") {
      return <span style={{backgroundColor: 'rgb(147, 84, 202)', padding: '3px 5px', color:'#fff', borderRadius: '5px'}}>{this.props.post.category}</span>
    }
    else if(this.props.post.category === "Lifestyle") {
      return <span style={{backgroundColor: 'rgb(72, 191, 131)', padding: '3px 5px', color:'#fff', borderRadius: '5px'}}>{this.props.post.category}</span>
    }
    else if(this.props.post.category === "Books") {
      return <span style={{backgroundColor: 'rgb(239, 86, 79)', padding: '3px 5px', color:'#fff', borderRadius: '5px'}}>{this.props.post.category}</span>
    }
  }

  showReplyButtton(props) {
    if(this.props.post) {
      if(Meteor.userId()){
        return <CreateComment postId={this.props.post._id} />
      }
      else {
        return <p style={{color: 'rgb(223, 58, 29)'}}>You should be logged in to write a response!</p>
      }
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
                    <span style={{color: '#059ECE', fontSize: '1em'}}>{comment.username}</span>
                      <br/>
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
      Meteor.call('posts.increment_views', post._id)
      return (
        <div>
            <div className="post-details">
              <h2>{post.title}</h2>
                  <span style={{color: 'rgb(189, 189, 189)', fontSize: '0.8em'}}>{post.createdAt}</span>
                  <br/>
                  {this.showCategory()}
              </div>
              <div style={{paddingTop: '2em', paddingBottom: '2em'}} dangerouslySetInnerHTML={{__html: post.content}}></div>
        </div>
      )
    }
  }
  render() {
    return (
      <div style={{paddingBottom: '3em'}}>
        {this.renderPostDetails()}
        <div className="responses">
          <h4>{this.props.comments.length} Responses:</h4>
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
  const { postId } = props.params;
  Meteor.subscribe('posts');
  Meteor.subscribe('comments');
  return { post: Posts.findOne(postId), comments: Comments.find({postId: postId }).fetch() };
}, PostDetail);
