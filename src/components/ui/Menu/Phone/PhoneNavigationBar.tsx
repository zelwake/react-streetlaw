import { MobileMenuContext } from '@/context/MobileMenuContext'
import { menuItems } from '@/data/menuItems'
import { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Image from '../../Elements/Image'
import PhoneMenuGroup from '../Phone/PhoneMenuGroup'

const PhoneNavigationBar = () => {
  const { conabizime, materialy, onas, streetlaw } = menuItems
  const { isMobileMenuOpen, setMobileMenuOpen } = useContext(MobileMenuContext)

  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <nav className="absolute left-0 w-16 lg:hidden">
      <Image
        src="/assets/menu.svg"
        alt="menu button"
        className="my-5 pl-5 cursor-pointer"
        onClick={() => setMobileMenuOpen((prev: boolean) => !prev)}
      />
      <ul
        className={
          isMobileMenuOpen
            ? 'w-screen max-h-[calc(100vh-80px)] overflow-y-scroll bg-gray-200 text-xl text-center border-t-2 border-gray-600'
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
          <Link to={'https://facebook.com/StreetLawCR'}>
            <img src="/assets/facebook.png" alt="english version" className="h-8 w-8 scale-150" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default PhoneNavigationBar
