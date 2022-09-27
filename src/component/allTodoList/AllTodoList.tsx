import React, { FC } from 'react'
// import Task from '../task/Task'
import style from './AllTodoList.module.css'

const AllTodoList: FC = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.wrapper__inside}>
            {/* <Task/> */}
        </div>
    </div>
  )
}

export default AllTodoList