import { useState } from 'react';
import { List } from "./components/List";
import { Todos } from "./components/Todos";
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todo/actions';


function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState('');
  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (
    <div >
      <br></br>
      <List editFormVisibility={editFormVisibility} editTodo={editTodo}
        cancelUpdate={cancelUpdate} />
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
      {todos.length > 1 && (
        <button style={{marginTop:20}}
          onClick={() => dispatch(deleteAll())} >DELETE ALL</button>
      )}
    </div>
  );
}

export default App;
