

import Command from './Command';
import Light from './Light';

export default class LightCommand implements Command {
    private light: Light;
    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.on();
    }
}