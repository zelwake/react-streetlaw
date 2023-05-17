import { Dispatch, SetStateAction } from 'react'
import PaginationNavButton from './PaginationNavButton'

const Pagination = ({
  pageNumber,
  setPageNumber,
  numberOfPages,
}: {
  pageNumber: number
  setPageNumber: Dispatch<SetStateAction<number>>
  numberOfPages: number
}) => {
  const pages: JSX.Element[] = []
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(
      <PaginationNavButton
        key={i}
        page={i}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
      />
    )
  }

  return (
    <nav>
      <div className="shadow-sl w-fit m-auto flex gap-0.5 bg-slate-200 ">{pages}</div>
      <div className="shadow-sl w-fit m-auto mt-2">
        <PaginationNavButton
          page="down"
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          numberOfPages={numberOfPages}
          disabled={pageNumber == 1 && true}
        />
        <PaginationNavButton
          page="up"
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          numberOfPages={numberOfPages}
          disabled={pageNumber == numberOfPages && true}
        />
      </div>
    </nav>
  )
}

export default Pagination
