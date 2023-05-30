import NewsBlock from '@/components/ui/Elements/NewsBlock'
import { NewsProps } from '@/components/ui/Elements/interface'
import { fetchPaginatedData } from '@/utils/fetchData'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import Pagination from './Pagination'

export enum Category {
  news = 2,
  media,
}

type NewsPageProps = {
  category: Category
}

const NewsPage = ({ category }: NewsPageProps) => {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [numberOfPages, setNumberOfPages] = useState<number>(0)

  const { isLoading, isError, data } = useQuery({
    queryKey: ['categoryPageList', pageNumber, category],
    queryFn: () =>
      fetchPaginatedData<NewsProps[]>(
        `https://streetlaw.eu/wp-json/wp/v2/posts?per_page=10&categories=${category}&page=${pageNumber}`
      ),
  })

  useEffect(() => {
    if (data) {
      setNumberOfPages(data.totalPages | 0)
      document.title =
        category == 2 ? 'Novinky' : category == 3 ? 'Mediální ohlasy' : 'Streetlaw.eu'
    }
  }, [data?.totalPages])

  return (
    <>
      <header className="bg-streetlaw-500 text-white flex items-center justify-center h-20 sm:h-32">
        <h1 className="text-4xl sm:text-5xl font-semibold">
          {category == Category.news ? 'Aktuality' : 'Mediální ohlasy'}
        </h1>
      </header>
      <section className="px-8 my-8 sm:my-14 flex flex-col gap-10 sm:gap-14">
        <NewsBlock isLoading={isLoading} isError={isError} data={data?.res} />
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          numberOfPages={numberOfPages}
        />
      </section>
    </>
  )
}

export default NewsPage
