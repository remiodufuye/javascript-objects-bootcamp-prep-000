
var playlist  = { 
  Beyonce: "Baby Boy" ,
  Jayz: "Encore" ,
  Kanye : "Jesus Walks"
}; 

function updatePlaylist(playlist, artist , title) {
   playlist[artist] = title ;
   return playlist ; 
  
}