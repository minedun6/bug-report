"use client";

import * as React from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetTodosQuery } from "./store/services/todosApi.ts";
import { CommandLoading } from "cmdk";
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

  return todos.map((todo) => (
    <div
      key={}
      className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center"
    >
      <p className="text-sm font-medium leading-none">
        <span className="text-muted-foreground">{todo.title}</span>
      </p>
      <Actions />
    </div>
  ));
}

export default App;
