Welcome to Ranked-Cinema

To start this App first you need to go to folder server and run on terminal npm start.
This will start the server and then you can make a requests to him.

Then you need to go to the folder client and run on terminal npm start.
This will start the Application on your browser.

Ranked-Cinema is an application where you can see movies shared by other users that they liked. So you can search the movie catalog for a movie you haven't seen yet and find what you're looking for. You can also create a profile and share your favorite movies that you haven't found in the catalog. That way, other users will also be able to find the movies you've shared. Every time a particular movie is opened, its views increase. There is a page where you can see the most opened movies, which are the most popular for this reason and browse from most viewed to least viewed. Also, under each shared movie there are comments that you can see. So everyone can share their opinion about the movie on the site and see how others rate it. Also you can also add a comment for any movie you want. The creators of the movies have the option to edit their shared movies if they have made a mistake or delete it if they wish! Also you can see your profile page where are only the movies that you have been created and you can see how many views they have and what comments they have ! 

The Rest Api is created with node.js and for database I use mongoDB.

host:http://localhost:3030/

FOR MOVIES:
Requests url: movies/
GET - It will return an array with all the movies in the database
POST - You need to send a body with movieData and it will create and return a movie in the database

Requests url: movies/:movieId
GET - Return a current movie from all movies in the database if there is any 
PUT - You need to send a new body for the selected movie and it will edit the old movie in the database and it will return the movie
DELETE - It will delete the movie from the database if there is any

Requests url: movies/edit/:movieId
GET - It will return you the details for the current movie that you need to edit to send after that to edit it 

Request url: movies/comment/:movieId
GET - It will return an array with all the comments and the users who comment if there is any in the database
POST - You need to send a comment for this request the your comment will be saved in the movies comments 

FOR USERS:
Requests url: users/register
POST - It will create a user in the database and it will return a json web token 

Requests url: users/login
POST - It will find the user in the database and if there is any it will return a json web token

Requests url: users/profile
GET - It will return the current user movies

!For any authenticated Request you need to send the json web token from the rest api in the request in the headers!!!
