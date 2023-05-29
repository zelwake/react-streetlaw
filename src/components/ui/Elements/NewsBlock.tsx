import { Link } from 'react-router-dom'
import ListDateJSX from './ListDateJSX'
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
    <ul className="sm:max-w-3xl xl:max-w-4xl m-auto">
      {(data as NewsProps[]).map((post) => {
        const innerDiv = `<h3>${post.title.rendered}</h3>` + post.excerpt.rendered

        return (
          <li key={post.id} className="mb-8 last:mb-0 flex flex-col sm:flex-row sm:gap-4 sm:mb-12">
            <style>{`
                h3 {
                  font-size: 20px;
                  line-height: 28px;
                  font-weight: 600;
                  margin-bottom: 12px;
                }

                p {
                  font-size: 16px;
                  line-height: 22px;
                  font-weight: 400;
                }

                @media (min-width: 1024px) {
                  h3 {
                    font-size: 24px;
                    line-height: 34px;
                  }

                  p {
                    font-size: 18px;
                    line-height: 24px;
                  }
                }
              `}</style>
            <ListDateJSX date={post.date} />
            <Link
              to={urlCreator(post)}
              onClick={() => window.scrollTo(0, 0)}
              className="shadow-sl hover:shadow-slHover px-4 lg:px-6 py-2 lg:py-4 grow"
              dangerouslySetInnerHTML={{ __html: innerDiv }}></Link>
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
