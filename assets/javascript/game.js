var gem1;
var gem2;
var gem3;
var gem4;

var total;

var wins;
var losses;


function gameStart() {

    var score = 0;

    gem1 = Math.floor(Math.random() * 12) + 1;
    gem2 = Math.floor(Math.random() * 12) + 1;
    gem3 = Math.floor(Math.random() * 12) + 1;
    gem4 = Math.floor(Math.random() * 12) + 1;

    total = Math.floor(Math.random() * ((120-19)+1) + 19);

    $("#win-num").text(total);
    
    
    

    $("#gem1").on("click", function() {
        score = score + gem1;
        console.log(score);
        $("#score").text(score);
        if (score === total) {
            alert("You win!");
            wins++
            gameStart()
        } else if (score > total) {
            alert("You lose");
            lose++
            gameStart()
        }
       
    })
    $("#gem2").on("click", function() {
        score = score + gem2;
        console.log(score);
        $("#score").text(score);
        if (score === total) {
            alert("You win!");
            wins++
            gameStart()
        } else if (score > total) {
            alert("You lose");
            lose++
            gameStart()
        }
    })

    $("#gem3").on("click", function() {
        score = score + gem3;
        console.log(score);
        $("#score").text(score);
        if (score === total) {
            alert("You win!");
            wins++
            gameStart()
        } else if (score > total) {
            alert("You lose");
            lose++
            gameStart()
        }
    })

    $("#gem4").on("click", function() {
        score = score + gem4;
        console.log(score);
        $("#score").text(score);
        if (score === total) {
            alert("You win!");
            wins++
            gameStart()
        } else if (score > total) {
            alert("You lose");
            lose++
            gameStart()
        }
        
    })

   

    
    
    
    
}






gameStart();







   