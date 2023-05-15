import MainHero from './MainHero'
import Motto from './Motto'
import Statistics from './Statistics'

const Home = () => {
  return (
    <>
      {/* Fotka s textem */}
      <MainHero />

      <section className="px-8">
        {/* Text zažít právo jinak */}
        <Motto />

        {/* Statistika */}
        <Statistics />

        {/* Aktuality */}

        {/* Kalendář */}

        {/* Instagram */}
      </section>
    </>
  )
}

export default Home
