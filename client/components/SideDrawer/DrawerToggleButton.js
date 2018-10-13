import React from 'react';

const drawerToggleButton = props => (
  <button type="submit" className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

export default drawerToggleButton;
