import { CommandoClient, CommandoClientOptions } from 'discord.js-commando';
import Guild from './Guild';

class PrestigeClient extends CommandoClient {

    public prestigeGuilds: Map<string, Guild> = new Map<string, Guild>();

    constructor(options?: CommandoClientOptions) {
        super(options);
        this.bindDefaultCommandHandler();
    }

    public login(token: string): Promise<string> {
        return super.login(token);
    }

    private bindDefaultCommandHandler(): void {
        this.prestigeGuilds.set('default', new Guild(this));
        this.registry = this.prestigeGuilds.get('default').registry;
        this.dispatcher = this.prestigeGuilds.get('default').dispatcher;
    }
}

export default PrestigeClient;
