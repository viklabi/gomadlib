import { Link } from "react-router-dom"
import Header from "../Components/Header"

const Welcome = () => {
  return (
    <div className="min-h-screen relative">
      <Header/>
      <div className=" absolute left-0 right-0 grid place-items-center gap-7 px-5 md:px-10 xl:px-14 top-[20%] rsm:top-[25%] sm:top-[30%]">
        <h1 className="text-3xl rsm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">Cure your boredom with a funfilled game of madlibs</h1>
        <div className="grid place-items-center gap-4">
           <p className='text-xl text-center'>Select how you want to play</p>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-7 w-full relative h-36 top-0 lg:h-fit">
          <Link to='/random' className="bg-yellow-500 absolute lg:static top-0 left-0 text-yellow-950 rounded-[3px] text-center font-bold w-40 py-2 text-lg hover:bg-yellow-600 active:bg-yellow-700 duration-150">Random</Link>
          <hr className="bg-yellow-950 w-[1px] h-52 absolute left-1/2 translate-x-1/2 rotate-[75deg] lg:rotate-0 lg:h-16" />
          <Link to='/option' className="border absolute bottom-0 right-0 border-yellow-700 lg:static text-yellow-700 rounded-[3px] text-center font-bold w-40 py-2 text-lg">Select story</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome