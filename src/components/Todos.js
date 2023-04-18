import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { remove } from '../redux/todo/actions';

export const Todos = ({ handleEditClick, editFormVisibility }) => {

    const dispatch = useDispatch();


    const todos = useSelector((state) => state.operationsReducer);
    return todos.map((todo) => (
        <div key={todo.id} >
            <div style={{justifyContent:'center',alignContent:'center'}}>
                <p style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                    {todo.todo}
                </p>

                {editFormVisibility === false && (
                    <>
                        <button style={{marginRight:20}} onClick={() => handleEditClick(todo)}>EDIT</button>
                        <button onClick={() => dispatch(remove(todo.id))}>DELETE</button>
                    </>
                )}
            </div>
        </div>
    ))
}
