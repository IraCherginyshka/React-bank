import React from 'react';

const ValidFeedback = () => {
  return (
    <div className="valid-feedback valid">
      <i className="fas fa-check"></i>
    </div>
  )
}

const InvalidFeedback = ({errors}) => {
  return (
    <div className="invalid-feedback">
      <div className="invalid">
        <i className="fas fa-times"></i>
      </div> 
      {errors}
    </div>
  )
}

export {
  ValidFeedback,
  InvalidFeedback
}