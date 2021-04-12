import React from 'react'
import './../styles/OptionItem.css';

const OptionItem = (props) => {
  const { option, isActive, name, onOptionSelected } = props;

  const handleChange = () => {
    onOptionSelected(option)
  }

  return (
    <div className="option-item">
      <input type="checkbox" name={'opt-name-' + name.toLowerCase()} id="opt-name"
        checked={isActive} onChange={handleChange} disabled={true}/>
      <label htmlFor={'opt-name-' + name.toLowerCase()}>{name}</label>
    </div>
  )
};

export default OptionItem;
