import style from './MyInput.module.css'

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const MyInput: React.FC <MyInputProps> = ({...props}) => {
  return(
    <>
      <input {...props} className={style.myInput}/>
    </>
  )
}

export default MyInput