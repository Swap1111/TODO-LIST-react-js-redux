import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todo/actions';
import { handleEditSubmit } from '../redux/todo/actions';

export const List = ({ editFormVisibility, editTodo, cancelUpdate }) => {

    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState('');
    const [editValue, setEditValue] = useState('');
    useEffect(() => {
        setEditValue(editTodo.todo);
    }, [editTodo])


    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj = {
            id: time,
            todo: todoValue,
            completed: false
        }
        setTodoValue('');
        dispatch(addTodo(todoObj))
    }

    const editSubmit = (e) => {
        e.preventDefault();
        let editedObj = {
            id: editTodo.id,
            todo: editValue,
            completed: false
        }
        dispatch(handleEditSubmit(editedObj))
    }
    return (
        <>
            {editFormVisibility === false ? (
                <form onSubmit={handleSubmit}>
                    <label>Add your todo list-items</label>
                    <div>
                        <input type="text" required
                            value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
                        <button type="submit" >ADD</button>
                    </div>
                </form>
            ) : (
                <form onSubmit={editSubmit}>
                    <label>Update your todo-items</label>
                    <div>
                        <input type="text" required
                            value={editValue || ""} onChange={(e) => setEditValue(e.target.value)} />
                        <button type="submit"  >UPDATE</button>
                    </div>
                    <button type="button"
                        onClick={cancelUpdate}>BACK</button>
                </form>
            )}
        </>

    )
}

