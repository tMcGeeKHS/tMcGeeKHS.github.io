$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(75, 0, 20, 600, "darkred");
    createPlatform(200, 605, 100, 5, "darkred");
    createPlatform(500, 500, 100, 5, "darkred");
    createPlatform(200, 400, 100, 5, "darkred");
    createPlatform(100, 275, 100, 5, "darkred");
    createPlatform(400, 200, 5, 5, "darkred");
    createPlatform(525, 315, 5, 5, "yellow");
    createPlatform(650, 200, 5, 5, "darkred");
    createPlatform(750, 315, 5, 5, "yellow");
    createPlatform(850, 200, 5, 5, "darkred");
    createPlatform(1005, 305, 5, 5, "yellow");
    createPlatform(1300, 250, 50, 5, "darkred");
    // createPlatform(700, 400, 100, 20, "yellow");
    // createPlatform(705, 405, 90, 10, "green");
    // createPlatform(600,605, 100, 10, "red");
    // createPlatform(350, 500, 100, 10, "red");
    // createPlatform(100,400, 100, 10, "red");
    // createPlatform(400, 350, 100, 10, "red");
    // createPlatform(760, 300, 100, 10, "red");
    // TODO 3 - Create Collectables
    createCollectable("diamond", 1000, 300, 0, 0);
    createCollectable("steve", 1200, 200, 0, 0);
    createCollectable("database", 1300, 150, 0, 0 );

    
    // TODO 4 - Create Cannons
    createCannon("right", 700, 2);
    createCannon("right", 550, 750);
    createCannon("right", 400, 1750);
    //2,750,1500
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
