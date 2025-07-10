import { useEffect, useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import PostForm from './components/PostForm/PostForm'
import type { NewTodoProps, TodoProps, SortKeys, Filter } from './Types/todo'
import './app.css'
import PostFilter from './components/PostFilter/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/MyButton/MyButton'
import { usePosts } from './hooks/usePosts'
import PostService from './API/PostService'

function App() {
  const [list, setList] = useState<TodoProps[]>([])

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

const fetchPosts = async () => {
  const response = await PostService.getAll()
  if (!response) return
  const adaptedData: TodoProps[] = response.data.map((post: any) => ({
    id: post.id,
    taskName: post.title,      // title -> taskName
    taskNote: post.body        // body -> taskNote
  }))
  setList(adaptedData)
}


  useEffect(() => {
    fetchPosts()
  }, [])

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
