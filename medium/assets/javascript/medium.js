/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function() {

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function() {

    //Math random number function to use in goals count
    function RandNumFunction() {
      return Math.random();
    }

    //cheer audio location
    var url = "assets/Audio/5_Sec_Crowd_Cheer-Mike_Koenig-1562033255.wav";
    var audio = new Audio(url);

    //Reset button and count varibles
    var resetButton = $("#reset");
    var countResets = $("#num-resets");

    //Teamone Shoot Button and Count Variables
    var teamOneShootButton = $("#teamone-shoot");
    var teamOneNumShots = $("#teamone-numshots");
    var teamOneNumGoals = $("#teamone-numhits");

    //Teamtwo Shoot Button and Count variables
    var teamTwoShootButton = $("#teamtwo-shoot");
    var teamTwoNumShots = $("#teamtwo-numshots");
    var teamTwoNumGoals = $("#teamtwo-numhits");




    //Reset button click, counting resets and resetting the values for team counts.
    resetButton.click(function() {
      console.log("Reset Button clicked");
      var noOfResets = parseInt(countResets.html()) +1;
      countResets.html(noOfResets);
      //console.log(countResets.html());
      $( "#image" ).css( {"background": ""});
      teamOneNumShots.html(0);
      teamOneNumGoals.html(0);
      teamTwoNumShots.html(0);
      teamTwoNumGoals.html(0);
    })

    teamOneShootButton.click(function(){
      console.log("Shoot1 button clicked");
      var totalTeamOneShots = parseInt(teamOneNumShots.html())+1;
      teamOneNumShots.html(totalTeamOneShots);
      //console.log(teamOneNumShots.html());

      if(RandNumFunction() > 0.5){
        var totalTeamOneGoals = parseInt(teamOneNumGoals.html())+1;
        teamOneNumGoals.html(totalTeamOneGoals);
        $( "#image" ).css( "background", "green");
        audio.play();
      }
      else
      {
        $( "#image" ).css( {"background": ""});
      }
    })

    teamTwoShootButton.click(function(){
      console.log("Shoot2 button clicked");
      var totalTeamTwoShots = parseInt(teamTwoNumShots.html())+1;
      teamTwoNumShots.html(totalTeamTwoShots);

      if(RandNumFunction() > 0.5){
        var totalTeamTwoGoals = parseInt(teamTwoNumGoals.html())+1;
        teamTwoNumGoals.html(totalTeamTwoGoals);
        $( "#image" ).css( "background", "red");
        audio.play();
      }
      else
      {
        $( "#image" ).css( {"background": ""});
      }
    })


  })



})();
