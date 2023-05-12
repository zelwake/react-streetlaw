import Image from '@/components/ui/Elements/Image'
import { Link } from 'react-router-dom'
import NavigationBar from '../Menu/PC/NavigationBar'
import PhoneNavigationBar from '../Menu/Phone/PhoneNavigationBar'

const Header = () => {
  return (
    <>
      <header className="fixed z-20 w-full min-w-[360px] bg-streetlaw-500 h-20 flex justify-center">
        {/* Mobile menu */}
        <PhoneNavigationBar />

        {/* Logo */}
        <Link to="/">
          <Image src="/logo.svg" alt="StreetLaw logo" className="w-20 h-20 cursor-pointer" />
        </Link>

        {/* Big screen Menu */}
        <NavigationBar />
      </header>
      <div className="pb-20"></div>
    </>
  )
}

export default Header
