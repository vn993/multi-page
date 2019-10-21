import React, { Component } from "react";

class Confirmation extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { users } = this.props;
    const len = users.length;
    return (
      <div>
        <h1 className="ui centered">Logged in users...</h1>
        <p>{len}</p>
        <input type="button" onClick={this.back} value="Back" />
      </div>
    );
  }
}

export default Confirmation;
