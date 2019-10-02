
var playlist  = { 
  Beyonce: "Baby Boy" ,
  Jayz: "Encore" ,
  Kanye : "Jesus Walks"
}; 

function updatePlaylist(playlist, artist , title) {
   playlist[artist] = title ;
   return playlist ; 
  
}

function removeFromPlaylist( playlist ,artist) {
  
  delete playlist.artist ;
  var playlist = playlist
  return playlist ; 
  
}