import { Dispatch, SetStateAction } from 'react'

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
        pageNumber == page ? 'bg-streetlaw-500 text-white' : 'bg-white'
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

export default PaginationNavButton
