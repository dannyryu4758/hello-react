import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
  };

  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  //   handleChange(e) {
  //     this.setState({
  //       message: e.target.value,
  //     });
  //   }

  //   handleClick() {
  //     alert(this.state.message);
  //     this.setState({
  //       message: '',
  //     });
  //   }
  //======================================================
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요."
          value={this.state.message}
          //   onChange={(e) => {
          //     this.setState({ message: e.target.value });
          //   }}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          //   onClick={() => {
          //     alert(this.state.message);
          //     this.setState({ message: '' });
          //   }}
          onClick={this.handleClick}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
