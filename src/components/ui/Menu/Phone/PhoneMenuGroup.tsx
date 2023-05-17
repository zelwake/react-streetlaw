import { useState } from 'react'
import PhoneMenuLink from './PhoneMenuLink'

type MenuItem = {
  link: string
  name: string
}

const PhoneMenuGroup = ({ name, linkList }: { name: string; linkList: MenuItem[] }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <li
      className="py-4 border-b-2 border-gray-600 cursor-pointer "
      onClick={() => setShowMenu((prev) => !prev)}>
      <span className={`${showMenu && 'underline'}`}>{name}</span>
      {showMenu && (
        <ul className="relative -bottom-4 bg-slate-800 text-gray-50">
          {linkList.map((item) => (
            <PhoneMenuLink key={item.link} text={item.name} link={item.link} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default PhoneMenuGroup
