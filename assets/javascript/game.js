$(document).ready(function () {

    var windu = {
        health: 30,
        userDamage: 2
    };
    
    fighterSelect = false;
    enemySelect = false;

    console.log(fighterSelect)
    console.log(enemySelect)


    if (fighterSelect === false) {
        $(".fighter").on("click", function pickFighter() {

            var ready = confirm("Do you want to fight as X ?");
            if (ready === true) {
                fighterSelect = true;
                hero = $(this).attr("id")
                console.log(hero);
                $(this).remove(".fighter"),
                $("#heroArea").append(this);   
                console.log(fighterSelect);
                return fighterSelect;
            }
  // this isn't returning out of the function that allows next section to be called
        })
    }
    console.log(fighterSelect);
    if (fighterSelect === true) {
        $("h2").html("Pick Your Opponent")
        $(".fighter").on("click", function pickEnemy() {
            enemy = $(this).attr("id")
            console.log(enemy);

            var ready = confirm("Do you want to fight against Y ?");
            if (ready === true) {
                enemySelect = true;
                $("h2").html("Defeat Your Current Opponent Before Selecting Another!")
                enemy = $(this).attr("id")
                console.log(enemy);
                $(this).remove(".fighter"),
                $("#defenderArea").append(this);
                console.log(enemySelect);
                return enemySelect;
            }
 // possible same issue as above once above is fixed
        })



    }

})
