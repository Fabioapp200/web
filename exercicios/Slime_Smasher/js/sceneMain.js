class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        // carregando assets
        this.load.image('slime', 'images/slime.png');
    }
    create() {
        // adicionando assets na cena
        this.slime = this.add.sprite(game.config.width * 0.5, game.config.height * 0.5, 'slime');
       // this.slime = this.add.sprite(100, 100, 'slime');
        
        console.log("Ready!");
    }
    update() {
        // loop infinito com o jogo
    }
}