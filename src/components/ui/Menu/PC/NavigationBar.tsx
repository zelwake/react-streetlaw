import { menuItems } from '@/data/menuItems'
import MenuDropdownGroup from './MenuDropdownGroup'

const NavigationBar = () => {
  const { conabizime, materialy, onas, streetlaw } = menuItems

  return (
    <nav className="absolute left-0 w-screen max-lg:hidden">
      <MenuDropdownGroup linkList={streetlaw} name="Street Law" />
      <MenuDropdownGroup linkList={onas} name="O nás" />
      <MenuDropdownGroup linkList={conabizime} name="Co nabízíme" />
      <MenuDropdownGroup linkList={materialy} name="Materiály" />
      <image className="flex justify-center gap-5">
        {/* English link*/}
        <img src="/assets/uk.svg" alt="english version" className="h-8 w-8" />
        {/* Facebook logo */}
        <img src="/assets/facebook.png" alt="english version" className="h-8 w-8" />
      </image>
    </nav>
  )
}

export default NavigationBar
