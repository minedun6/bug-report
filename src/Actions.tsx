import { DotsHorizontalIcon } from "@radix-ui/react-icons";

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
import { Button } from "./components/ui/button.tsx";
import * as React from "react";
import { useGetTodosQuery } from "./store/services/todosApi.ts";
import { CommandLoading } from "cmdk";

const Actions = ({ todo }) => {
  const {
    data: todos,
    isFetching: loading,
    refetch,
  } = useGetTodosQuery(undefined, {
    refetchOnFocus: true,
  });
  const [open, setOpen] = React.useState(false);
  const items = [true, false];

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <DotsHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Assign to...</DropdownMenuItem>
          <DropdownMenuItem>Set due date...</DropdownMenuItem>
          {true && (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Apply label</DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-0">
                <Command>
                  <CommandInput
                    placeholder="Filter label..."
                    autoFocus={true}
                    className="h-9"
                  />
                  <CommandList>
                    {todos.length === 0 && (
                      <CommandEmpty>No todos found.</CommandEmpty>
                    )}
                    {loading ? (
                      <CommandLoading>
                        <p className="text-foreground">Loading ...</p>
                      </CommandLoading>
                    ) : (
                      <CommandGroup>
                        {todos &&
                          todos.map((todo) => (
                            <CommandItem
                              key={todo.id}
                              onSelect={(value) => {
                                setOpen(false);
                              }}
                            >
                              {todo.title}
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    )}
                  </CommandList>
                </Command>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )}
          <DropdownMenuItem className="text-red-600">
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
