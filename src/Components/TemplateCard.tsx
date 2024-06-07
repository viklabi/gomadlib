import { Link } from "react-router-dom"

interface props {
  to: string,
  text: string,
  onClick: () => void
}

const TemplateCard = ({to, text, onClick}: props) => {
  return (
    <Link onClick={onClick} to={to} className="grid place-items-center bg-yellow-100 text-lg rsm:text-xl h-28 text-center max-w-56 p-4 rounded-md">
      {text}
    </Link>
  )
}

export default TemplateCard