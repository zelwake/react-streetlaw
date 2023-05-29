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

      <section className="px-8 my-8 flex flex-col gap-10 lg:gap-16 items-stretch sm:items-center">
        {/* Text zažít právo jinak */}
        <Motto />

        {/* Statistika */}
        <Statistics />

        {/* Aktuality */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700 mb-4 sm:mb-6">
            Aktuality
          </h2>
          <NewsBlock data={data} isError={isError} isLoading={isLoading} />
        </section>

        {/* Kalendář */}

        {/* Instagram */}
      </section>
    </>
  )
}

export default Home
