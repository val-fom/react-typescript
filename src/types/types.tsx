export interface Todo {
  name: string;
  complete: boolean;
  id: string;
}

export type Todos = {
  [id: string]: Todo;
};
