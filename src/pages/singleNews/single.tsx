import { dateJSX } from '@/components/ui/Elements/dateJSX'
import { NewsProps } from '@/components/ui/Elements/interface'
import { fetchData } from '@/utils/fetchData'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const SingleNews = () => {
  const { slug } = useParams()

  const { isLoading, isError, data } = useQuery({
    queryKey: ['singleNewsPage', slug],
    queryFn: () => fetchData<NewsProps[]>('https://streetlaw.eu/wp-json/wp/v2/posts?slug=' + slug),
  })

  if (isLoading) {
    return <span>Načítání...</span>
  }

  if (isError) {
    return <span>Vyskytla se chyba</span>
  }

  return (
    <>
      <header className="bg-streetlaw-500 text-white px-6 pt-3 ">
        <h1 className="text-3xl font-semibold text-center">{data[0].title.rendered}</h1>
        {dateJSX(data[0].date)}
      </header>
      <style>{`
        p {
          font-size: 18px;
          line-height: 28px;
          margin-bottom: 12px;
        }

        a {
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

export default SingleNews
