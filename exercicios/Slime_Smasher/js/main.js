var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 400,
        height: 500,
        parent: 'phaser-game',
        scene: [SceneMain]
    };
    game = new Phaser.Game(config);
}