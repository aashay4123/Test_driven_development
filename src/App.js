import React, { Component } from "react";
import "./App.css";
import GuessedWords from "./components/GuessedWords";
import Congrats from "./components/Congrats";
import { connect } from "react-redux";
import { getSecretWords } from "./redux/actions";
import Input from "./components/Input";

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWords();
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { secretWord, success, guessWords } = state;
  return { secretWord, success, guessWords };
};

export default connect(mapStateToProps, { getSecretWords })(UnconnectedApp);
