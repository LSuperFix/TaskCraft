import { useMemo, useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import PostForm from './components/PostForm/PostForm';
import MySelect from './components/UI/MySelect/MySelect';
import type {SortKeys} from './Types/todo';
import type { NewTodoProps, TodoProps } from './Types/todo';
import './app.css'
import MyInput from './components/UI/MyInput/MyInput';

function App() {
  const [list, setList] = useState<TodoProps[]>([
    { id: 1, taskName: 'Kaufen Brot', taskNote: 'Im Supermarkt' },
    { id: 2, taskName: 'Lernen', taskNote: 'React und TypeScript' },
    { id: 3, taskName: 'Kochen', taskNote: 'Abendessen vorbereiten' }
  ])

  const [searchQuery, setSearchQuery] = useState('')

  const [selectedSort, setSelectedSort] = useState<SortKeys | ''>('')

  const sortedPost = useMemo(() => {
    console.log('Введена буква в поиск')
    if(selectedSort) {
      return [...list].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
      return list
  }, [selectedSort, list])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter((item) => item.taskName.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [sortedPost, searchQuery])

  const savePost = (post: NewTodoProps) => {
    setList([...list, { ...post, id: Date.now() }])
  }

  const delPost = (post: TodoProps) => {
    setList(list.filter((item) => item.id !== post.id))
  }

  const sortPost = (sort: SortKeys) => {
    setSelectedSort(sort);
  }

  return (
    <div className='container'>
      <PostForm savePost={savePost} />

      <MySelect
        options={[
          { name: 'Nach Namen', value: 'taskName' },
          { name: 'Nach Beschreibung', value: 'taskNote' },
        ]}
        defaultValue="Sortierung"
        changeSelection={sortPost} 
        valueSelectedSort={selectedSort}
      />
      
      <MyInput 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Suchen'
      />
      <TodoList list={sortedAndSearchedPosts} delPost={delPost} />
    </div>
  )
}

export default App
