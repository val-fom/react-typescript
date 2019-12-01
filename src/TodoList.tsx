import React, { useState } from 'react';
import { v4 } from 'uuid';
import styled from 'styled-components';

type FormElem = React.FormEvent<HTMLFormElement>;

interface Todo {
  name: string;
  done: boolean;
  id: string;
}
type Todos = {
  [id: string]: Todo;
};

// TODO: extract list and todo item components
// TODO: use reducer and check list updates

export const TodoList: React.FC<{}> = () => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<Todos>({});

  const handleChange: React.ReactEventHandler = (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => setValue(ev.target.value);

  const handleSubmit = (ev: FormElem): void => {
    ev.preventDefault();
    setValue('');
    const newId = v4();
    const nextTodos = {
      ...todos,
      [newId]: { name: value, done: false, id: newId },
    };
    setTodos(nextTodos);
  };

  const handleMarkDoneClick = (id: string): void => {
    const newTodos = { ...todos };
    newTodos[id].done = !newTodos[id].done;
    setTodos(newTodos);
  };

  const handleDeleteClick = (id: string): void => {
    const newTodos = { ...todos };
    delete newTodos[id];
    setTodos(newTodos);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} required value={value} />
        <input type="submit" />
      </form>
      <section>
        <ul>
          {Object.keys(todos).map(key => (
            <li key={key}>
              {todos[key].name}
              <button
                type="button"
                onClick={(): void => handleDeleteClick(key)}
              >
                delete
              </button>
              <button
                type="button"
                onClick={(): void => handleMarkDoneClick(key)}
              >
                {todos[key].done ? 'markUndone' : 'markDone'}
              </button>
            </li>
          ))}
        </ul>
      </section>
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
