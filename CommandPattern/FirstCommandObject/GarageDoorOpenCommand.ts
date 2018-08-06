import Command from './Command';
import GarageDoor from './GarageDoor';

export default class GarageDoorOpenCommand implements Command {
    private garageDoor: GarageDoor
    constructor(garageDoor) {
        this.garageDoor = garageDoor;
    }


    public execute(): void{
        this.garageDoor.lightOn();
    }
}