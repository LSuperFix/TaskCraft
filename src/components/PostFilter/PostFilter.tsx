import type { PostFilterProps } from "../../Types/todo"
import MyInput from "../UI/MyInput/MyInput"
import MySelect from "../UI/MySelect/MySelect"
import styles from './PostFilter.module.css'

const PostFilter: React.FC<PostFilterProps> = ({filter, setFilter, sortPost}) => {
  return(
    <div className={styles.postFilter}>
      <MySelect
        options={[
          { name: 'Nach Namen', value: 'taskName' },
          { name: 'Nach Beschreibung', value: 'taskNote' },
        ]}
        defaultValue="Sortierung"
        changeSelection={sortPost} 
        valueSelectedSort={filter.selectedSort}
      />
      <MyInput 
        value={filter.searchQuery}
        onChange={(e) => setFilter({...filter, searchQuery: e.target.value})}
        placeholder='Suchen'
      />
    </div>
  )
}
export default PostFilter