export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)

  if (!response.ok) throw new Error('chyba')

  return response.json()
}

export const fetchPaginatedData = async <T>(
  url: string
): Promise<{ res: T; totalPages: number }> => {
  const response = await fetch(url)

  if (!response.ok) throw new Error('chyba')

  const totalPagesHeader = response.headers.get('X-WP-TotalPages')
  const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0

  return {
    res: await response.json(),
    totalPages,
  }
}
