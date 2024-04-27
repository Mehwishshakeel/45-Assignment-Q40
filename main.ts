// creating a function
function make_album(artist_name:string , album_title:string  ,tracks?:number){
  let album: {artist:string , title:string,tracks?:number} = {
   artist: artist_name,
   title: album_title,
};
  if(tracks !== undefined){
    album.tracks = tracks;
}
   return album;
}
// Calling function with different values and creating three variables
 let album1 = make_album("Atif Aslam","Album no 1");
 let album2 =  make_album("Usamn","Album no 2");
 let album3 = make_album("Ali Zafar","Album no 3",10 );
// print values of aur object created my function
// printing the variables
console.log( album1);
console.log(album2);
console.log(album3);