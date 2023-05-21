export const parseDate = (date: string) => {
  const d = new Date(date)

  const day = d.getDate()
  const month = d.toLocaleString('default', { month: 'long' })
  const year = d.getFullYear()
  return { day, month, year }
}
