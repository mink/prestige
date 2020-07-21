import PingCommand from './Commands/PingCommand';
import { CommandoClient, CommandoClientOptions } from 'discord.js-commando';

class PrestigeClient extends CommandoClient {
    constructor(options?: CommandoClientOptions) {
        super(options);
        this.registry.registerGroup('default');
        this.registry.registerCommand(PingCommand);
    }

    public login(token: string): Promise<string> {
        return super.login(token);
    }
}

export default PrestigeClient;
