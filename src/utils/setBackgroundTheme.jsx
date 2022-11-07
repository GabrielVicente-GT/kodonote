const setBackgroundTheme = (backgroundUrl, setter) => {
  const urlHasBeenSet = setter(backgroundUrl)
  return urlHasBeenSet
}

export default setBackgroundTheme
