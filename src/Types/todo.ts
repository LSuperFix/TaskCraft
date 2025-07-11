import type { ReactNode, Dispatch, SetStateAction } from 'react';

// Тип для одной задачи
export interface TodoProps {
  id: number
  taskName: string
  taskNote: string
}

// Тип для списка задач и функции удаления
export interface TodoListProps {
  list: TodoProps[]
  delPost: (post: TodoProps) => void
}

// Тип для одного элемента списка
export interface TodoItemProps {
  item: TodoProps
  index: number
  delPost: (post: TodoProps) => void
}

// Новый пост без id (для формы создания)
export type NewTodoProps = Omit<TodoProps, 'id'>

// Опции для селекта (фильтра)
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

// Ключи для сортировки
export type SortKeys = 'taskName' | 'taskNote'

// Интерфейс фильтра, который используется в хуках и компонентах
export interface Filter {
  searchQuery: string
  selectedSort: SortKeys | ''
}

// Пропсы для компонента фильтра
export interface PostFilterProps {
  filter: Filter
  setFilter: Dispatch<SetStateAction<Filter>>
  sortPost: (sort: SortKeys) => void
}

// Пропсы для модального окна
export interface MyModalProps {
  children: ReactNode
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}
