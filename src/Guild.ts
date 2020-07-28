import { CommandoClient, CommandoRegistry } from 'discord.js-commando';
import CommandDispatcher from 'discord.js-commando/src/dispatcher';
import PingCommand from './Commands/PingCommand';

class Guild {
    public dispatcher: CommandDispatcher;
    public registry: CommandoRegistry;

    constructor(client: CommandoClient) {
        this.registry = new CommandoRegistry(client);
        this.dispatcher = new CommandDispatcher(client, this.registry);
        this.bindDefaultCommands();
    }

    private bindDefaultCommands(): void {
        this.registry.registerGroup('default');
        this.registry.registerCommand(PingCommand);
    }
}

export default Guild;
