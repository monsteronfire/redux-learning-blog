import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className='posts-index'>
        Posts Index
      </div>
    )
  }
}

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
