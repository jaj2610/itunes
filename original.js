/*
1. Click 'Fork' from the top menu and generate your own JSFiddle link. Add all your code below the instructions. Be sure to click 'Update' when your work is done.

2. Create an Angular application. Call it 'AlbumFinder'.

3. Create a Controller, call it 'AlbumsController'. Use this controller however you see fit.

4. Create a Service called 'iTunesService' that calls the iTunes API (the API path is given below). Replace ARTIST_NAME within the API path with the search phrase coming from the user input field.

5. When the Search button is clicked, make a call to the API and display the list of albums, including the album name and album cover inside .albums-container in a grid. Use any CSS technique you are comfortable with (Note: The API will return a list of albums based on the search result. Use your skills to find out what the iTunes API data structure looks like and extract the relevant data from it).

6. BONUS: Make the grid look presentable and estatically pleasing.

7. BONUS: How would you improve the User Experience?

8. Click 'Update' from the top menu and share the link.
*/
var app = angular.module('AlbumFinder', []);

app.service('iTunesService', function() {
	var API_BASE = 'https://itunes.apple.com/search?entity=album&term=ARTIST_NAME';
});

app.controller('AlbumsController', function($scope, iTunesService) {
	$scope.searchPhrase = "Jay Z";
});
