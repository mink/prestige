import PrestigeClient from './PrestigeClient';
import chalk from 'chalk';

class Prestige {
    constructor(private token: string, public client: PrestigeClient) {
        this.motd();
        this.login();
    }

    login(): void {
        console.log('login -> attempting');
        this.client.login(this.token)
            .then(() => console.log(`login -> success`))
            .catch(() => console.error(`login -> error`));
    }

    motd(): void {
        console.log(`Prestige ${chalk.gray('[prestigebot.com]')}\n`);
    }
}

export default Prestige;
