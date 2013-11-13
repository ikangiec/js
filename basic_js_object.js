function Album(name, theme) {
  this.name = name
  this.theme = theme
}

var sc = new Album("Super Chris", "Red")

function Song(title, artist, genre, year, artist_album) {
  this.title = title
  this.artist = artist
  this.genre = genre
  this.year = year
  this.artist_album = artist_album
}

Song.prototype.toString = function() {
  return "The song: \"" + this.title + "\" by " + this.artist + " has the best " + this.genre + " album ever!!! Check out his/her marvellous album: " + sc.name
}

var mySong = new Song("Don't Wake Me Up", "Chris Brown", "Pop", "2011", sc)
var mySong2 = new Song("Skyfall", "Adele", "Soundtrack", "2012")

console.log(mySong.artist_album)
console.log(mySong.artist_album.toString())
console.log(mySong.toString())
console.log(mySong2.toString())
