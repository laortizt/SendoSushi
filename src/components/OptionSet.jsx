import React from 'react'
import './../styles/OptionSet.css';
import OptionItem from './OptionItem';


const OptionSet = (props) => {
  const { productId, options, id, name, onOptionSelected } = props;

  const handleChange = (option) => {
    onOptionSelected(option)
  }

  return (
    <div className="option-set">
      <span className="option-set-name">{name}</span>

      <div className="option-set-options">
        {options.map(opt => 
          <OptionItem key={`${productId.toString()}-sub-${id}-option${opt.id}`}
            option={opt} 
            name={opt.name} isActive={false}
            onOptionSelected={handleChange}/>
        )}
      </div>
    </div>
  )
};

export default OptionSet;
