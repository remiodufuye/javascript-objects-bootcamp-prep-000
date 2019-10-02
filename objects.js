
var playlist  = { 
  Beyonce: "Baby Boy" ,
  Jayz: "Encore" ,
  Kanye : "Jesus Walks"
}; 

function updatePlaylist(playlist, artist , title) {
   playlist[artist] = title ;
   return playlist ; 
  
}

function removeFromPlaylist(playlist , artist) {
  
  var playlist  = { 
  Beyonce: "Baby Boy" ,
  Jayz: "Encore" ,
  Kanye : "Jesus Walks"
}; 


  delete playlist.artist ;
  return playlist ; 
  
}