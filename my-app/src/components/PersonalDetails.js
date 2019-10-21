import React, { Component } from "react";

class PersonalDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    const { users } = this.props;
    console.log("users..." + users);
    return (
      <div color="blue">
        <h1 className="ui centered">Personal Details</h1>
        {users.map((user, index) => (
          <p> {user} !</p>
        ))}
        <input type="button" onClick={this.back} value="Back" />
        <input type="button" onClick={this.saveAndContinue} value="Next" />
      </div>
    );
  }
}

export default PersonalDetails;
