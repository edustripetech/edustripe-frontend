import React from 'react';
import { PropTypes } from 'prop-types';

const Input = ({
  handleChange,
  type,
  name,
  value,
  placeholder,
  label,
  error,
  visible,
  id,
  style,
}) => {
  return (
    <>
      <div className={`input-container${error && ' error'}`}>
        <div className="re-input">
          <label>{label}</label>
          <input
            style={style}
            onChange={handleChange}
            className='input'
            type={visible ? 'text' : type}
            placeholder={placeholder}
            name={name}
            value={value}
            id={id}
          />
        </div>
      </div>
      <div className="error-div">
        {error && <div>{error}</div>}
      </div>
    </>
  );
}

Input.proptype = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  visible: PropTypes.bool,
  style: PropTypes.object,
}

Input.defaultProps = {
  id: '',
  placeholder: '',
  error: '',
  visible: false,
  style: {},
};

export default Input;
