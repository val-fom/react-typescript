import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import styled from 'styled-components';
import { Form } from './Form';
import { List } from './List';

export interface Todo {
  name: string;
  complete: boolean;
  id: string;
}

export type Todos = {
  [id: string]: Todo;
};

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

const ADD = 'ADD';
const DELETE = 'DELETE';
const COMPLETE = 'COMPLETE';

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

export const TodoList: React.FC<{}> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = (name: string): void =>
    dispatch({ type: ADD, payload: { name } });

  const handleDelete = (todo: Todo): void =>
    dispatch({ type: DELETE, payload: { id: todo.id } });

  const handleComplete = (todo: Todo): void =>
    dispatch({ type: COMPLETE, payload: { id: todo.id } });

  return (
    <Container>
      <Form onSubmit={handleAdd} />
      <List
        todos={state.todos}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;
