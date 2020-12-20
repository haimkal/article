import  { Component } from 'react';
import './CommentList.css';
import Comment from './Comment/Comment';
class CommentList extends Component{
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="CommentList">
          <Comment avatar="https://cnet2.cbsistatic.com/img/dWtCUIwQj2YRmy_r2z0CaiAgpX8=/370x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg"
          author="Ravit Shimon" date="17.1.20" content="Love this !" />
          
          <Comment avatar="https://www.bootdey.com/img/Content/avatar/avatar7.png"
          author="James Noel" date="19.1.20" content="Too naive man..." />

          <Comment avatar="https://freesvg.org/img/Male-Avatar.png"
          author="Niv Brodi" date="20.1.20" content="Great as usual!" />  
      </div>
    );
  }
}


export default CommentList;
