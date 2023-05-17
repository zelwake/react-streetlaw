import NewsBlock from '@/components/ui/Elements/NewsBlock'
import { NewsProps } from '@/components/ui/Elements/interface'
import { fetchData } from '@/utils/fetchData'
import { useQuery } from '@tanstack/react-query'
import MainHero from './MainHero'
import Motto from './Motto'
import Statistics from './Statistics'

const Home = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['landingPageNews'],
    queryFn: () => fetchData<NewsProps[]>(`https://streetlaw.eu/wp-json/wp/v2/posts?per_page=5`),
  })

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
        <section>
          <h2 className="text-3xl font-semibold text-gray-600 mb-4">Aktuality</h2>
          <NewsBlock data={data} isError={isError} isLoading={isLoading} />
        </section>

        {/* Kalendář */}

        {/* Instagram */}
      </section>
    </>
  )
}

export default Home
