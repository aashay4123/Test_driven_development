import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../redux/actions";
export class UnconnectedInput extends Component {
  state = {
    currentGuess: null,
  };
  submitGuessWord(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  }
  render() {
    const context = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder="enter your guess"
          value={this.props.currentGuess}
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={(e) => this.submitGuessWord(e)}
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{context}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
