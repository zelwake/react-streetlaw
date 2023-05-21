import { useNavigate } from 'react-router-dom'

const PhoneMenuLink = ({ text, link }: { text: string; link: string }) => {
  const navigate = useNavigate()

  const external = link.startsWith('http')

  return (
    <li
      className="border-t-2 py-4 px-2 cursor-pointer"
      onClick={() => {
        external ? (window.location.href = link) : navigate(link)
      }}>
      {text}
    </li>
  )
}

export default PhoneMenuLink
