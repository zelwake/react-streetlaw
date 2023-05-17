import { Link } from 'react-router-dom'
import { dateJSX } from './dateJSX'
import { NewsProps } from './interface'

const categoryGroup = ['', '', 'aktuality', 'medialni-ohlasy']

type NewsBlockProps = {
  isLoading: boolean
  isError: boolean
  data: NewsProps[] | undefined
}

const NewsBlock = ({ isLoading, isError, data }: NewsBlockProps) => {
  if (isLoading) {
    return <span>Načítání...</span>
  }

  if (isError) {
    return <span>Vyskytla se chyba</span>
  }

  return (
    <ul>
      {(data as NewsProps[]).map((post) => {
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
            <Link to={urlCreator(post)}>
              <div
                className="shadow-sl px-4 py-2"
                dangerouslySetInnerHTML={{ __html: innerDiv }}></div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NewsBlock

function urlCreator(post: NewsProps): string {
  return `${import.meta.env.VITE_BASE_URL}/${categoryGroup[post.categories[0]]}/${post.slug}`
}
