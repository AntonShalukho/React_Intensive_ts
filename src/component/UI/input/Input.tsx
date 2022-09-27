import React from 'react'
import style from './Input.module.css'

type InputType = {
  type?: string,
  placeholder?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputType> = ({...props}) => {
  return (
    <input {...props} className={style.input} />
  )
}

export default Input