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
  return (
    <nav>
      <button>&lt;&lt;</button>
      <button>{pageNumber}</button>
      <button>&gt;&gt;</button>
    </nav>
  )
}

export default Pagination
