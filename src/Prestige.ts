import PrestigeClient from './PrestigeClient';
import chalk from 'chalk';
import { Sequelize } from 'sequelize';
import { CommandoClientOptions } from 'discord.js-commando';

class Prestige {

    public client: PrestigeClient;

    constructor(private token: string, options?: CommandoClientOptions) {
        this.displayMotd();
        this.client = new PrestigeClient(options);
        this.boot();
    }

    private async boot(): Promise<void> {
        const isConnected: boolean = await this.bootDatabase();

        if (!isConnected) {
            console.log(`database -> connection failed`);
            process.exit(1);
        }

        console.log(`database -> connected`);
        const isLoggedIn: boolean = await this.attemptLogin();

        if (!isLoggedIn) {
            console.log(`login -> error`);
            process.exit(1);
        }

        console.log(`login -> success`);
    }

    private bootDatabase(): Promise<boolean> {
        console.log('database -> connecting');
        this.client.database = new Sequelize({
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            dialect: 'mysql',
            logging: false,
        });

        return this.client.database.authenticate().then(() => true).catch(() => false);
    }

    private attemptLogin(): Promise<boolean> {
        console.log('login -> attempting');
        return this.client.login(this.token).then(() => true).catch(() => false);
    }

    private displayMotd(): void {
        console.log(`Prestige ${chalk.gray('[prestigebot.com]')}\n`);
    }
}

export default Prestige;
