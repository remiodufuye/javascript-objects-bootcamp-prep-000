
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
  
  delete playlist[artist] ;
  return playlist ; 
  
}

//var key = "Cow";
//delete thisIsObject[key]; 

// Example 2
//delete thisIsObject["Cow"];

// Example 3
//delete thisIsObject.Cow;










