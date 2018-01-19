

var gifList = ["Steven Universe", "Connie", "Crystal Gems", "Boy Bye", "Yass", "Queen"];
var gifCounter = 0;
var gifLimit = 10;
//var searchGif;

//adding click event listener for all search gif elements
$(document).on("click", ".gifSearch", queryGif);
$(document).on("click", ".giphy-img", imgState);
//$(".gifSearch").on("click", demo);
$("#addGifList").on("click", renderButtons);
$("#add-gif").on("click", addGif);


// This app's AUTH KEY from Giphy
var authkey = "tVoRmgR6Tcy0u5LvEsRy4p5FIsXAmuJ3";



function renderButtons() {
    $("#gifList").empty();

    for (var i = 0; i < gifList.length; i++){
        var a = $("<button>");
        a.addClass("gifSearch btn label label-default");
        a.attr("data-name", gifList[i]);
        a.text(gifList[i]);
        $("#gifList").append(a);
       }
    }

renderButtons();

function imgState() {
    var state = $(this).attr("data-state");
    console.log(state);

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }

}

function addGif() {
    event.preventDefault();
    gifCounter = 0;
    var newTerm = $("#gif-input").val().trim();
    gifList.push(newTerm);
    renderButtons();
}

// function demo(){
//     var gif = $(this).attr("data-name");
//     console.log(gif);
// }

function queryGif( queryURL) {
$("#gif-box").empty()
    var searchGif = $(this).attr("data-name");
// Storing our giphy API URL for a random cat image
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+ searchGif;
console.log("---------------------------");
console.log("URL: "+ queryURL);
console.log("---------------------------");

console.log(gifLimit);
console.log("---------------------------");
for (var i = 0; i < gifLimit; i++){
// Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(gifData) {
        console.log(gifData);
        console.log("---------------------------");


            
            gifCounter++;
            var imageUrl = gifData.data.fixed_height_small_url;
            var imageUrlStill = gifData.data.fixed_height_small_still_url;

            var gifImage = $("<img>");
            gifImage.attr("data-state", "animate");
            gifImage.attr("data-still",imageUrlStill);
            gifImage.attr("data-animate",imageUrl);
            gifImage.attr("src", imageUrl);
            gifImage.attr("id", "gif" + gifCounter);
            gifImage.addClass("giphy-img");
            
            $("#gif-box").append(gifImage);

            // Saving the image_original_url property
            
        
            // Creating and storing an image tag
            
        
            // Setting the catImage src attribute to imageUrl
            
        
            // Prepending the catImage to the images div
            
          });
    }
}