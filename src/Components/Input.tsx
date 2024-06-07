import { ChangeEvent } from "react"

interface props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value: string,
  placeholder: string
}

const Input = ({ onChange, value, placeholder }: props) => {
  return (
    <input onChange={onChange} value={value} placeholder={placeholder} className="pl-4 h-12 w-56 rsm:h-16 rounded-[3px]"/>
  )
}

export default Input