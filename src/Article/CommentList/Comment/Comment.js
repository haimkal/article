import  { Component } from 'react';
import './Comment.css'

class Comment extends Component{
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="Comment">
          <img className="avatar" src={this.props.avatar} />
          <div className="name">{this.props.author}</div>
          <div>{this.props.date}</div>
          <div>{this.props.content}</div>
      </div>
    );
  }
}


export default Comment;
