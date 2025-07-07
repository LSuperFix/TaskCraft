import { useMemo, useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import PostForm from './components/PostForm/PostForm';
import type {SortKeys} from './Types/todo';
import type { NewTodoProps, TodoProps } from './Types/todo';
import './app.css'
import PostFilter from './components/PostFilter/PostFilter';

function App() {
  const [list, setList] = useState<TodoProps[]>([
    { id: 1, taskName: 'Kaufen Brot', taskNote: 'Im Supermarkt' },
    { id: 2, taskName: 'Lernen', taskNote: 'React und TypeScript' },
    { id: 3, taskName: 'Kochen', taskNote: 'Abendessen vorbereiten' }
  ])
  const [filter, setFilter] = useState<{
    searchQuery: string;
    selectedSort: SortKeys | '';
  }>({
    searchQuery: '',
    selectedSort: ''
  })

  const sortedPost = useMemo(() => {
    if (filter.selectedSort) {
      const key = filter.selectedSort as SortKeys;
      return [...list].sort((a, b) =>
        a[key].localeCompare(b[key])
      );
    }
    return list;
  }, [filter.selectedSort, list]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter((item) => item.taskName.toLowerCase().includes(filter.searchQuery.toLowerCase()))
  }, [sortedPost, filter.searchQuery])

  const savePost = (post: NewTodoProps) => {
    setList([...list, { ...post, id: Date.now() }])
  }

  const delPost = (post: TodoProps) => {
    setList(list.filter((item) => item.id !== post.id))
  }

  const sortPost = (sort: SortKeys) => {
    setFilter({...filter, selectedSort: sort});
  }

  return (
    <div className='container'>
      <PostForm savePost={savePost} />

      <PostFilter filter = {filter} setFilter = {setFilter} sortPost = {sortPost}/>
      <TodoList list={sortedAndSearchedPosts} delPost={delPost} />
    </div>
  )
}

export default App
