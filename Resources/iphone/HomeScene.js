var HomeScene = function(window, game) {
    var scene = Alloy.Globals.Platino.createScene();
    var red = null;
    var onSceneActivated = function() {
        Ti.API.info("HomeScene has been activated.");
        red = Alloy.Globals.Platino.createSprite({
            width: 64,
            height: 64
        });
        game.setupSpriteSize(red);
        red.color(1, 0, 0);
        red.center = {
            x: game.STAGE_START.x + .5 * game.TARGET_SCREEN.width,
            y: game.STAGE_START.y + .5 * game.TARGET_SCREEN.height
        };
        scene.add(red);
    };
    game.addEventListener("touchstart", function() {
        var textsprite = Alloy.Globals.Platino.createTextSprite({
            text: "Now you're gaming with Alloy!",
            fontSize: 24
        });
        textsprite.color(1, 1, 1);
        textsprite.center = {
            x: game.STAGE_START.x + .5 * game.TARGET_SCREEN.width,
            y: game.STAGE_START.y + .5 * game.TARGET_SCREEN.height
        };
        scene.remove(red);
        scene.add(textsprite);
    });
    var onSceneDeactivated = function() {
        Ti.API.info("HomeScene has been deactivated.");
        if (red) {
            scene.remove(red);
            red.dispose();
            red = null;
        }
        scene.dispose();
        scene = null;
    };
    scene.backButtonHandler = function() {};
    scene.addEventListener("activated", onSceneActivated);
    scene.addEventListener("deactivated", onSceneDeactivated);
    return scene;
};

module.exports = HomeScene;