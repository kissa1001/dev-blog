import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SocialBtns from './SocialButtons';

class PostDetail extends Component {
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
  render() {
    const post = this.props.post;
    return (
        <Card style={{cursor: 'pointer'}}>
          <CardMedia>
            <img src={`/images/${post.image}`} alt={post.image} />
          </CardMedia>
          <CardTitle title={post.title} subtitle={`${post.createdAt}`}>
            <br/>
            {this.showCategory()}
          </CardTitle>
          <CardText>
            {post.description}
          </CardText>
          <CardActions>
              <SocialBtns
              url={`${String(window.location)}/post._id`}
              media={post.image}
              image={post.image}
              subject={post.title}
              body={post.description}
              quote={post.title}
              title={post.title}
               />
          </CardActions>
        </Card>
    )
  }
}

export default PostDetail;
