import type { MyModalProps } from '../../../Types/todo'
import styles from './MyModal.module.css'

const MyModal: React.FC<MyModalProps> = ({children, visible, setVisible}) => {
  const rootStyle = [styles.myModal]
  const openClose = (e: { stopPropagation: () => void }) => {
    setVisible(!visible)
  }
  if(visible) {
    rootStyle.push(styles.active)
  }
  return(
    <div className={rootStyle.join(' ')} onClick = {openClose}>
      <div className={styles.myModalContent} onClick = {e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal