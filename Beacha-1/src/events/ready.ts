import { Client } from 'discord.js';

export default (client: Client) => {
    console.log(`Logged in as ${client.user?.tag}!`);
    // You can add additional setup or welcome messages here
};