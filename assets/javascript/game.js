$(function () {
    function runItAll(){
        
    var heroSelected = false;
    var enemySelected = false;
    var wins = 0


    var windu = {
        name: "Mace Windu",
        health: 19,
        damage: 1,
        background: "council"
    }

    var yoda = {
        name: "Yoda",
        health: 24,
        damage: 3,
        background: "Dagobah"
    }

    var darthMaul = {
        name: "Darth Maul",
        health: 18,
        damage: 2,
        background: "sand"
    }

    var vader = {
        name: "Darth Vader",
        health: 28,
        damage: 4,
        background: "Deathstar"
    }

    $("#wins").html(wins)

    function capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    function healthBarChange(){
        if ((userHealth > 5) && (userHealth <= 10)){
            $("#heroHealth").css('background-color','yellow');
            $("#heroHealth").css('color', 'black');
        }
        if ((userHealth > 0) && (userHealth <= 5)){
            $("#heroHealth").css('background-color','red');
            $("#heroHealth").css('color', 'white');
        }
        if ((enemyHealth > 5) && (enemyHealth <= 10)){
            $("#enemyHealth").css('background-color','yellow');
            $("#enemyHealth").css('color', 'black');
        }
        if (enemyHealth <= 5){
            $("#enemyHealth").css('background-color','red');
            $("#enemyHealth").css('color', 'white');
        }
    }
    function checkHealth() {
        if (userHealth <= 0 && enemyHealth > 0) {
            alert("You have failed. Try again")
            $("#infoBox").append("<button id = 'removeBody'> Remove The Body </button>")
            $("#removeBody").on('click', function () {
                $("#heroArea").html(' ')
                $("#defenderArea").html(' ');
                $('h2').html('Pick Your Fighter');
                $("#removeBody").remove();
                $("#fighterArea").html(" ")
                $("#fighterArea").append('<img class="fighter" id="windu" src="assets/images/characters/windu.jpg" alt="Windu">')
                $("#fighterArea").append('<img class="fighter" id="yoda" src="assets/images/characters/yoda.jpg" alt="Yoda">')
                $("#fighterArea").append('<img class="fighter" id="darthMaul" src="assets/images/characters/darthMaul.jpg" alt="Darthmaul">')
                $("#fighterArea").append('<img class="fighter" id="vader" src="assets/images/characters/vader.jpg" alt="Vader">')
                runItAll();
            })


        }
        if (enemyHealth <= 0 && userHealth > 0) {
            alert("Victory!")
            wins++;
            $("#wins").html(wins)
            if (wins === 3) {
                $('h2').html('Congratulations! You are the best.');
                $("#defenderArea").html(" ");
                $("#removeBody").remove();
                enemySelected = false;

            }
            else {
                $("#infoBox").append("<button id = 'removeBody'> Remove The Body </button>")
                $("#removeBody").on('click', function () {
                    $("#defenderArea").html(" ");
                    $("#removeBody").remove();
                    $('h2').html('Pick Your Opponent');
                    enemySelected = false;

                })
            }
        }
        if (userHealth <= 0 && enemyHealth <= 0){
            alert("Mutual destruction");
        }
    }

    function attack() {
        if (enemyHealth > 0){
        userDamage += userDamage
        enemyHealth = enemyHealth - userDamage
        userHealth = userHealth - enemyDamage
        $("#heroHealth").html(userHealth)
        $("#enemyHealth").html(enemyHealth)
        checkHealth()
        healthBarChange();
        }
        else {
            alert("Ask the droids to remove the fallen.");
            healthBarChange();
        }

    }


    $('.fighter').on('click', function selectHero() {
        if (heroSelected === true && enemySelected === true) {
            alert("Defeat your opponent!");
        }
        if (heroSelected === true && enemySelected === false) {
            enemy = $(this).attr("id");
            var ready = confirm("Do you wish to challenge " + capFirstLetter(enemy) + "?")
            if (ready === true) {
                enemySelected = true;
                $(this).remove();
                $('#defenderArea').append(this);
                $('h2').html('Defeat Your Enemy!');
                console.log(enemy)
                if (enemy === "windu") {
                    $("#defenderArea").append("<div id = 'enemyHealth'>" + windu.health + "</div>")
                    $("#battleArena").css('background-image', 'url(assets/images/arenas/council.png)')
                    enemyHealth = windu.health
                    enemyDamage = windu.damage
                }
                if (enemy === "yoda") {
                    $("#defenderArea").append("<div id = 'enemyHealth'>" + yoda.health + "</div>")
                    $("#battleArena").css('background-image', 'url(assets/images/arenas/dagobah.jpg)')
                    enemyHealth = yoda.health
                    enemyDamage = yoda.damage
                }
                if (enemy === "darthMaul") {
                    $("#defenderArea").append("<div id = 'enemyHealth'>" + darthMaul.health + "</div>")
                    $("#battleArena").css('background-image', 'url(assets/images/arenas/sand.jpg)')
                    enemyHealth = darthMaul.health
                    enemyDamage = darthMaul.damage
                }
                if (enemy === "vader") {
                    $("#defenderArea").append("<div id = 'enemyHealth'>" + vader.health + "</div>")
                    $("#battleArena").css('background-image', 'url(assets/images/arenas/deathstar.png)')
                    enemyHealth = vader.health
                    enemyDamage = vader.damage

                }
            }
        }
        if (heroSelected === false) {
            hero = $(this).attr("id")
            var ready = confirm("Do you want to play as " + capFirstLetter(hero) + "?")
            console.log(ready)
            if (ready === true) {
                heroSelected = true;
                $(this).remove();
                $('#heroArea').append(this);
                $('h2').html('Pick Your Opponent');
                console.log(hero)
                if (hero === "windu") {
                    $("#heroArea").append("<div id = 'heroHealth'>" + windu.health + "</div>")
                    userHealth = windu.health
                    userDamage = windu.damage
                }
                if (hero === "yoda") {
                    $("#heroArea").append("<div id = 'heroHealth'>" + yoda.health + "</div>")
                    userHealth = yoda.health
                    userDamage = yoda.damage
                }
                if (hero === "darthMaul") {
                    $("#heroArea").append("<div id = 'heroHealth'>" + darthMaul.health + "</div>")
                    userHealth = darthMaul.health
                    userDamage = darthMaul.damage
                }
                if (hero === "vader") {
                    $("#heroArea").append("<div id = 'heroHealth'>" + vader.health + "</div>")
                    userHealth = vader.health
                    userDamage = vader.damage
                }
            }
        }
    })

    $("#userAttack").on('click', function fight() {
        attack()
    })

}

runItAll();
})
