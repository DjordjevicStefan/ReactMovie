import React, { Component } from "react";

class Like extends Component {
  classN = () => {
    return this.props.liked === true ? "fa fa-heart-o" : "fa fa-heart";
  };

  render() {
    return (
      <div onClick={this.props.onLike}>
        <i style={{ cursor: "pointer" }} className={this.classN()} />
      </div>
    );
  }
}

export default Like;
