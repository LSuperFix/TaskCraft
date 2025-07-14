import styles from './Pagination.module.css'

import MyButton from '../MyButton/MyButton'

interface PaginationProps {
  pagesArray: number[]
  page: number
  setPage: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({pagesArray, page, setPage}) => {
  return(
    <div>
      {pagesArray.map((p:number) => 
      <MyButton 
        onClick={() => setPage(p)}
        key={p} 
        className={p === page ? styles.currentPage : ''}
      >{p}
      </MyButton>)}
    </div>
  )
}

export default Pagination