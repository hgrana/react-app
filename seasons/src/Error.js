import React from 'react';

const Error = ({ errorMessage }) => { 
  return (
    <div class="ui active dimmer">
      <div class="ui big text white text-big">{ errorMessage }</div>
    </div>
  );
}

Error.defaultProps = {
  errorMessage: "Ops, something went wrong..."
}

export default Error;
