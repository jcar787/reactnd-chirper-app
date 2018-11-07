import React, { Component } from 'react';
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline
} from 'react-icons/ti';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../utils/helpers';

class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();
    // add functionality later
  };

  handleLike = e => {
    e.preventDefault();
    // add functionality later
  };
  render() {
    console.log(this.props);
    const { tweet } = this.props;
    if (tweet === null) {
      return <p>This tweet doesn't exist</p>;
    }
    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      parent
    } = tweet;

    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={e => this.toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={e => this.handleLike(e)}>
              {hasLiked ? (
                <TiHeartFullOutline className="tweet-icon" color="#e0245e" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  };
};

export default connect(mapStateToProps)(Tweet);
