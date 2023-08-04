"use client";

import { useGetTodosQuery } from "./store/services/todosApi.ts";
import useRefetchAction from "./hooks/useRefetchAction.ts";
import Actions from "./Actions.tsx";

function App() {
  const {
    data: todos,
    isFetching: loading,
    refetch,
  } = useGetTodosQuery(undefined, {
    refetchOnFocus: true,
  });

  useRefetchAction(refetch);

  return (
    todos &&
    todos.map((todo) => (
      <div
        key={todo.id}
        className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center"
      >
        <p className="text-sm font-medium leading-none">
          <span className="text-muted-foreground">{todo.title}</span>
        </p>
        <Actions todo={todo} />
      </div>
    ))
  );
}

export default App;
