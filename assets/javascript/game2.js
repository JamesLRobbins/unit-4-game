$( document ).ready(function() {
    var gem1 = Math.floor(Math.random() * 12) + 1;
    var gem2 = Math.floor(Math.random() * 12) + 1;
    var gem3 = Math.floor(Math.random() * 12) + 1;
    var gem4 = Math.floor(Math.random() * 12) + 1;

    var total = Math.floor(Math.random() * ((120-19)+1) + 19);
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    $("#gem1").on("click", function() {
        userScore += gem1;
        winlose();
        $("#score").text(userScore);
    });
   $("#gem2").on("click", function() {
        userScore += gem2;
        winlose();
        $("#score").text(userScore);
    });
    $("#gem3").on("click", function() {
        userScore += gem3;
        winlose();
        $("#score").text(userScore);
    });
    $("#gem4").on("click", function() {
        userScore += gem4;
        winlose();
        $("#score").text(userScore);
    });

    $("#win-num").text(total);
    $("#score").text(userScore);
    
    console.log("gem1 " + gem1);
    console.log("gem2 " + gem2);
    console.log("gem3 " + gem3);
    console.log("gem4 " + gem4);
    console.log("total " + total);
    console.log("userScore " + userScore);

    
    

   function reset() {
    gem1 = Math.floor(Math.random() * 12) + 1;
    gem2 = Math.floor(Math.random() * 12) + 1;
    gem3 = Math.floor(Math.random() * 12) + 1;
    gem4 = Math.floor(Math.random() * 12) + 1;
    total = Math.floor(Math.random() * ((120-19)+1) + 19);
    userScore = 0;

    $("#win-num").text(total);
    console.log("gem1 " + gem1);
    console.log("gem2 " + gem2);
    console.log("gem3 " + gem3);
    console.log("gem4 " + gem4);
    console.log("total " + total);
    console.log("userScore " + userScore);

    

   };

   function winlose() {
       if (userScore === total) {
           alert("You win!");
           wins++
           reset();
       } else if (userScore > total) {
           alert("You lose");
           losses++
           reset();
       }

    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    
   }  

})




  









   