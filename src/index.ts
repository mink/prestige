import Discord from 'discord.js';
import dotenv from 'dotenv';
import Prestige from './Prestige';
import PrestigeClient from './PrestigeClient';

dotenv.config();

const bot = new Prestige(
    process.env.CLIENT_TOKEN,
    new PrestigeClient({ partials: Object.values(Discord.Constants.PartialTypes) }),
);
