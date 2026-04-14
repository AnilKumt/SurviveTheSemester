import { Room } from "colyseus";

export class GameRoom extends Room {
    constructor() {
        super(),
        this.game = null;
    }
    
    onCreate(options, AdapterClass){

        this.game.init(options);
        this.gameType = options.gameType;

        this.game = new AdapterClass();

        this.state(this.game.getState());

        this.setSimulationInterval(()=>{
            this.game.update();
        });
    }

    onJoin(client, options){
        this.game.onJoin(client, options);
    }

    onLeave(client){
        this.game.onLeave(client);
    }
    //dhvfjha sdfhgaseyufkjsadhyuqesvfkjashfiqeviygqewvfd
}