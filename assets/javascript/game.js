$(function () {
    var heroSelected = false;
    var enemySelected = false;
    
    var windu = {
        name: "Mace Windu",
        health: 30,
        damage: 1,
        background: "council"
    }

    var yoda = {
        name: "Yoda",
        health: 40,
        damage: 5,
        background: "Dagobah"
    }

    var darthMaul = {
        name: "Darth Maul",
        health: 20,
        damage: 3,
        background: "sand"
    }

    var vader = {
        name: "Darth Vader",
        health: 50,
        damage: 6,
        background: "Deathstar"
    }

    $('.fighter').on('click', function selectHero() {
        if (heroSelected === true && enemySelected === true) {
            alert("Defeat your opponent!");
        }
        if (heroSelected === true && enemySelected === false) {
            enemySelected = true;
            enemy = $(this).attr("id");
            $(this).remove();
            $('#defenderArea').append(this);
            $('h2').html('Defeat Your Enemy!');
            console.log(enemy)
            if (enemy === "windu") {
                $("#defenderArea").append("<div id = 'enemyHealth'>" + windu.health + "</div>")
                $("#battleArena").css('background-image', 'url(assets/images/arenas/council.png)')
            }
            if (enemy === "yoda") {
                $("#defenderArea").append("<div id = 'enemyHealth'>" + yoda.health + "</div>")
                $("#battleArena").css('background-image', 'url(assets/images/arenas/dagobah.jpg)')
            }
            if (enemy === "darthMaul") {
                $("#defenderArea").append("<div id = 'enemyHealth'>" + darthMaul.health + "</div>")
                $("#battleArena").css('background-image', 'url(assets/images/arenas/sand.jpg)')
            }
            if (enemy === "vader") {
                $("#defenderArea").append("<div id = 'enemyHealth'>" + vader.health + "</div>")
                $("#battleArena").css('background-image', 'url(assets/images/arenas/deathstar.png)')
            }
        }
        if (heroSelected === false) {
            heroSelected = true;
            hero = $(this).attr("id")
            $(this).remove();
            $('#heroArea').append(this);
            $('h2').html('Pick Your Opponent');
            console.log(hero)
            if (hero === "windu") {
                $("#heroArea").append("<div id = 'heroHealth'>" + windu.health + "</div>")
            }
            if (hero === "yoda") {
                $("#heroArea").append("<div id = 'heroHealth'>" + yoda.health + "</div>")
            }
            if (hero === "darthMaul") {
                $("#heroArea").append("<div id = 'heroHealth'>" + darthMaul.health + "</div>")
            }
            if (hero === "vader") {
                $("#heroArea").append("<div id = 'heroHealth'>" + vader.health + "</div>")
            }
        }
    })
    $("#userAttack").on('click', function attack() {
        // windo is hero
        if (hero === "windu" & enemy === "yoda") {
            windu.damage = 2 * windu.damage
            yoda.health = yoda.health - windu.damage
            windu.health = windu.health - yoda.damage
            $("#heroHealth").html(windu.health)
            $("#enemyHealth").html(yoda.health)
        }
        if (hero === "windu" & enemy === "darthMaul") {
            windu.damage = 2 * windu.damage
            darthMaul.health = darthMaul.health - windu.damage
            windu.health = windu.health - darthMaul.damage
            console.log(windu.damage)
            $("#heroHealth").html(windu.health)
            $("#enemyHealth").html(darthMaul.health)
        }
        if (hero === "windu" & enemy === "vader") {
            windu.damage = 2 * windu.damage
            vader.health = vader.health - windu.damage
            windu.health = windu.health - vader.damage
            console.log(windu.damage)
            $("#heroHealth").html(windu.health)
            $("#enemyHealth").html(vader.health)
        }

        //yoda is hero
        if (hero === "yoda" & enemy === "windu") {
            windu.health = windu.health - yoda.damage
            windu.damage = 2 * windu.damage
            yoda.health = yoda.health - windu.damage
            $("#heroHealth").html(yoda.health)
            $("#enemyHealth").html(windu.health)
        }
        if (hero === "yoda" & enemy === "darthMaul") {
            darthMaul.health = darthMaul.health - yoda.damage
            yoda.health = yoda.health - darthMaul.damage
            $("#heroHealth").html(yoda.health)
            $("#enemyHealth").html(darthMaul.health)
        }
        if (hero === "yoda" & enemy === "vader") {
            vader.health = vader.health - yoda.damage
            yoda.health = yoda.health - vader.damage
            $("#heroHealth").html(yoda.health)
            $("#enemyHealth").html(vader.health)
        }

        //darthMaul is hero
        if (hero === "darthMaul" & enemy === "windu") {
            windu.health = windu.health - darthMaul.damage
            windu.damage = 2 * windu.damage
            darthMaul.health = darthMaul.health - windu.damage
            $("#heroHealth").html(darthMaul.health)
            $("#enemyHealth").html(windu.health)
        }
        if (hero === "darthMaul" & enemy === "yoda") {
            yoda.health = yoda.health - darthMaul.damage
            darthMaul.health = darthMaul.health - yoda.damage
            $("#heroHealth").html(darthMaul.health)
            $("#enemyHealth").html(yoda.health)
        }
        if (hero === "darthMaul" & enemy === "vader") {
            vader.health = vader.health - darthMaul.damage
            darthMaul.health = darthMaul.health - vader.damage
            $("#heroHealth").html(darthMaul.health)
            $("#enemyHealth").html(vader.health)
        }
        
        //vader is hero
        if (hero === "vader" & enemy === "windu") {
            windu.health = windu.health - vader.damage
            windu.damage = 2 * windu.damage
            vader.health = vader.health - windu.damage
            $("#heroHealth").html(vader.health)
            $("#enemyHealth").html(windu.health)
        }
        if (hero === "vader" & enemy === "yoda") {
            yoda.health = yoda.health - vader.damage
            vader.health = vader.health - yoda.damage
            $("#heroHealth").html(vader.health)
            $("#enemyHealth").html(yoda.health)
        }
        if (hero === "vader" & enemy === "darthMaul") {
            darthMaul.health = darthMaul.health - vader.damage
            vader.health = vader.health - darthMaul.damage
            $("#heroHealth").html(vader.health)
            $("#enemyHealth").html(darthMaul.health)
        }
    })

    //when hp of current defender hits 0, remove picture

    //allow a new opponent to be chosen

    //move new opponent to defender

    //when hp of 2nd defender hits 0, remove picture

    //allow last opponent to be chosen

    //move last opponent to defender

    //when hp of last defender hits 0, remove picture and add victory

    // if hero hp hits 0 at any point, game over









})
