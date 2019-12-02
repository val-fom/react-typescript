import React, { useState } from 'react';
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

// TODO: use reducer and check list updates

export const TodoList: React.FC<{}> = () => {
  const [todos, setTodos] = useState<Todos>({});

  const addTodo = (name: string): void => {
    const newId = v4();
    const nextTodos = {
      ...todos,
      [newId]: { name, complete: false, id: newId },
    };
    setTodos(nextTodos);
  };

  const handleComplete = (todo: Todo): void => {
    const newTodos: Todos = { ...todos };
    newTodos[todo.id].complete = !newTodos[todo.id].complete;
    setTodos(newTodos);
  };

  const handleDelete = (todo: Todo): void => {
    const newTodos: Todos = { ...todos };
    delete newTodos[todo.id];
    setTodos(newTodos);
  };

  return (
    <Container>
      <Form onSubmit={addTodo} />
      <List todos={todos} onDelete={handleDelete} onComplete={handleComplete} />
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
