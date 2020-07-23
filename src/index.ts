import Discord from 'discord.js';
import dotenv from 'dotenv';
import Prestige from './Prestige';
import PrestigeClient from './PrestigeClient';

dotenv.config();

const bot = new Prestige(
    process.env.CLIENT_TOKEN,
    new PrestigeClient({
        commandPrefix: process.env.CLIENT_PREFIX,
        owner: process.env.CLIENT_OWNER,
        invite: process.env.CLIENT_INVITE,
        partials: Object.values(Discord.Constants.PartialTypes),
    }),
);
