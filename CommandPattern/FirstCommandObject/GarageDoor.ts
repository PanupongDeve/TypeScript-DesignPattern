import Light from './Light';


export default class GarageDoor {
    private light: Light;

    constructor(){
        this.light = new Light;
    }

    public up(): void {
        console.log('Door is up');
    }

    public down(): void {
        console.log('Door is down');
    }

    public stop(): void {
        console.log('Door is stop');
    }

    public lightOn(): void {
        console.log('Door use Light');
        this.light.on();
    }

    public lightOof(): void {
        console.log('Door close light');
        this.light.off();
    }
} 