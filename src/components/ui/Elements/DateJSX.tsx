const DateJSX = ({ date }: { date: string }): JSX.Element => {
  const d = new Date(date)

  const day = d.getDate()
  const month = d.toLocaleString('default', { month: 'long' })
  const year = d.getFullYear()

  return (
    <time className="flex justify-center sm:flex-col sm:basis-28 sm:shrink-0 sm:h-28 sm:items-center gap-2 sm:gap-0 bg-streetlaw-500 text-white py-2 text-xl">
      <p className="sm:text-5xl sm:font-semibold">{day}</p>
      <p>{month.toLowerCase()}</p>
      <p>{year}</p>
    </time>
  )
}

export default DateJSX
