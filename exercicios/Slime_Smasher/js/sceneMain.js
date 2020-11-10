class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        // permite carregar os recursos antes de usá-los
        // ex: imagens, sons
    }
    create() {
        this.label = this.add.text(game.config.width * 0.1, game.config.height * 0.1, 'Testo Teste');
        console.log("Ready!");
    }
    update() {
        // loop infinito com o jogo
    }
}