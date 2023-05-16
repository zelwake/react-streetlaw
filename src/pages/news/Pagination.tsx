import { Dispatch, SetStateAction } from 'react'

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
      <div className="shadow-sl w-fit m-auto">{pages}</div>
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

const PaginationNavButton = ({
  page,
  setPageNumber,
  pageNumber,
  numberOfPages,
  disabled,
}: {
  page: number | 'up' | 'down'
  setPageNumber: Dispatch<SetStateAction<number>>
  pageNumber: number
  numberOfPages: number
  disabled?: boolean
}) => {
  return (
    <button
      className={`w-10 h-10 font-semibold text-lg ${
        pageNumber == page && 'bg-streetlaw-500 text-white'
      } ${disabled && 'text-gray-400'}`}
      disabled={disabled}
      onClick={() => {
        setPageNumber((prev) =>
          page == 'up'
            ? prev < numberOfPages
              ? prev + 1
              : prev
            : page == 'down'
            ? prev > 1
              ? prev - 1
              : prev
            : page
        )
        window.scrollTo(0, 0)
      }}>
      {page == 'up' && <>&gt;&gt;</>}
      {page == 'down' && <>&lt;&lt;</>}
      {typeof page == 'number' && page}
    </button>
  )
}
