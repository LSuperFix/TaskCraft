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
import Loader from './components/UI/Loader/Loader'
import { useFetching } from './hooks/useFetching'
import { getPageCount, getPagesArray } from './utils/pages'
import Pagination from './components/UI/Pagination/Pagination'

function App() {
  const [list, setList] = useState<TodoProps[]>([])
  const [filter, setFilter] = useState<Filter>({
    searchQuery: '',
    selectedSort: ''
  })
  const [visible, setVisible] = useState(false)
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const pagesArray = getPagesArray(totalPage)

  const sortedAndSearchedPosts = usePosts(
    filter.searchQuery,
    list,
    filter.selectedSort
  )

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
  const response = await PostService.getAll(limit, page)
  if (!response) return
  const adaptedData: TodoProps[] = response.data.map((post: any) => ({
    id: post.id,
    taskName: post.title,      // title -> taskName
    taskNote: post.body        // body -> taskNote
  }))
  setList(adaptedData)
  const totalCount = Number(response.headers['x-total-count'])
  setTotalPage(getPageCount(totalCount, limit))
  })

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

  useEffect(() => {
    fetchPosts()
  }, [page])

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
      {postError && <h1>ERROR ${postError}</h1>}
      { isLoading
        ? <Loader />
        : <TodoList list={sortedAndSearchedPosts} delPost={delPost} />
      }

      <Pagination pagesArray = {pagesArray} page = {page} setPage = {setPage} />
    </div>
  )
}

export default App
