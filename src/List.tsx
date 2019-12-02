import React from 'react';
import { Item } from './Item';
import { Todos, Todo } from './TodoList';

export const List: React.FC<{
  todos: Todos;
  onDelete: (todo: Todo) => void;
  onMarkDone: (todo: Todo) => void;
}> = ({ todos, onDelete, onMarkDone }) => (
  <section>
    <ul>
      {Object.values(todos).map(todo => (
        <Item
          todo={todo}
          key={todo.id}
          onDelete={onDelete}
          onMarkDone={onMarkDone}
        />
      ))}
    </ul>
  </section>
);
