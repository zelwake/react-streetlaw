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
    queryKey: ['landingPageNews', pageNumber, category],
    queryFn: () =>
      fetchPaginatedData<NewsProps[]>(
        `https://streetlaw.eu/wp-json/wp/v2/posts?per_page=10&categories=${category}&page=${pageNumber}`
      ),
  })

  useEffect(() => data && setNumberOfPages(data.totalPages | 0), [data?.totalPages])

  return (
    <>
      <header className="bg-streetlaw-500 text-white flex items-center justify-center h-20">
        <h1 className="text-4xl font-semibold">
          {category == Category.news ? 'Aktuality' : 'Mediální ohlasy'}
        </h1>
      </header>
      <section className="px-8 my-8 flex flex-col gap-10">
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
