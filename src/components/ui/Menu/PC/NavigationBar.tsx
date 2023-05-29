import { menuItems } from '@/data/menuItems'
import { Link } from 'react-router-dom'
import MenuDropdownGroup from './MenuDropdownGroup'

const NavigationBar = () => {
  const { conabizime, materialy, onas, streetlaw } = menuItems

  return (
    <nav className="max-lg:hidden flex items-center w-[calc(100vw-110px)] justify-between">
      <div id="left-side" className="relative flex items-center">
        <MenuDropdownGroup linkList={streetlaw} name="Street Law" />
        <MenuDropdownGroup linkList={onas} name="O nás" />
        <MenuDropdownGroup linkList={conabizime} name="Co nabízíme" />
        <MenuDropdownGroup linkList={materialy} name="Materiály" />
      </div>
      <image className="flex justify-center gap-5">
        {/* English link*/}
        <img src="/assets/uk.svg" alt="english version" className="h-8 w-8" />
        {/* Facebook logo */}
        <Link to={'https://facebook.com/StreetLawCR'}>
          <img src="/assets/facebook.png" alt="english version" className="h-8 w-8" />
        </Link>
      </image>
    </nav>
  )
}

export default NavigationBar
