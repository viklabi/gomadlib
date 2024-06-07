import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import arrow from '../assets/arrow.svg'
import github from '../assets/github.svg'

const Header = () => {
  return (
    <header className="fixed left-0 right-0 flex items center justify-between px-4 py-4 sm:px-8 xl:px-10 top-0 bg-white">
      <Link to='/' className="w-32 grid place-items-center sm:w-40">
        <img className='w-full' src={logo} alt="" />
      </Link>
      <a target='_blank' href="https://github.com/viklabi/gomadlib">
        <img className='block md:hidden w-7 sm:w-8 ' src={github} alt="github icon" />
      </a>
      <a target='_blank' href='https://github.com/viklabi/gomadlib' className="border hidden md:flex items-center gap-2 border-yellow-700 text-yellow-700 font-bold rounded-md px-5 py-2 text-md">Visit Github <img src={arrow} alt="" /></a>
    </header>
  )
}

export default Header