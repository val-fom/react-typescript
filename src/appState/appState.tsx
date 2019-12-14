import { useReducer } from 'react';
import { v4 } from 'uuid';
import { ADD, DELETE, COMPLETE } from '../constants';
import { Todos } from '../types';

interface State {
  todos: Todos;
}

interface DeleteAction {
  type: 'DELETE';
  payload: { id: string };
}

interface CompleteAction {
  type: 'COMPLETE';
  payload: { id: string };
}

interface AddAction {
  type: 'ADD';
  payload: { name: string };
}

const initialState = {
  todos: {},
};

function reducer(
  state: State,
  action: AddAction | DeleteAction | CompleteAction
): State {
  if (action.type === ADD) {
    const newId = v4();
    const nextTodos = {
      ...state.todos,
      [newId]: { name: action.payload.name, complete: false, id: newId },
    };
    return { todos: nextTodos };
  }

  if (action.type === DELETE) {
    const nextTodos: Todos = { ...state.todos };
    delete nextTodos[action.payload.id];
    return { todos: nextTodos };
  }

  if (action.type === COMPLETE) {
    const nextTodos: Todos = { ...state.todos };
    nextTodos[action.payload.id].complete = !nextTodos[action.payload.id]
      .complete;
    return { todos: nextTodos };
  }
  return state;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useAppState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch] as const;
}
