export interface TodoProps {
  id: number
  taskName: string
  taskNote: string
}

export interface TodoListProps {
   list:TodoProps[]
   delPost: (post: TodoProps) => void
}


export interface TodoItemProps {
  item: TodoProps
  index: number
  delPost: (post: TodoProps) => void
}

export type NewTodoProps = Omit<TodoProps, 'id'>

export interface OptionProps {
  name: string
  value: string
}

export interface OptionsProps {
  options: OptionProps[]
  defaultValue: string
  valueSelectedSort: SortKeys | ''
  changeSelection: (sort: SortKeys) => void
}

export type SortKeys = 'taskName' | 'taskNote'

interface Filter {
  searchQuery: string
  selectedSort: SortKeys | ''
}

export interface PostFilterProps {
  filter: Filter
  setFilter: React.Dispatch<React.SetStateAction<Filter>>
  sortPost: (sort: SortKeys) => void
}