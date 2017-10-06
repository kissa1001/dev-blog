import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PostDetail from './post_detail';
import { Link } from 'react-router-dom';
import { Posts } from '../../../imports/collections/posts';
import { FlatButton } from 'material-ui';
import './style.css';

const PER_PAGE = 20;

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' }
  }

  updateSearch(e) {
    this.setState({search: e.target.value.substr(0, 20)})
  }

  componentWillMount() {
    this.page = 1;
  }

  handleButtonClick () {
    Meteor.subscribe('posts', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    console.log(this.props.posts)
    let filteredPosts = this.props.posts.filter(
      (post) => {
        return post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return(
      <div className="container">
        <div className="row">
          <div className="post-list-wrapper col-sm-9">
            <div className="post-list">
              {filteredPosts.map((post) => {
                const url = `/posts/${post._id}`;
                return (
                  <div className="col-md-6" style={{marginBottom: '2em'}} key={post._id}>
                    <Link className="post_detail_link" to={url}>
                      <PostDetail post={post}/>
                    </Link>
                  </div>
                )})
              }
            </div>
            <FlatButton
              onClick={this.handleButtonClick.bind(this)}
              label="Load More..." fullWidth={true} />
          </div>
          <div className="col-sm-3">
            <div className="input-group" style={{marginBottom: '5%', marginTop: '5%'}}>
              <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} className="form-control" placeholder="Search this blog..." />
            </div>
            <div className="short-about">
              <img className="img img-responsive rounded" width="100%" src="/images/avatar.jpg" alt="avatar"/>
              <p>Thanks for stopping by my blog! My name is Lina Nguyen and I'm a Front-End Engineer currently living in Seattle, WA</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default createContainer(() => {
  Meteor.subscribe('posts', PER_PAGE);
  return { posts: Posts.find({}, {sort: {createdAt: -1}}).fetch()}
}, PostsList);
