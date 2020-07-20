import { Client, ClientOptions, Message } from 'discord.js';
import Command from './Commands/Command';
import PingCommand from './Commands/PingCommand';

class PrestigeClient extends Client {
    public commands: Map<string, Command> = new Map<string, Command>();

    constructor(options?: ClientOptions) {
        super(options);
        this.bindDefaultCommands();
        this.bindMessageHandler();
    }

    bindDefaultCommands(): void {
        this.commands.set('ping', new PingCommand());
    }

    bindMessageHandler(): void {
        this.on('message', (message: Message) => {
            if (this.commands.has(process.env.CLIENT_PREFIX + message.content)) {
                this.commands.get(message.content).run(message);
            }
        });
    }
}

export default PrestigeClient;
