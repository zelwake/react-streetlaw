import { PageProps } from '@/components/ui/Elements/interface'
import PageHeading from '@/components/ui/Layout/PageHeading'
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

  const articleData = replaceURL(data)

  return (
    <>
      <PageHeading title={data[0].title.rendered} />
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

function replaceURL(data: PageProps[]) {
  const pattern = /https:\/\/streetlaw\.eu\/(?!.*wp-content)/g
  const replace = import.meta.env.VITE_BASE_URL + '/'

  return data[0].content.rendered.replace(pattern, replace)
}
