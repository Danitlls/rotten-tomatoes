function Table(movie, year, score) {
  this.userMovie = movie;
  this.userYear = year;
  this.userScore = score;
  this.movieArray = [];
};

Table.prototype.GetMovieInput = function(tomato) {
  return this.movieArray.push(tomato);
};


function resetFields() {
    $("input#input-movie").val("");
    $("input#input-year").val("");
    $("input.input-score").val("");
}

$(document).ready(function() {

  $("form#newTomato").submit(function(event) {
    event.preventDefault();

    var movie = $("input#input-movie").val();
    var year = $("input#input-year").val();
    var score = parseInt($("input#input-score").val());

    var newTomato = new Table(movie, year, score);
    var movie1 = new Table("Predator", 1987, 98);
    var movie2 = new Table("Wild Tales", 2014, 95);
    var movie3 = new Table("Minions", 2015, 35);
    var movieArray = [movie1, movie2, movie3];
    var GetMovieInput;
    movieArray.push(newTomato);
    var x = GetMovieInput(movieArray);
    console.log(x);
    var y = GetMovieInput(newTomato);
    console.log(y);
    // console.log(newTomato);

    $(".user-movie").append("<tr><td>" + movie + "</td><td>" + year + "</td><td>" + score + "</td></tr>");
    // console.log(movieArray);

    resetFields();

    document.forms["newTomato"].reset();

  });
  $(".user-movie").append("<tr><td id='movie1'>" + "Predator" + "</td><td>" + 1987 + "</td><td>" + 98 + "</td></tr>");
  $(".user-movie").append("<tr><td id='movie2'>" + "Wild Tales" + "</td><td>" + 2014 + "</td><td>" + 95 + "</td></tr>");
  $(".user-movie").append("<tr><td id='movie3'>" + "Minions" + "</td><td>" + 2015 + "</td><td>" + 35 + "</td></tr>");



});
