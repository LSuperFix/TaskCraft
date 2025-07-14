import styles from './MyButton.module.css'

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton: React.FC<MyButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`${styles.myButton} ${className || ''}`.trim()}>
      {children}
    </button>
  )
}

export default MyButton
