import React from 'react';
import { Todo } from './TodoList';

export const Item: React.FC<{
  todo: Todo;
  onDelete: (todo: Todo) => void;
  onMarkDone: (todo: Todo) => void;
}> = ({ todo, onDelete, onMarkDone }) => (
  <li>
    {todo.name}
    <button type="button" onClick={(): void => onDelete(todo)}>
      delete
    </button>
    <button type="button" onClick={(): void => onMarkDone(todo)}>
      {todo.done ? 'markUndone' : 'markDone'}
    </button>
  </li>
);
