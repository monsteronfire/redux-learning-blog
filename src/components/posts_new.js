import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {
  render() {
    return (
      <form className='posts-new'>
        <Field
          name='title'
          component={}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
