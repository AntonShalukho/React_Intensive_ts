import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import style from './TodoList.module.css'

export default function TodoList() {

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
            <div className={style.newTaskWrapper} >
                <Input type='text' placeholder='New task' />
                <Button method={addTask} >Add</Button>
            </div>
            <Outlet/>
        </div>
    )
}