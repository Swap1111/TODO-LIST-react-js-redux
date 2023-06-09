import { ADD_TODO } from "../actions";
import { REMOVE_TODO } from "../actions";
import { DELETE_ALL } from "../actions";
import { UPDATE_TODO } from "../actions";
const initialState = []
export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo) => todo.id !== action.payload);
            return filteredTodos;
        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray = [];
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedArray.push(item)
            })
            return updatedArray;
        default: return state;
    }

}