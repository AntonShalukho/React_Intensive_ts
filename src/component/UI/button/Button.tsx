import React, { FC } from 'react'
import { TodoType } from '../../../store/reducers/TodoReducer'
import style from './Button.module.css'

type ButtonType = {
  children: string,
  method: () => void,
}

const Button: FC<ButtonType> = ({children, method}) => {



  return (
    <button onClick={method} className={style.button} >{children}</button>
  )
}

export default Button