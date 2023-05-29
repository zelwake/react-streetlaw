import { useState } from 'react'
import MenuDropdownLink from './MenuDropdownLink'

type MenuItem = {
  link: string
  name: string
}

const MenuDropdownGroup = ({ name, linkList }: { name: string; linkList: MenuItem[] }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <>
      <div
        className="w-52 xl:w-64"
        onMouseLeave={() => setShowMenu(false)}
        onMouseEnter={() => setShowMenu(true)}>
        <span className="px-3 text-2xl w-inherit inline-block text-center cursor-pointer font-semibold">
          {name}
        </span>
        {showMenu && (
          <div className="absolute z-20 w-inherit bg-white">
            {linkList.map((item) => (
              <MenuDropdownLink key={item.link} text={item.name} link={item.link} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default MenuDropdownGroup
