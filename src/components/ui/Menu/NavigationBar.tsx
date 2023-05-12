import { menuItems } from '@/data/menuItems'
import MenuDropdownGroup from './MenuDropdownGroup'

const NavigationBar = () => {
  const { conabizime, materialy, onas, streetlaw } = menuItems

  return (
    <nav className="relative">
      <MenuDropdownGroup linkList={streetlaw} name="Street Law" />
      <MenuDropdownGroup linkList={onas} name="O nás" />
      <MenuDropdownGroup linkList={conabizime} name="Co nabízíme" />
      <MenuDropdownGroup linkList={materialy} name="Materiály" />
    </nav>
  )
}

export default NavigationBar
