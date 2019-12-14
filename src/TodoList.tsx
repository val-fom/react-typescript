import React from 'react';
import styled from 'styled-components';
import { Form } from './components/Form';
import { List } from './components/List';
import { ADD, DELETE, COMPLETE } from './constants';
import { useAppState } from './appState';
import { Todo } from './types/types';

export const TodoList: React.FC<{}> = () => {
  const [state, dispatch] = useAppState();

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
