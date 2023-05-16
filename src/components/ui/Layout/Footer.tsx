import Image from '../Elements/Image'

const Footer = () => {
  return (
    <footer className="bg-black w-full py-6 flex flex-col gap-4 items-center mt-auto">
      <div>
        <Image src="/footer/logo-white.svg" alt="streetlaw footer logo" footerImage />
      </div>
      <div className="justify-self-center">
        <Image
          src="/footer/logo-uk.svg"
          alt="univerzita karlova footer logo"
          className="filter brightness-0 invert"
          footerImage
        />
      </div>
      <div className="text-white text-right text-sm">
        <ul>
          <li>O nás</li>
          <li>Plánované akce</li>
          <li>Aktuality</li>
          <li>Náš tým</li>
          <li>Kontakty</li>
        </ul>
        <p className="mt-4">Web vytvořili Tomáš Fiala a Lukáš Pánek.</p>
        <p>Aktualizace šablony Michal Hladík</p>
        <p>© 2023 Street Law – Všechna práva vyhrazena</p>
      </div>
    </footer>
  )
}

export default Footer
