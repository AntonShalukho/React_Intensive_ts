import React from 'react'
import nextId from 'react-id-generator'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import style from './TodoList.module.css'
import { NameInitialStateInterface } from "../../store/reducers/NameReducer"
import { useAppDispatch, useAppSelector } from '../../store/reducers/hoors'
import { ADD_TASK, TodoType } from '../../store/reducers/TodoReducer'

const TodoList: React.FC = () => {
    const [newTask, setNewTask] = React.useState('')
    const name = useAppSelector(state => state.name.name);
    const dispatch = useAppDispatch();

    function setActiveLinkStyle(boolean: boolean): string {
        return boolean ? style.activeLink : style.link 
    }
    function addTask() {
        const newTaskObject: TodoType = {
            id: nextId('task'),
            title: newTask,
            isActive: true
        }
        dispatch({type: ADD_TASK, payload: newTask})
    }

    return (
        <div className={style.wrapper}>
            <nav className={style.nav}>
                <NavLink className={({isActive}) => setActiveLinkStyle(isActive)} to='all' >All todo list</NavLink>
                <NavLink className={({isActive}) => setActiveLinkStyle(isActive)} to='active' >Active todo list</NavLink>
                <NavLink className={({isActive}) => setActiveLinkStyle(isActive)} to='inactive' >Inactive todo list</NavLink>
            </nav>
            <p className={style.name}>{name}</p>
            <div className={style.newTaskWrapper} >
                <Input 
                    type='text' 
                    placeholder='New task' 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button method={addTask} >Add</Button>
            </div>
            <Outlet/>
        </div>
    )
}

export default TodoList