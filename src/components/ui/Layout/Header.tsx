import Image from '@/components/ui/Elements/Image'
import MobileMenuProvider from '@/context/MobileMenuContext'
import { Link } from 'react-router-dom'
import NavigationBar from '../Menu/PC/NavigationBar'
import PhoneNavigationBar from '../Menu/Phone/PhoneNavigationBar'

const Header = () => {
  return (
    <>
      <header className="fixed z-20 w-full min-w-[360px] bg-streetlaw-500 h-20 flex justify-center">
        {/* Mobile menu */}
        <MobileMenuProvider>
          <PhoneNavigationBar />

          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="sm:flex sm:justify-center sm:items-center">
            <Image src="/logo.svg" alt="StreetLaw logo" className="w-32 h-20 cursor-pointer" />
            <span className="hidden sm:block text-4xl font-semibold text-white">Street Law</span>
          </Link>
        </MobileMenuProvider>

        {/* Big screen Menu */}
        <NavigationBar />
      </header>
      <div className="pb-20"></div>
    </>
  )
}

export default Header
