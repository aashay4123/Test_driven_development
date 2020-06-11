import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../redux/actions";
export class UnconnectedInput extends Component {
  render() {
    const context = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder="enter your guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={() => {
            this.props.guessWord("train");
          }}
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
