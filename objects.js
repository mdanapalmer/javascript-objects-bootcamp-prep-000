var playlist = {
  'Maaya Sakamoto': 'Garden of Everything'
}

function updatePlaylist(playlist, artistName, songName) {
  playlist[artistName] = songName
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playList[artistName]
  return playlist
}