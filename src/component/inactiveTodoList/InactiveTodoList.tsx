import React from 'react'
import { useAppSelector } from '../../store/hooks/Hooks'
import Task from '../task/Task'
import style from './InactiveTodoList.module.css'

const InactiveTodoList: React.FC = () => {
  const todoList = useAppSelector(state => state.todo.todoList)

  return (
    <div className={style.wrapper}>
        <div className={style.wrapper__inside}>
            {
              todoList.map(el => {
                if(!el.isActive) {
                  return <Task key={el.id} todoTaskObject={el} />
                }
              })
            }
        </div>
    </div>
  )
}

export default InactiveTodoList