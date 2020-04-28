export const findPrevNextPost = (allData, currentData) => {
  if (typeof window !== `undefined`) {
    const [, category, id] = currentData.split('/')

    let prevPost = null
    let nextPost = null

    for (let i = 0; i < allData[category].length; i++) {
      if (`post-${i}` === id) {
        if (`post-${0}` === id) {
          prevPost = null
        } else {
          prevPost = {
            id: `post-${i - 1}`,
            title: allData[category][i - 1].title,
            category: category,
          }
        }
        if (`post-${allData[category].length - 1}` === id) {
          nextPost = null
        } else {
          nextPost = allData[category][i + 1] && {
            id: `post-${i + 1}`,
            title: allData[category][i + 1].title,
            category: category,
          }
        }
        break
      }
    }
    return [prevPost, nextPost]
  } else {
    return [null, null]
  }
}
