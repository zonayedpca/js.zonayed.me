export const searchMatch = (allData, term) => {
  return Object.keys(allData)
    .map(key =>
      allData[key].map(item => {
        if (
          String(item.title.rendered)
            .toLowerCase()
            .includes(term)
        ) {
          return {
            title: item.title,
            topic: key,
            id: item.id,
          }
        }
      })
    )
    .flat()
    .filter(item => item)
    .slice(0, 3)
}
