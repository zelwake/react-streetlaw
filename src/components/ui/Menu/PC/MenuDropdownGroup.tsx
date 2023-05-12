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
      {showMenu ? (
        <div className="" onMouseLeave={() => setShowMenu(false)}>
          <span className="">{name}</span>
          <div className="">
            {linkList.map((item) => (
              <MenuDropdownLink key={item.link} text={item.name} link={item.link} />
            ))}
          </div>
        </div>
      ) : (
        <div className="" onMouseEnter={() => setShowMenu(true)}>
          <span className="">{name}</span>
        </div>
      )}
    </>
  )
}

export default MenuDropdownGroup
