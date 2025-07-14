import type { TodoListProps } from "../../Types/todo"
import TodoItem from "../TodoItem/TodoItem"
import Loader from "../UI/Loader/Loader"
import styles from "./TodoList.module.css"

const TodoList: React.FC<TodoListProps> = ({list, delPost}) => {
  return(
    <div className= {styles.container}>
      {list.length ? (
        list.map((item, index) => (
          <TodoItem
            key={item.id}
            item={item}
            index={index}
            delPost={delPost}
          />
        ))
      ) : <p>List ist leer</p>
      }

    </div>
  )
}

export default TodoList