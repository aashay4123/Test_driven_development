import React from "react";
import propTypes from "prop-types";

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulation you guessed right !!!!!!!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
Congrats.propTypes = {
  success: propTypes.bool.isRequired,
};
export default Congrats;
