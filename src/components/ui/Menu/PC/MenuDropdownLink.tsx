import { Link } from 'react-router-dom'

const MenuDropdownLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      to={link}
      className="block text-lg px-3 py-4 w-inherit text-center hover:bg-streetlaw-500 hover:text-white">
      {text}
    </Link>
  )
}

export default MenuDropdownLink
