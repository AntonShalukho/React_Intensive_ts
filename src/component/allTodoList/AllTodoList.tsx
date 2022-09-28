import React, { FC } from 'react'
import { useAppSelector } from '../../store/reducers/hoors'
import Task from '../task/Task'
import style from './AllTodoList.module.css'

const AllTodoList: FC = () => {
  // const [todo, setTodo] = React.useState(() => {

  // })

  const todoList = useAppSelector(state => state.todo.todoList)

  return (
    <div className={style.wrapper}>
        <div className={style.wrapper__inside}>
            {
              todoList.map(el => <Task key={el.id} todoTaskObject={el} />)
            }
        </div>
    </div>
  )
}

export default AllTodoList