import Command from './Command';
import { Message } from 'discord.js';

class PingCommand extends Command {
    run = (message: Message) => message.reply('pong');
}

export default PingCommand;
