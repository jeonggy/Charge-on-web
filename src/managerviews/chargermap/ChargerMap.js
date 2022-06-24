import React, { Component } from "react";

class Breakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isAddModalOpen: false,
    };
  }

  render() {
    return (
      <>
        <h4>현재 페이지는 준비 중입니다.</h4>
      </>
    );
  }
}

export default Breakdown;
