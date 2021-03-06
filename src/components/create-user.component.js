import React, { Component } from 'react';
import axios from 'axios'

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
    };
  }

  onChangeUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };
    console.log(user);
    axios.post("http://localhost:5000/users/add", user)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });

    this.setState({
        username: ''
    })
  }

  render() {
    return (
        <div>
        <h3>Create New User </h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username</label>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.user}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Create Exercise Logs'
              className='btn btn-primary'
            />
            </div>
          </form>
      </div>
    );
  }
}
