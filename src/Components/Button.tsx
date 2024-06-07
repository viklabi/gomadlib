interface props {
  label: string,
  className: string,
  onClick: () => void
}

const Button = ({ label, className, onClick }: props) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button