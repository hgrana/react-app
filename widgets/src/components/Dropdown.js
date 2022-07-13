import React, { useState } from 'react'

const Dropdown = (props) => {
  const [ itemActive, setItemActive ] = useState(false);
  const [ selected, setSelected ] = useState(props.options[0]);

  const renderedOptions = props.options.map((option, index) => {
    if (selected === option) return null;

    return (
      <div key={index} className='item' onClick={() => handleClickOption(option)}>
        {option.label}
      </div>
    )
  });

  const handleClickOption = (option) => {
    setSelected(option);

    props.callback(option);
  }

  return (
    <div className='ui form'>
      <div className='field' onClick={() => setItemActive(!itemActive)}>
        <label className='label'>{props.label}</label>
        <div className={`ui selection dropdown visible`}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu transition ${itemActive ? 'visible' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;
