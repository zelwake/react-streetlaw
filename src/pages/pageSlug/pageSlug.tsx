import Article from '@/components/ui/Elements/Article'
import { PageProps } from '@/components/ui/Elements/interface'
import PageHeading from '@/components/ui/Layout/PageHeading'
import { fetchData } from '@/utils/fetchData'
import { replaceURL } from '@/utils/replaceURL'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const PageSlug = () => {
  const { slug } = useParams()

  const { isLoading, isError, data } = useQuery({
    queryKey: ['pageSlug', slug],
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
          article p {
            font-size: 18px;
            line-height: 28px;
            margin-bottom: 16px;
            text-align: justify;
          }

          article a {
            color: black;
            text-decoration: underline;
          }

          article h2 {
            font-size: 24px;
            font-weight: 700;
            margin-top: 32px;
            margin-bottom: 24px;
          }

          article strong {
            font-weight: 700;
          }

          article figure {
            margin-top: 20px;
            margin-bottom: 20px;
          }
        `}</style>
      <Article data={articleData} />
    </>
  )
}

export default PageSlug
