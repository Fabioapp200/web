class SceneMain extends Phaser.Scene { 
    constructor() {
        super('SceneMain');
    }
    
    preload()
    {
        // carregando assets
        this.load.image('slime', 'images/slime.png');
        this.load.image('Pedestal', 'images/Pedestal.png');
        this.load.image('Medalhao', 'images/Medalhao.png');
    }
    create() {
        // adicionando assets na cena
        this.Pedestal = this.add.sprite(game.config.width * 0.5, game.config.height * 0.2, 'Pedestal');
        this.Medalhao = this.add.sprite(game.config.width * 0.5, game.config.height * 0.1, 'Medalhao');
        
    }

    hit() {
        // define posição da moeda randomicamente
        this.slime.x = Phaser.Math.Between(100, 600);
        this.slime.y = Phaser.Math.Between(100, 300);

        // incrementa o score
        this.score += 10;
        this.scoreText.setText('score: ' + this.score);
    }

    spawnSlime()
    {
        //this.slime.x = Phaser.Math.Between(100, 600);
        this.slime = this.physics.add.sprite( Phaser.Math.Between(game.config.width * 0.1, game.config.width * 0.9), game.config.height * 1.5, 'slime');
    }
    
    update() {
        var tempo=0;
        tempo = tempo +1;
        //console.log(tempo);
        if(tempo >10)
        {
            tempo=0;
            this.spawnSlime();
        }
    }
}