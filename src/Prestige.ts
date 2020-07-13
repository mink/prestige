import PrestigeClient from './PrestigeClient';

class Prestige {
    constructor(private token: string, public client: PrestigeClient) {
        client.login(token);
    }
}

export default Prestige;
