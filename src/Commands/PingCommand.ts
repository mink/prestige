import Command from './Command';

class PingCommand extends Command {
    run = (message) => message.reply('pong');
}

export default PingCommand;
