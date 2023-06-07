import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import { useTodoStore } from "./services/store";

const App = () => {
  const { todos, clearTodo } = useTodoStore();
  return (
    <div className="app">
      <nav>
        <h1 style={{ fontWeight: 700, fontFamily: "Satoshi" }}>DO IT!</h1>

        <button
          type="button"
          onClick={() => window.open("https://github.com/Wilmela")}
          className="git_btn"
        >
          Github
        </button>
      </nav>

      <main>
        <section className="input_section">
          <Form />
        </section>

        <section className="todo_wrapper">
          {!todos.length ? (
            <p>You list is empty, please an item.</p>
          ) : (
            <>
              <span
                style={{
                  color: "green",
                  fontSize: "15px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  alignSelf: "flex-end",
                }}
                onClick={clearTodo}
              >
                clear List
              </span>
              {todos.map((todo: TODO) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                />
              ))}
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
