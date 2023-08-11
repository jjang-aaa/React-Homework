import { useState } from 'react';
import unChecked from '../assets/isChecked=false.png';
import checked from '../assets/isChecked=true.png';

function CheckBox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkBoxContainer">
      <img
        src={isChecked ? checked : unChecked}
        alt={isChecked ? '선택 된 상태' : '선택 안된 상태'}
        onClick={toggleCheck}
        className="checkBoxImage"
      />
      <p className="checkBoxText">{props.label}</p>
    </div>
  );
}

export default CheckBox;
