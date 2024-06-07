import templates from "../templates.ts"
import TemplateCard from "../Components/TemplateCard.tsx";

interface props{
  setIndex: React.Dispatch<React.SetStateAction<number>>
}

const SelectStory = ({setIndex}:props) => {
const options = templates.map(template => template.title);
  
  return (
    <div className="p-4">
      <h1 className="text-3xl rsm:text-4xl mt-2 mb-8 font-bold text-center">Pick a template</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-fit mx-auto">
      {options.map((option, i) => <TemplateCard  onClick={() => setIndex(i)} key={i} to={`/option/${option.replace(' ', '-').toLowerCase()}`} text={option} />)}
      </div>
    </div>
  )
}

export default SelectStory