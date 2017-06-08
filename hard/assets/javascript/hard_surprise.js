/**
 * Given the HTML provided, please make the following changes with javascript – don't change any HTML!:
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://api.jquery.com/show/
 * https://api.jquery.com/hide/
 * https://api.jquery.com/remove/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post"
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *
 */

(function() {

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function() {
    //debugger;
    /**1. Any time someone clicks on the title at the top "feed template,"
     *    make the color of the "feed template" text change from black to red
     * and then from red to black when clicked again.
     *  - Bonus Point surprise animate included
     */
    var myHeader = $(".row h1");
    console.log($(".row h1").html());
    myHeader.click(function() {
      console.log("im here");
      headerAnimation();
      function headerAnimation(){
          myHeader.animate({letterSpacing: "+=45px"},"slow");
          myHeader.animate({letterSpacing: "-=45px"},"slow",headerAnimation);
      }
      var headerColor = myHeader.css("color");
      console.log(headerColor);
      if (headerColor == "rgb(51, 51, 51)") {
        myHeader.css({
          color: "rgb(255, 0, 0)"
        });
      } else {
        myHeader.css({
          color: "rgb(51, 51, 51)"
        });
      }
    })

    /* 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
     *    hide every odd-numbered link in the menu.
     */
    //console.log($(".section-container .section:nth-child(odd)"));
    $(".section-container .section:nth-child(odd)").hide();

    // 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
    //'/<string>/igm  - this is a regular expression or regexp in javascript - i case insensitive g is global and m is multiline'

    $("p").html($("p").html().replace(/bacon/gi, 'LASER VISION'));


    //4. Delete the last two posts in the middle section (they have a CSS class "post"
    // $(".post:nth-last-child(1)").css("background-color", "yellow"); I added these to check which ones I am deleting.
    // $(".post:nth-last-child(2)").css("background-color", "yellow");
    // $(".post:nth-last-child(3)").css("background-color", "yellow");
    $(".post:nth-last-child(1)").remove();
    $(".post:nth-last-child(2)").remove();
    $(".post:nth-last-child(3)").remove();

    //5. Remove the images in the right column
    //$(".large-3.columns.hide-for-small").css("background-color", "red");
    $(".large-3.columns.hide-for-small").remove();

  })


})();
