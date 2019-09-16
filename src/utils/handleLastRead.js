const STORAGE_NAME = 'js.zonayed.me:last.read'

export const handleLastRead = post => {
  if (typeof window !== `undefined`) {
    if (post) {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(post))
    } else {
      return JSON.parse(localStorage.getItem(STORAGE_NAME))
    }
  } else {
    return null
  }
}
