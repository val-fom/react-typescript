import React, { memo } from 'react';
import { Todo } from './TodoList';

export const Item: React.FC<{
  todo: Todo;
  onDelete: (todo: Todo) => void;
  onComplete: (todo: Todo) => void;
}> = memo(function Item({ todo, onDelete, onComplete }) {
  return (
    <li>
      {todo.name}
      <button type="button" onClick={(): void => onDelete(todo)}>
        delete
      </button>
      <button type="button" onClick={(): void => onComplete(todo)}>
        {todo.complete ? 'incomplete' : 'complete'}
      </button>
    </li>
  );
});
