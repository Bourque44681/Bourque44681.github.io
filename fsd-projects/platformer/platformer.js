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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400, 700, 1400, 40)
    createPlatform(1360, 600, 40, 40)
    createPlatform(1250,  480, 40, 40)
    createPlatform(1360, 350, 40, 40)
    // createPlatform(1250,  230, 40, 40)


    createPlatform(800, 580, 150, 30)
    createPlatform(550, 500, 150,30)
    createPlatform(300, 420, 150, 30)
    createPlatform(570, 350, 150,30)
    createPlatform(800, 240, 120, 30)

    createPlatform(0, 700, 300, 40)



    // TODO 3 - Create Collectables
    createCollectable("database", 330, 700, 0, 0)
    createCollectable("database", 1330, 150, 0, 0)
    createCollectable("database", 850, 200, 0, 0)


    
    // TODO 4 - Create Cannons
    createCannon("right", 730, 2000)
    createCannon("top", 1390, 2000)
    createCannon("left", 665, 800)
    createCannon("top", 800, 1000)
    createCannon("top", 400, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
