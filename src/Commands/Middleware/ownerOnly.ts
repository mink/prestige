import { Message } from 'discord.js';

function ownerOnly(
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
): TypedPropertyDescriptor<any> {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (args[0] instanceof Message && args[0].author.id !== process.env.CLIENT_OWNER) {
            return args[0].channel.send(`You don't have permission to use this command.`);
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

export default ownerOnly;
