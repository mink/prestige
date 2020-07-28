import { CommandoClient, CommandoClientOptions, CommandoMessage } from 'discord.js-commando';
import Guild from './Guild';
import { Sequelize } from 'sequelize';
import {ClientEvents} from "discord.js";

class PrestigeClient extends CommandoClient {

    public prestigeGuilds: Map<string, Guild> = new Map<string, Guild>();
    public database: Sequelize;

    constructor(options?: CommandoClientOptions) {
        super(options);
        this.removeMessageListeners();
        this.bindDefaultCommandHandler();
        this.bindMessageListeners();
    }

    public login(token: string): Promise<string> {
        return super.login(token);
    }

    private removeMessageListeners(): void {
        this.removeAllListeners('message');
        this.removeAllListeners('messageUpdate');
    }

    private bindDefaultCommandHandler(): void {
        this.prestigeGuilds.set('default', new Guild(this));
        this.registry = this.prestigeGuilds.get('default').registry;
        this.dispatcher = this.prestigeGuilds.get('default').dispatcher;
    }

    private bindMessageListeners(): void {

        const emitError = error => this.emit('error', error);

        this.on('message', (message: CommandoMessage) => {
            const guild: Guild = this.prestigeGuilds.get(message.guild.id)
                || this.prestigeGuilds.get('default');
            return guild.dispatcher
                .handleMessage(message)
                .catch(emitError);
        });

        this.on('messageUpdate', (
            oldMessage: CommandoMessage,
            newMessage: CommandoMessage
        ) => {
            const guild: Guild = this.prestigeGuilds.get(newMessage.guild.id)
                || this.prestigeGuilds.get('default');
            return guild.dispatcher
                .handleMessage(newMessage, oldMessage)
                .catch(emitError);
        });
    }
}

export default PrestigeClient;
