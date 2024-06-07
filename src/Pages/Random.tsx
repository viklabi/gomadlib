import { useRef, useState, useEffect } from "react";
import Header from "../Components/Header.tsx";
import Input from "../Components/Input.tsx";
import Button from "../Components/Button.tsx";
import templates from '../templates.ts'

const Random = () => {
  const [words, setWords] = useState<string[]>([])
  const [showBlanks, setShowBlanks] = useState<boolean>(true)
  const [story, setStory] = useState<string>('')
  const [title, setTitle] = useState('')

  const randomIndex = useRef<number>(0);
  const randomTemplate = templates[randomIndex.current]
  const blanks = randomTemplate.blanks;
  const sentences = randomTemplate.text;

  const generateRandomIndex = () => {
    randomIndex.current = Math.floor(Math.random() * (templates.length))
  }

  useEffect(() => {
    generateRandomIndex()
    setWords(new Array(blanks.length).fill(''));
  }, [blanks]);

  const handleInputChange = (index: number, value: string) => {
    setWords(prevWords => {
      const newWords = [...prevWords];
      newWords[index] = value;
      return newWords;
    });
  };

  const goMadlib = () => {
    if (words.every(word => word !== '')) {
      let combinedStory = ''
      sentences.forEach((sentence, i) => {
        let sent = ''
        if (i < words.length) {
          sent = sentence + words[i]
        }
        combinedStory += sent
      });
      setTitle(randomTemplate.title)
      setStory(combinedStory)
      setShowBlanks(false)
      setWords(new Array(blanks.length).fill(''))
    } else {
      alert('Fill every field')
    }
  }

  function playAgain() {
    setShowBlanks(true)
    generateRandomIndex()
  }

  return (
    <div>
      <Header />
      {showBlanks &&
        <>
          <h1 className="text-center text-3xl font-bold mt-20 md:mt-28 mb-9 rsm:text-4xl px-2">Random Madlib</h1>
          <div className="grid place-items-center w-full pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rsm:gap-8 md:grid-cols-3">
              {blanks.map((blank, i) =>
                <label key={i} className="capitalize font-bold flex items-start flex-col gap-1">
                  <span className="border border-yellow-950 rounded-full w-6 h-6 grid place-items-center">{i + 1}</span>
                  <Input onChange={(e) => handleInputChange(i, e.target.value)} value={words[i] || ''} placeholder={blank} />{blank}
                </label>)}
            </div>
            <Button label='Gomadlib' onClick={goMadlib} className="bg-yellow-500 text-xl w-56 h-12 rsm:h-16 mt-4"/>
          </div>
        </>
      }
      {!showBlanks &&
        <div className="mt-16 rsm:mt-24 lg:mt-32 grid place-items-center">
          <h2 className="text-3xl rsm:text-4xl text-center px-2 font-bold lg:text-5xl">{title}</h2>
          <p className="text-lg rsm:text-xl sm:text-2xl mt-8 px-2 w-full sm:w-[500px] md:w-[750px] lg:text-3xl lg:w-[1000px]">
            {story} </p>
          <Button label="Play again" onClick={playAgain} className="bg-yellow-500 px-6 py-2 rounded-md mt-8"/>
        </div>
      }
    </div>
  )
}

export default Random