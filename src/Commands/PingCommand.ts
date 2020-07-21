import { Command, CommandoClient, CommandoMessage } from 'discord.js-commando';
import { Message } from 'discord.js';

class PingCommand extends Command {
    constructor(client: CommandoClient) {
        super(client, {
            name: 'ping',
            group: 'default',
            memberName: 'ping',
            description: 'ping'
        });
    }

    public hasPermission(message: CommandoMessage): boolean {
        return true;
    }

    public async run(message: CommandoMessage, args: {} | string | string[]): Promise<Message | Message[]> {
        return message.say('pong');
    }
}

export default PingCommand;
