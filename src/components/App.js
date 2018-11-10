import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;
    return (
      <div>
        {loading ? (
          <LoadingBar />
        ) : (
          <TweetPage match={{ params: { id: '8xf0y6ziyjabvozdd253nd' } }} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  };
};

export default connect(mapStateToProps)(App);
