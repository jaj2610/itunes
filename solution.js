/* 1. Click 'Fork' from the top menu and generate your own JSFiddle link. Add all your code below the instructions. Be sure to click 'Update' when your work is done.

2. Create an Angular application. Call it 'AlbumFinder'.

3. Create a Controller, call it 'AlbumsController'. Use this controller however you see fit.

4. Create a Service called 'iTunesService' that calls the iTunes API (the API path is given below). Replace ARTIST_NAME within the API path with the search phrase coming from the user input field.

5. When the Search button is clicked, make a call to the API and display the list of albums, including the album name and album cover inside .albums-container in a grid. Use any CSS technique you are comfortable with (Note: The API will return a list of albums based on the search result. Use your skills to find out what the iTunes API data structure looks like and extract the relevant data from it).

6. BONUS: Make the grid look presentable and estatically pleasing.

7. BONUS: How would you improve the User Experience?
 - Add more information / flesh out the table/grid - add clickable link to a track or artwork/video
 - Add more flexible styling for smaller screens
 - Allow more search parameters - track name, price ranges, genre, country, etc.
 - Add sorting options
 - Add pagination
 - Add translations (i18n) and accessibility features (contrast, keyboard commands, aria labels/roles)

8. Click 'Update' from the top menu and share the link. */
var app = angular.module('AlbumFinder', []);

app.service('iTunesService', function($http) {
  var API_BASE = 'https://itunes.apple.com/search?entity=album&term=';
  var artistName = 'ARTIST_NAME';

  var service = {
    searchAlbums: searchAlbums
  };

  return service;

  function searchAlbums(artist) {
    if (artist === undefined) {
      artist = artistName;
    }

    var url = API_BASE + artist;
    console.log("Search request:", url);

    return $http.get(url).then(function(res) {
        return res.data;
      })
      .catch(function(error) {
        console.log(error);
      });

    /*return fetch(url).then((response) => response.json()).then(function(data) {
      return data;
    }).catch(function(error) {
      console.log(error);
    });*/
  }

});

app.controller('AlbumsController', function($scope, iTunesService) {
  var albumsVm = this;

  albumsVm.startSearch = startSearch;
  albumsVm.searchPhrase = "Jay Z"; // default fill-in
  albumsVm.isSearching = false;
  albumsVm.noResultsFound = false;
  albumsVm.searchList = [];

  function startSearch() {
    // grab search param and pass to iTunesService to get data

    // reset values
    albumsVm.isSearching = true;
    albumsVm.noResultsFound = false;
    albumsVm.searchList = [];

    iTunesService.searchAlbums(albumsVm.searchPhrase).then(function(data) {
      albumsVm.searchList = data.results;
    }).finally(function() {
      if (albumsVm.searchList.length === 0) {
        albumsVm.noResultsFound = true;
      }
      albumsVm.isSearching = false;
    });
  }
});
