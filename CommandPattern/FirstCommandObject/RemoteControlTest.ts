import SimpleRemoteControl from './SimpleRemoteControl';
import Light from './Light';
import LightCommand from './LightCommand';
import GarageDoor from './GarageDoor';
import GarageDoorOpenCommand from './GarageDoorOpenCommand';

const remote: SimpleRemoteControl = new SimpleRemoteControl();
const light:Light= new Light();
const lightOn: LightCommand = new LightCommand(light);

const garage: GarageDoor = new GarageDoor();
const garageOn: GarageDoorOpenCommand = new GarageDoorOpenCommand(garage);

remote.setCommand(lightOn);
remote.buttonWasPressed();
remote.setCommand(garageOn);
remote.buttonWasPressed();
