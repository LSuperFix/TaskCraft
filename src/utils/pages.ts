export const getPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalCount: number) => {
  const result = []
  for(let i = 0; i < totalCount; i ++) {
    result.push(i + 1)
  }
  return result
}