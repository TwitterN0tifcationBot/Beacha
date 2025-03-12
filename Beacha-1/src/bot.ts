import { Client, GatewayIntentBits } from 'discord.js';
import { execute as signup } from './commands/signup';
import { execute as login } from './commands/login';
import { execute as home } from './commands/home';
import { execute as settings } from './commands/settings';
import { execute as serverManagement } from './commands/serverManagement';
import { onReady } from './events/ready';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', onReady);

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const args = message.content.split(' ');
    const command = args.shift()?.toLowerCase();

    switch (command) {
        case '!signup':
            await signup(message, args);
            break;
        case '!login':
            await login(message, args);
            break;
        case '!home':
            await home(message);
            break;
        case '!settings':
            await settings(message, args);
            break;
        case '!server':
            await serverManagement(message, args);
            break;
        default:
            message.reply('Unknown command. Please use !signup, !login, !home, !settings, or !server.');
    }
});

client.login('YOUR_BOT_TOKEN');