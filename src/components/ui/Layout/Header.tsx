import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="fixed z-20 w-full flex">
        {/* Logo */}
        <Link to="/">
          <img src="/logo.svg" alt="StreetLaw logo" width="80" height="80" />
        </Link>

        {/* Menu */}
        {/* <NavigationBar /> */}

        {/* English link*/}
        <img
          src="/assets/uk.svg"
          alt="english version"
          className="h-8 w-auto absolute right-12 top-1"
        />
        {/* Facebook logo */}
        <img
          src="/assets/facebook.png"
          alt="english version"
          className="h-8 w-auto absolute right-2 top-1"
        />
      </header>
      <div className="pb-20"></div>
    </>
  )
}

export default Header
