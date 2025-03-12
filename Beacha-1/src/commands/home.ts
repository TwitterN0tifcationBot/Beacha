import { Message } from 'discord.js';
import { User, Server } from '../types';

export const execute = async (message: Message, user: User, servers: Server[]) => {
    const friendList = user.friends.map(friend => friend.username).join(', ') || 'No friends found.';
    const serverList = servers.map(server => server.name).join(', ') || 'No servers joined.';

    const response = `
        **Welcome to Beacha, ${user.username}!**
        
        **Your Friends:** ${friendList}
        
        **Your Servers:** ${serverList}
        
        [Create a New Beacha Server](#)
    `;

    await message.channel.send(response);
};