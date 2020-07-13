import Command from './Command';
import { Message } from 'discord.js';
import ownerOnly from './Middleware/ownerOnly';

class PingCommand extends Command {
    @ownerOnly
    run(message: Message) {
        return message.reply('pong');
    }
}

export default PingCommand;
