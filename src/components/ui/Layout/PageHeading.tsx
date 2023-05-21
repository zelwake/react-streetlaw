const PageHeading = ({
  title,
  date,
}: {
  title: string
  date?: { day: number; month: string; year: number }
}) => {
  document.title = title
  return (
    <header className="bg-streetlaw-500 text-white px-6 py-3 sm:py-6">
      <h1 className="text-3xl font-semibold text-center">{title}</h1>
      {date && (
        <time className="text-right block mt-2">
          {date.day} {date.month} {date.year}
        </time>
      )}
    </header>
  )
}

export default PageHeading
