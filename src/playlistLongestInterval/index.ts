const toSeconds = (minutes: string, seconds: string) =>
  +minutes * 60 + +seconds;

function playlistLongestInterval(songs: string[]) {
  let result = 0;
  const { length } = songs;
  const regex = /([A-z]+)\s+\((\d{1,2}):(\d{1,2})/;

  const formatedSongs = songs.map(song => {
    const [, name, minutes, seconds] = song.match(regex);
    return {
      name,
      minutes,
      seconds
    };
  });

  for (let i = 0; i < length; i++) {
    let same = undefined;
    let lookup = {};
    lookup[formatedSongs[i].name] = true;
    for (let j = i + 1; j < length; j++) {
      const currentSongName = formatedSongs[j].name;
      if (lookup[currentSongName]) {
        same = j;
        break;
      } else {
        lookup[currentSongName] = true;
      }
    }

    const diffSongs = formatedSongs.slice(i, same);
    let current = 0;

    for (const song of diffSongs) {
      current += toSeconds(song.minutes, song.seconds);
    }

    result = current > result ? current : result;
  }

  return result;
}

export { playlistLongestInterval };
