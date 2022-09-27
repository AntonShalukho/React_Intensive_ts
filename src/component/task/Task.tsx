import React, { useState } from 'react'
import style from './Task.module.css'
import deleteSVG from '../UI/SVGs/delete-svgrepo-com.svg'
import editSVG from '../UI/SVGs/edit-svgrepo-com.svg'
import ok from '../UI/SVGs/ok-svgrepo-com.svg'
import Input from '../UI/input/Input'
import { TodoType } from '../../store/reducers/TodoReducer'
import { useAppDispatch } from '../../store/reducers/hoors'

type TaskType = {
  children: string,
  todoTaskObject: TodoType
}

const Task: React.FC<TaskType> = ({children, todoTaskObject}) => {
  const [state, setState] = useState<string>(children)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const dispatch = useAppDispatch();

  function editTask(): void {
    setIsEdit((prev) => !prev);
    if(isEdit) {
      
    }
  }

  return (
    <div className={style.wrapper}>
        {isEdit
          ? <Input 
              value={state}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)} 
            />
          : <div>{state}</div>
        }
        <div className={style.imagesWrap}>
          <img onClick={editTask} className={style.img} src={isEdit ? ok : editSVG} alt="edit task" />
          <img className={style.img} src={deleteSVG} alt="delete task" />
        </div>
    </div>
  )
}


export default Task