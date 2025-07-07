import type { TodoItemProps } from "../../Types/todo"
import MyButton from "../UI/MyButton/MyButton"
import styles from './TodoItem.module.css'

const TodoItem: React.FC<TodoItemProps> = ({ item, delPost, index }) => {
  const delPostId = () => {
    delPost(item)
  }

  return (
    <div className={styles.todoItem}>
      <div className={styles.nameAndNumber}>
        <div>{index + 1}.{" "}</div>
        <div>{item.taskName}</div>
      </div>
      <div className={styles.taskText}>{item.taskNote}</div>
      <div className={styles.todoButton}>
        <MyButton onClick={delPostId}>Delete</MyButton>
      </div>
    </div>
  )
}

export default TodoItem
