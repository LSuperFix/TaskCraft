import type { OptionsProps } from "../../../Types/todo"
import type {SortKeys} from '../../../Types/todo';

const MySelect: React.FC<OptionsProps> = ({defaultValue, options, valueSelectedSort, changeSelection}) => {
  return(
    <select 
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