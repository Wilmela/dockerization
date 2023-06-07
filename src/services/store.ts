import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Store = {
  todos: TODO[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, newTitle: string) => void;
  toggleTodo: (id: number) => void;
  clearTodo: () => void;
};

export const useTodoStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        todos: [
          {
            id: 1,
            title: "First title",
            completed: false,
          },
          {
            id: 2,
            title: "Second title",
            completed: true,
          },
        ],

        addTodo: (title: string) =>
          set((state) => ({
            todos: [
              ...state.todos,
              { id: Math.floor(Math.random() * 100), title, completed: false },
            ],
          })),

        removeTodo: (id: number) =>
          set((state) => ({
            todos: state.todos.filter((todo: TODO) => todo.id !== id),
          })),
        editTodo: (id: number, newTitle: string) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, title: newTitle } : todo
            ),
          })),
        toggleTodo: (id: number) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          })),
        clearTodo: () => set({ todos: [] }),
      }),
      { name: "todo-store" }
    )
  )
);
