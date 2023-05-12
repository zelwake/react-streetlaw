import { Link } from 'react-router-dom'

const PhoneMenuLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <li className="border-t-2 py-4 px-2">
      <Link to={link}>{text}</Link>
    </li>
  )
}

export default PhoneMenuLink
