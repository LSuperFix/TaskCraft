import { useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import PostForm from './components/PostForm/PostForm'
import type { NewTodoProps, TodoProps, SortKeys, Filter } from './Types/todo'
import './app.css'
import PostFilter from './components/PostFilter/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/MyButton/MyButton'
import { usePosts } from './hooks/usePosts'

function App() {
  const [list, setList] = useState<TodoProps[]>([
    { id: 1, taskName: 'Kaufen Brot', taskNote: 'Im Supermarkt' },
    { id: 2, taskName: 'Lernen', taskNote: 'React und TypeScript' },
    { id: 3, taskName: 'Kochen', taskNote: 'Abendessen vorbereiten' }
  ])

  const [filter, setFilter] = useState<Filter>({
    searchQuery: '',
    selectedSort: ''
  })

  const [visible, setVisible] = useState(false)

  const sortedAndSearchedPosts = usePosts(
    filter.searchQuery,
    list,
    filter.selectedSort
  )

  const savePost = (post: NewTodoProps) => {
    setList([...list, { ...post, id: Date.now() }])
    setVisible(false)
  }

  const delPost = (post: TodoProps) => {
    setList(list.filter((item) => item.id !== post.id))
  }

  const sortPost = (sort: SortKeys) => {
    setFilter({ ...filter, selectedSort: sort })
  }

  return (
    <div className='container'>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm savePost={savePost} />
      </MyModal>

      <MyButton onClick={() => setVisible(true)}>
        Aufgabe erstellen
      </MyButton>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
        sortPost={sortPost}
      />

      <TodoList list={sortedAndSearchedPosts} delPost={delPost} />
    </div>
  )
}

export default App
