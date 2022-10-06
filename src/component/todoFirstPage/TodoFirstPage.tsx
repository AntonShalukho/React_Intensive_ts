import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks/Hooks'
import { CHANGE_NAME } from '../../store/reducers/NameReducer'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import style from './TodoFirstPage.module.css'

const TodoFirstPage: React.FC = () => {
    const [name, setName] = useState<string>('')

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function goToTodoList(): void {
        dispatch({type: CHANGE_NAME, payload: name})
        navigate('/todoList/active')
    }

    return (
        <div className={style.todo} >
            <h1 className={style.title}>Please type you todo list name</h1>
            <Input
                type='text'
                value={name}
                placeholder='Name'
                onChange={(e) => setName(e.target.value)} 
            />
            <Button
                method={goToTodoList}
            >Save
            </Button>
        </div>
    )
}

export default TodoFirstPage
