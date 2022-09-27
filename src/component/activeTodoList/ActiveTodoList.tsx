import React, { FC } from 'react'
import Task from '../task/Task'
import style from './ActiveTodoList.module.css'

const ActiveTodoList: FC = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.wrapper__inside}>
            {/* <Task/> */}
        </div>
    </div>
  )
}

export default ActiveTodoList
