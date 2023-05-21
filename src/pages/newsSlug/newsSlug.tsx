import { NewsProps } from '@/components/ui/Elements/interface'
import PageHeading from '@/components/ui/Layout/PageHeading'
import { fetchData } from '@/utils/fetchData'
import { parseDate } from '@/utils/parseDate'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const NewsSlug = () => {
  const { slug } = useParams()

  const { isLoading, isError, data } = useQuery({
    queryKey: ['newsSlug', slug],
    queryFn: () => fetchData<NewsProps[]>('https://streetlaw.eu/wp-json/wp/v2/posts?slug=' + slug),
  })

  if (isLoading) {
    return <span>Načítání...</span>
  }

  if (isError) {
    return <span>Vyskytla se chyba</span>
  }

  const date = parseDate(data[0].date)

  return (
    <>
      <PageHeading title={data[0].title.rendered} date={date} />
      <style>{`
        article p {
          font-size: 18px;
          line-height: 28px;
          margin-bottom: 12px;
          text-align: justify;
        }

        article a {
          color: black;
          text-decoration: underline;
        }
      `}</style>
      <article
        className="px-6 py-4"
        dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}></article>
    </>
  )
}

export default NewsSlug
