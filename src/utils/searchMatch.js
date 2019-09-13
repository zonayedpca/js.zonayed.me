export const searchMatch = (allData, term) => {
  const dataArr = []
  Object.keys(allData).map(key => dataArr.push(...allData[key]))
  const result = dataArr.filter(item =>
    String(item.title.rendered)
      .toLowerCase()
      .includes(term)
      ? item
      : false
  )
  return result.slice(0, 3)
}
