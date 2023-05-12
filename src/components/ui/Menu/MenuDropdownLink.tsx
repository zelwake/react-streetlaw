import { Link } from 'react-router-dom'

const MenuDropdownLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link to={link}>
      <p className="">{text}</p>
    </Link>
  )
}

export default MenuDropdownLink
