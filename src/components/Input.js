import React from 'react';
import classnames from 'classnames';
import {ValidFeedback, InvalidFeedback} from './Feedback';

const Input = ({ type, icon, placeholder, name, errors, onChange }) => {

  const noErrors = (errors !== undefined) && !errors;

  return (
    <div className="form-group input__group">
      <label
        className="input__label"
        htmlFor={type}>
        <i className={`fas fa-${icon}`}></i>
      </label>
      <input
        name={name}
        type={type}
        className={classnames(`form-control input mx-auto`, { 'is-invalid': errors }, { 'is-valid': noErrors })}
        id={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {noErrors && <ValidFeedback />}
      {errors && <InvalidFeedback errors={errors} />}
    </div>
  );
};

export default Input;
