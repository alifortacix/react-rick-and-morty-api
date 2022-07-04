import React from 'react'
import classNames from 'classnames'
const Button = ({text, variant = 'default'}) => {
  return (
    <button className={classNames({
        "btn btn-primary rounded" : true,
        "btn-primary" : variant === 'default',
        "btn-success" : variant === 'success',
        "btn-warning" : variant === 'warning',
        "btn-danger" : variant === 'danger',
    })}>
      {text}
    </button>
  )
}

export default Button
