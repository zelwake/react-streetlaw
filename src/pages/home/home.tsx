import NewsBlock from '@/components/ui/Elements/NewsBlock'
import MainHero from './MainHero'
import Motto from './Motto'
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
        <NewsBlock url="https://streetlaw.eu/wp-json/wp/v2/posts?per_page=5" title />

        {/* Kalendář */}

        {/* Instagram */}
      </section>
    </>
  )
}

export default Home
