import MainHero from './MainHero'
import Motto from './Motto'
import News from './News'
import Statistics from './Statistics'

const Home = () => {
  return (
    <>
      {/* Fotka s textem */}
      <MainHero />

      <section className="px-8 my-8 flex flex-col gap-10">
        {/* Text zažít právo jinak */}
        <Motto />

        {/* Statistika */}
        <Statistics />

        {/* Aktuality */}
        <News />

        {/* Kalendář */}

        {/* Instagram */}
      </section>
    </>
  )
}

export default Home
