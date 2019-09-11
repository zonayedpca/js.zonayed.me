const colors = {
  basic: '#f0db4f',
  advance: '#f44336',
  es6: '#bdbdbd',
  dom: '#ffc107',
  daily: '#4caf50',
  algods: '#315950',
  soft: 'black',
}

export const topicColor = topic => {
  const refinedData = topic.replace(/\//g, '')
  return colors[refinedData]
}
