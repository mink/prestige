import { Client, ClientOptions } from 'discord.js';

class PrestigeClient extends Client {
    constructor(options?: ClientOptions) {
        super(options);
    }
}

export default PrestigeClient;
