import {headerLogo} from '../assets/assets/images'
import {hamburger} from "../assets/assets/icons"
import { navLinks } from '../context'
const nav = () => {
  return (
  <header className='py-8 padding-x w-full absolute z-10'>
    <nav className='flex justify-between  max-container'>
      <a href="">
        <img src={headerLogo} alt="Logo"
        height={29} width={130} />
      </a>
      <ul className='flex-1 flex justify-center item-center gap-16 max-lg:hidden '>
        {navLinks.map((item)=>(
          <li key={item.label}>
            <a href={item.href} className="font-monts errat leading-normal text-lg text-slate-gray">
              {item.label}
            </a>
          </li>
        
        ))}
      </ul>
      <div className="hidden max-lg:block">
        <img src={hamburger} alt="Hamburger"width={25} height={25} />
      </div>
    </nav>
  </header>
  )
}

export default nav