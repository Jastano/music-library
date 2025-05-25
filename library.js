const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

const printPlaylists = function () {
       for (let playlistId in library.playlists) {
         const playlist = library.playlists[playlistId];
         console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       }
     };
const printTracks = function(playlist) {
       for (let i = 0; i < playlist.tracks.length; i++) {
         const trackId = playlist.tracks[i];
         const track = library.tracks[trackId];
         console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }
     };
     
const printPlaylist = function(playlistId) {
       const playlist = library.playlists[playlistId];
       console.log('${playlist.id': ${playlist.name} - ${playlist.tracks.length} tracks');
              printTracks(playlist);

};


const addTrackToPlaylist = function(trackId, playlistId) {
       const playlist = library.playlists[playlistId];
       playlist.tracks.push(trackId);
     };
     
     const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     };
     
     const addTrack = function(name, artist, album) {
       const id = generateUid();
       library.tracks[id] = {
         id: id,
         name: name,
         artist: artist,
         album: album
       };
     };
     
     const addPlaylist = function(name) {
       const id = generateUid();
       library.playlists[id] = {
         id: id,
         name: name,
         tracks: []
       };
     };
     
     const printSearchResults = function(query) {
       const lowerQuery = query.toLowerCase();
       for (const trackId in library.tracks) {
         const track = library.tracks[trackId];
         if (
           track.name.toLowerCase().includes(lowerQuery) ||
           track.artist.toLowerCase().includes(lowerQuery) ||
           track.album.toLowerCase().includes(lowerQuery)
         ) {
           console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
         }
       }
     };
     