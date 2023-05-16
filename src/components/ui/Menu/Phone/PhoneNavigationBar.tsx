import { menuItems } from '@/data/menuItems'
import { useState } from 'react'
import Image from '../../Elements/Image'
import PhoneMenuGroup from '../Phone/PhoneMenuGroup'

const PhoneNavigationBar = () => {
  const { conabizime, materialy, onas, streetlaw } = menuItems
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false) //todo předělat na context

  return (
    <nav className="absolute left-0 w-16 lg:hidden">
      <Image
        src="/assets/menu.svg"
        alt="menu button"
        className="my-5 pl-5"
        onClick={() => setMenuVisibility((prev) => !prev)}
      />
      <ul
        className={
          menuVisibility
            ? 'w-screen bg-gray-200 text-xl text-center border-t-2 border-gray-600'
            : 'hidden'
        }>
        <PhoneMenuGroup linkList={streetlaw} name="Street Law" />
        <PhoneMenuGroup linkList={onas} name="O nás" />
        <PhoneMenuGroup linkList={conabizime} name="Co nabízíme" />
        <PhoneMenuGroup linkList={materialy} name="Materiály" />
        <li className="flex justify-center gap-10 py-4">
          {/* English link*/}
          <img src="/assets/uk.svg" alt="english version" className="h-8 w-8 scale-150" />
          {/* Facebook logo */}
          <img src="/assets/facebook.png" alt="english version" className="h-8 w-8 scale-150" />
        </li>
      </ul>
    </nav>
  )
}

export default PhoneNavigationBar
