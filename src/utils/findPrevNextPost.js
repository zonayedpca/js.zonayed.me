export const findPrevNextPost = (allData, currentData) => {
  const [__blank, category, id] = currentData.split('/')

  let prevPost = null
  let nextPost = null

  for (let i = 0; i < allData[category].length; i++) {
    if (allData[category][i].id === Number(id)) {
      if (allData[category][0].id === Number(id)) {
        prevPost = null
      } else {
        prevPost = {
          id: allData[category][i - 1].id,
          title: allData[category][i - 1].title,
          category: category,
        }
      }
      if (allData[category][allData[category].length - 1].id === Number(id)) {
        nextPost = null
      } else {
        nextPost = allData[category][i + 1] && {
          id: allData[category][i + 1].id,
          title: allData[category][i + 1].title,
          category: category,
        }
      }
      break
    }
  }

  return [prevPost, nextPost]
}
