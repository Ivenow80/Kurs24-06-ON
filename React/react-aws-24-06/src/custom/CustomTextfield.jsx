import React from 'react';

function CustomTextField({ label, placeholder }) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default CustomTextField;
