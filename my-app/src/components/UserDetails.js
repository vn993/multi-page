import React, { Component } from "react";

class UserDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div color="green">
        <h1 className="ui centered">Login Details</h1>
        <div>
          <label>User Name</label>
          <input
            type="text"
            placeholder="User Name"
            onChange={this.props.handleChange("userName")}
            defaultValue={values.userName}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            onChange={this.props.handleChange("email")}
            defaultValue={values.email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={this.props.handleChange("Password")}
            defaultValue={values.Password}
          />
        </div>
        <input type="button" onClick={this.saveAndContinue} value="Next" />
      </div>
    );
  }
}

export default UserDetails;
