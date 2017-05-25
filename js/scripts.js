var Movie = function(movie, year, score) {
  this.movie = movie;
  this.year = year;
  this.score = score;
}

var Library = function () {
  this.movieArray = [];
}

$(document).ready(function() {
  var newLibrary = new Library();
  $("form#newTomato").submit(function(event){
    event.preventDefault();



    var userMovieName = $("#input-movie").val();
    var userYear = $("#input-year").val();
    var userScore = parseInt($("#input-score").val());

    var userMovie = new Movie (userMovieName, userYear, userScore);

    newLibrary.movieArray.push(userMovie);

    console.log(newLibrary);
    $(".user-movie").append("<tr> <td>" + userMovie.movie + "</td> <td>" + userMovie.year + "</td> <td>" + userMovie.score + "</td> </tr>");




    $("#sort").click(function(){
    var sortMovies = newLibrary.movieArray.sort(function(a, b){
      return a.score - b.score;
    })
    $(".user-movie").empty();
    sortMovies.forEach(function(item){
      $(".user-movie").append("<tr> <td>" + item.movie + "</td> <td>" + item.year + "</td> <td>" + item.score + "</td> </tr>");

    })
  });




  })
})
