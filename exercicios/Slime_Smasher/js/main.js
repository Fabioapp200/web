var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 500,
        height: 500,
        parent: 'phaser-game',
        physics: {
            default: 'arcade',
            arcade:{
                gravity: {
                    y:-7
                },
                debug: false
            }
        },
        scene: [SceneMain]
    };
    game = new Phaser.Game(config);
}