var playlist = {
  'Maaya Sakamoto': 'Garden of Everything'
}

function updatePlaylist(playlist, artistName, songName) {
  playlist[artistName] = songName
  return playlist
}