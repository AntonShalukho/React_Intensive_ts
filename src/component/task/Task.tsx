import React, { useState } from 'react'
import styles from './Task.module.css'
import deleteSVG from '../UI/SVGs/delete-svgrepo-com.svg'
import editSVG from '../UI/SVGs/edit-svgrepo-com.svg'
import ok from '../UI/SVGs/ok-svgrepo-com.svg'
import back from '../UI/SVGs/back-svgrepo-com.svg'
import Input from '../UI/input/Input'
import { DELETE_TASK, EDIT_TASK, TodoType, TOGGLE_TASK } from '../../store/reducers/TodoReducer'
import { useAppDispatch } from '../../store/reducers/hooks'

type TaskType = {
  todoTaskObject: TodoType
}

const Task: React.FC<TaskType> = ({todoTaskObject}) => {
  const [state, setState] = useState<TodoType>(todoTaskObject)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const dispatch = useAppDispatch();

  function editTask(): void {
    setIsEdit((prev) => !prev);
    if(isEdit) {
      dispatch(EDIT_TASK(state))
    }
  }
  function deleteTask(): void {
    dispatch(DELETE_TASK(state))
  }
  function desable(): void {
    console.log('work desable, isActive: ', state.isActive)
    setState({...state, isActive: !state.isActive})
    dispatch(TOGGLE_TASK(state))
    console.log('work desable, isActive: ', state.isActive) 
  }

  return (
    <div className={styles.wrapper} style={!state.isActive ? {backgroundColor: 'grey'} : {}}>
        {isEdit
          ? <Input 
              value={state.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState((prev) => ({...prev, title: e.target.value}))} 
            />
          : <div onClick={state.isActive ? desable : (): void => {}} className={state.isActive ? styles.title : styles.titleDisable}>{state.title}</div>
        }
        <div className={styles.imagesWrap}>
          {state.isActive
            ? <img onClick={editTask} className={styles.img} src={isEdit ? ok : editSVG} alt="edit task" />
            : <img onClick={desable} className={styles.img} src={back} alt="return task" />
          }
          
          <img onClick={deleteTask} className={styles.img} src={deleteSVG} alt="delete task" />
        </div>
    </div>
  )
}


export default Task