export const capitalizeWords = (input: string): string => {
  // Split the input string into an array of words
  const words = input.split(' ')

  // Capitalize the first letter of each word and convert the rest to lowercase
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase()
    const restOfWord = word.slice(1).toLowerCase()
    return firstLetter + restOfWord
  })

  // Join the capitalized words back into a string
  const capitalizedString = capitalizedWords.join(' ')

  return capitalizedString
}
