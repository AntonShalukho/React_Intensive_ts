import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoFirstPage from './component/todoFirstPage/TodoFirstPage';
import TodoList from './component/todoList/TodoList';
import AllTodoList from './component/allTodoList/AllTodoList';
import ActiveTodoList from './component/activeTodoList/ActiveTodoList';
import InactiveTodoList from './component/inactiveTodoList/InactiveTodoList';
import ErrorPage from './component/errorPage/ErrorPage';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='' element={<TodoFirstPage/>} />
        <Route path='todoList' element={<TodoList/>} >
          <Route path='' element={<ActiveTodoList/>} />
          {/* <Route path='all' element={<AllTodoList/>} /> */}
          <Route path='active' element={<ActiveTodoList/>} />
          <Route path='inactive' element={<InactiveTodoList/>} />
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
