class SceneMain extends Phaser.Scene {
    constructor() 
    {
        super('SceneMain');
    }
    preload() 
    {
        // carregando assets
        this.load.image('slime', 'images/slime.png');
        this.load.image('Pedestal', 'images/Pedestal.png');
        this.load.image('Medalhao', 'images/Medalhao.png');
        this.load.image('background', 'images/background.png');
    }
    create() 
    {
        // adicionando assets na cena
        this.background = this.add.image(250,250, 'background');
        this.Pedestal = this.add.sprite(game.config.width * 0.5, game.config.height * 0.2, 'Pedestal');
        this.Medalhao = this.physics.add.sprite(game.config.width * 0.5, game.config.height * 0.1, 'Medalhao');
        
      
        //add score
        this.score = 0;
        
        let style = { font: '20px Arial', fill: '#fff' };
        let style2 = { font: '50px Arial', fill: '#fff' };
        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
       
        //add text alert
        this.alertTxt = this.add.text(game.config.width * 0.25, game.config.height * 0.5, '',style2);
        
        this.tempo = 0;
    }

    youLose()
    {
        this.alertTxt.setText('You Lose!!');
    }
    
    spawnSlime() 
    {
        var sprite = this.physics.add.sprite(Phaser.Math.Between(game.config.width * 0.1, game.config.width * 0.9), game.config.height * 1.5, 'slime').setInteractive();
        //sprite.setGravityY(-30);
        sprite.body.velocity.y = -150;
        
        sprite.on('pointerdown', function (pointer) 
        {
            sprite.destroy();
            this.score +=10;
           
            
        },this);

        this.scoreText.setText('score: ' + this.score);
       

        
    } 
    
    update() 
    {
        this.tempo++;

        if (this.tempo > 100) 
        {
            this.tempo = 0;
            this.spawnSlime();
        }

    }
}