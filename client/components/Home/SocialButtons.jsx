import React, { Component } from 'react';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const RedditIcon = generateShareIcon('reddit');

class SocialButtons extends Component {
  render() {
    return (
      <div className="buttons_container">
        <div className="share-button-wrapper">
          <FacebookShareButton
            url={this.props.url}
            quote={this.props.title}
            className="share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
        </div>

        <div className="share-button-wrapper">
          <TwitterShareButton
            url={this.props.url}
            title={this.props.title}
            className="share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
        </div>

        <div className="share-button-wrapper">
          <GooglePlusShareButton
            url={this.props.url}
            className="share-button">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>
        </div>

        <div className="share-button-wrapper">
          <LinkedinShareButton
            url={this.props.url}
            title={this.props.title}
            windowWidth={750}
            windowHeight={600}
            className="share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
        </div>

        <div className="share-button-wrapper">
          <PinterestShareButton
            url={this.props.url}
            media={this.props.image}
            windowWidth={1000}
            windowHeight={730}
            className="share-button">
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </div>

        <div className="share-button-wrapper">
          <RedditShareButton
            url={this.props.url}
            title={this.props.title}
            windowWidth={660}
            windowHeight={460}
            className="share-button">
            <RedditIcon
              size={32}
              round />
          </RedditShareButton>
        </div>
      </div>
    );
  }
}

export default SocialButtons;
