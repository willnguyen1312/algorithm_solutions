function playlistLongestInterval(songs) {
  songs = songs
    .map(e => e.replace(/[\(\)]/gi, ''))
    .map(e => e.split(' '))
    .map(e => [e.join('#'), getTime(e[1])])

  let max = 0
  let queue = []
  let sum = 0
  let set = new Set()

  for (let i in songs) {
    let song = songs[i][0]
    let duration = songs[i][1]

    if (set.has(song)) {
      max = Math.max(max, sum)

      let tmp = queue.map(e => e[0])
      let index = tmp.indexOf(song)
      queue = queue.slice(index + 1)

      set = new Set(queue.map(_ => _[0]))
      sum = queue.map(_ => _[1]).reduce((a, b) => a + b, 0)
    }

    queue.push([song, duration])
    set.add(song)
    sum += duration
  }

  return Math.max(max, sum)
}

function getTime(str) {
  str = str.split(':').map(Number)
  return str[0] * 60 + str[1]
}

export { playlistLongestInterval }
