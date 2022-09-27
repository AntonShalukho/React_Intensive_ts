import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeName } from '../../store/slices/NameSlice'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import style from './TodoFirstPage.module.css'

const TodoFirstPage: FC = () => {
    const [name, setName] = useState<string>('')

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const changeNameSelector = useSelector(changeName)

    function goToTodoList(): void {
        dispatch(changeName(name))
        navigate('/todoList')
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
