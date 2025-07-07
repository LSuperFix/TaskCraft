import styes from './MyButton.module.css'
interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton: React.FC<MyButtonProps> = ({children, ...props}) => {
  return(
    <button {...props} className={styes.myButton}>{children}</button>
  )
}
export default MyButton