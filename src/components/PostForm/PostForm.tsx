import { useState } from 'react'
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import type { NewTodoProps } from '../../Types/todo'
import styles from './PostForm.module.css'

interface PostFormProps {
  savePost: (post: NewTodoProps) => void;
}
const PostForm:React.FC<PostFormProps> = ({savePost}) => {
  const [post, setPost] = useState({taskName:'', taskNote:''})
    const createPost = (e: React.FormEvent) => {
    e.preventDefault()
    savePost(post)
    setPost({taskName:'', taskNote:''})
  }

  return(
     <form className={styles.postForm}>
        <MyInput 
          className={styles.postFormItem}
          value={post.taskName}
          placeholder = 'Task Name' 
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPost({...post, taskName:e.target.value}) }
        />
        <MyInput 
          className={styles.postFormItem}
          value={post.taskNote}
          placeholder = 'Task Note' 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setPost({...post,taskNote: e.target.value})}
        />
        <MyButton 
          className={styles.postFormItem} 
          onClick={createPost}>
          Create Post
        </MyButton>
      </form>
  )
}

export default PostForm