import PrestigeClient from './PrestigeClient';
import chalk from 'chalk';

class Prestige {
    constructor(private token: string, public client: PrestigeClient) {
        console.log(`Prestige ${chalk.gray(' [prestigebot.com] ')}\n`);
        console.log('login -> attempting');
        client.login(token)
            .then(() => console.log(`login -> success`))
            .catch(() => console.error(`login -> error`));
    }
}

export default Prestige;
