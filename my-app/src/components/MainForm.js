import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";

class MainForm extends Component {
  state = {
    step: 1,
    userName: "",
    email: "",
    password: "",
    users: []
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });

    let userValue = [...this.state.users];

    userValue.push(this.state.userName);
    let uniqueArray = [];

    userValue.forEach(function(items) {
      if (uniqueArray.indexOf(items) === -1) {
        uniqueArray.push(items);
      }
    });
    this.setState(
      state => ({ users: uniqueArray }),
      () => {
        console.log("updated array.....", this.state.users);
      }
    );
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const { userName, email, password, users } = this.state;
    const values = { userName, email, password, users };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            users={this.state.users}
          />
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            users={this.state.users}
          />
        );
    }
  }
}

export default MainForm;
