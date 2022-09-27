import React, { FC } from 'react'
// import Task from '../task/Task'
import style from './InactiveTodoList.module.css'

const InactiveTodoList: FC = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.wrapper__inside}>
            {/* <Task/> */}
        </div>
    </div>
  )
}

export default InactiveTodoList