import PrestigeClient from './PrestigeClient';
import chalk from 'chalk';
import { Sequelize } from 'sequelize';

class Prestige {

    private database: Sequelize;

    constructor(private token: string, public client: PrestigeClient) {
        this.motd();
        this.boot();
    }

    async boot(): Promise<void> {
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

    bootDatabase(): Promise<boolean> {
        console.log('database -> connecting');
        this.database = new Sequelize({
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            dialect: 'mysql',
            logging: false,
        });

        return this.database.authenticate().then(() => true).catch(() => false);
    }

    attemptLogin(): Promise<boolean> {
        console.log('login -> attempting');
        return this.client.login(this.token).then(() => true).catch(() => false);
    }

    motd(): void {
        console.log(`Prestige ${chalk.gray('[prestigebot.com]')}\n`);
    }
}

export default Prestige;
