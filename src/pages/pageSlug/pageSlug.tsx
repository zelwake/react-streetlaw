import { PageProps } from '@/components/ui/Elements/interface'
import { fetchData } from '@/utils/fetchData'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const PageSlug = () => {
  const { slug } = useParams()

  const { isLoading, isError, data } = useQuery({
    queryKey: ['singleNewsPage', slug],
    queryFn: () => fetchData<PageProps[]>('https://streetlaw.eu/wp-json/wp/v2/pages?slug=' + slug),
  })

  if (isLoading) {
    return <span>Načítání...</span>
  }

  if (isError) {
    return <span>Vyskytla se chyba</span>
  }

  const articleData = data[0].content.rendered.replaceAll(
    /https:\/\/streetlaw.eu/g,
    import.meta.env.VITE_BASE_URL
  )

  return (
    <>
      <header className="bg-streetlaw-500 text-white px-6 py-3">
        <h1 className="text-3xl font-semibold text-center">{data[0].title.rendered}</h1>
      </header>
      <style>{`
          p {
            font-size: 18px;
            line-height: 28px;
            margin-bottom: 16px;
            text-align: justify;
          }

          a {
            color: black;
            text-decoration: underline;
          }

          h2 {
            font-size: 24px;
            font-weight: 700;
            margin-top: 32px;
            margin-bottom: 24px;
          }
        `}</style>
      <article className="px-6 py-4" dangerouslySetInnerHTML={{ __html: articleData }}></article>
    </>
  )
}

export default PageSlug
