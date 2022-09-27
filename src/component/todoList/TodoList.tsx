import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import style from './TodoList.module.css'
import { NameInitialStateInterface } from "../../store/reducers/NameReducer"

const TodoList: FC = () => {
    const name = useSelector((state => state.))

    function setActiveLinkStyle(boolean: boolean): string {
        return boolean ? style.activeLink : style.link 
    }
    function addTask() {

    }

    return (
        <div className={style.wrapper}>
            <nav className={style.nav}>
                <NavLink className={({isActive}) => setActiveLinkStyle(isActive)} to='all' >All todo list</NavLink>
                <NavLink className={({isActive}) => setActiveLinkStyle(isActive)} to='active' >Active todo list</NavLink>
                <NavLink className={({isActive}) => setActiveLinkStyle(isActive)} to='inactive' >Inactive todo list</NavLink>
            </nav>
            <p>{name}</p>
            <div className={style.newTaskWrapper} >
                <Input type='text' placeholder='New task' />
                <Button method={addTask} >Add</Button>
            </div>
            <Outlet/>
        </div>
    )
}

export default TodoList