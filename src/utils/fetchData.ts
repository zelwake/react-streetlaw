export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)

  if (!response.ok) throw new Error('chyba')

  return response.json()
}
