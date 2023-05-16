import { fetchData } from '@/utils/fetchData'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { dateJSX } from './dateJSX'
import { NewsProps } from './interface'

const News = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['landingPageNews'],
    queryFn: () => fetchData<NewsProps[]>('https://streetlaw.eu/wp-json/wp/v2/posts?per_page=5'),
  })

  if (isLoading) {
    return <span>Načítání...</span>
  }

  if (isError) {
    return <span>Vyskytla se chyba</span>
  }

  return (
    <section className="px-1">
      <h2 className="text-3xl font-semibold text-gray-600 mb-4">Aktuality</h2>
      <ul>
        {data.map((post) => {
          const innerDiv = `<h3>${post.title.rendered}</h3>` + post.excerpt.rendered
          return (
            <li key={post.id} className="mb-8 last:mb-0 flex flex-col">
              <style>{`
                h3 {
                  font-size: 20px;
                  line-height: 28px;
                  font-weight: 600;
                  margin-bottom: 12px;
                }
              `}</style>
              {dateJSX(post.date)}
              <Link to={post.link}>
                <div
                  className="shadow-sl px-4 py-2"
                  dangerouslySetInnerHTML={{ __html: innerDiv }}></div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default News
