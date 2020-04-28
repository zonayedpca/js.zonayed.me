export const searchMatch = (allData, term) => {
  return Object.keys(allData)
    .map(key =>
      allData[key].map((item, index) => {
        if (
          String(item.title)
            .toLowerCase()
            .includes(term)
        ) {
          return {
            title: item.title,
            topic: key,
            id: index,
          }
        }
        return 0
      })
    )
    .flat()
    .filter(item => item)
    .slice(0, 3)
}
