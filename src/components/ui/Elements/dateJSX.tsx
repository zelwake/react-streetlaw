export const dateJSX = (date: string): JSX.Element => {
  const d = new Date(date)

  const day = d.getDate()
  const month = d.toLocaleString('default', { month: 'long' })
  const year = d.getFullYear()

  return (
    <time className="flex justify-center gap-2 bg-streetlaw-500 text-white py-2 text-xl">
      <p>{day}.</p>
      <p>{month.toLowerCase()}</p>
      <p>{year}</p>
    </time>
  )
}
