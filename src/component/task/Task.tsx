import React, { useState } from 'react'
import styles from './Task.module.css'
import deleteSVG from '../UI/SVGs/delete2-svgrepo-com.svg'
import editSVG from '../UI/SVGs/edit-svgrepo-com.svg'
import ok from '../UI/SVGs/ok-svgrepo-com.svg'
import back from '../UI/SVGs/back-svgrepo-com.svg'
import Input from '../UI/input/Input'
import { DELETE_TASK, EDIT_TASK, TodoType, TOGGLE_TASK } from '../../store/reducers/TodoReducer'
import { useAppDispatch } from '../../store/hooks/Hooks'
import Img from '../UI/img/Img'

type TaskType = {
  todoTaskObject: TodoType
}

const Task: React.FC<TaskType> = ({todoTaskObject}) => {
  const todo: TodoType = todoTaskObject
  const [title, setTitle] = useState<string>(todo.title)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const dispatch = useAppDispatch();

  function editTask(): void {
    setIsEdit((prev) => !prev);
    if(isEdit) {
      dispatch(EDIT_TASK({id: todo.id, title}))
    }
  }
  function deleteTask(): void {
    dispatch(DELETE_TASK(todo))
  }
  function desable(): void {
    dispatch(TOGGLE_TASK({id: todo.id, isActive: !todo.isActive}))
  }

  return (
    <div className={styles.wrapper} style={!todo.isActive ? {backgroundColor: 'grey'} : {}}>
        {isEdit
          ? <Input 
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} 
            />
          : <div onClick={desable} className={todo.isActive ? styles.title : styles.titleDisable}>{todo.title}</div>
        }
        <div className={styles.imagesWrap}>
          {todo.isActive
            ? <Img src={isEdit ? ok : editSVG} alt="edit task" method={editTask} />
            : <Img src={back} alt="edit task" method={desable} />
          }
          
          <Img src={deleteSVG} alt="delete task" method={deleteTask} />
        </div>
    </div>
  )
}


export default Task