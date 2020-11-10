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
        // usada para criar objetos
        console.log("Ready!");
    }
    update() {
        // loop infinito com o jogo
    }
}