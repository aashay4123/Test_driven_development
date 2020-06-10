import React from "react";

export default (props) => {
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
