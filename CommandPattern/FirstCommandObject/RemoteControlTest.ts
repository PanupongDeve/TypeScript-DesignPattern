import SimpleRemoteControl from './SimpleRemoteControl';
import Light from './Light';
import LightCommand from './LightCommand';


const remote: SimpleRemoteControl = new SimpleRemoteControl();
const light:Light= new Light();
const lightOn: LightCommand = new LightCommand(light);

remote.setCommand(lightOn);
remote.buttonWasPressed();
