import NewsBlock from '@/components/ui/Elements/NewsBlock'
import { NewsProps } from '@/components/ui/Elements/interface'
import PageHeading from '@/components/ui/Layout/PageHeading'
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

  useEffect(() => data && setNumberOfPages(data.totalPages | 0), [data?.totalPages])

  return (
    <>
      <PageHeading title={category == Category.news ? 'Aktuality' : 'Mediální ohlasy'} />
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
