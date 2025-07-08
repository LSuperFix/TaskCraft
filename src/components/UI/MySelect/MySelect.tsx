import type { OptionsProps } from "../../../Types/todo"
import type {SortKeys} from '../../../Types/todo'
import styles from './MySelect.module.css'

const MySelect: React.FC<OptionsProps> = ({defaultValue, options, valueSelectedSort, changeSelection}) => {
  return(
    <select 
      className={styles.mySelect}
      value={valueSelectedSort}
      onChange={(e) => changeSelection(e.target.value as SortKeys)}
    >
      <option disabled>{defaultValue}</option>
      {options.map(item => (
        <option key={item.value} value={item.value}>{item.name}</option>
      ) )}
    </select>
  )
}

export default MySelect