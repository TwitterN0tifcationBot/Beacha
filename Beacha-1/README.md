# Beacha Discord Bot

Beacha is a feature-rich Discord bot designed to enhance user experience on Discord servers. This README provides an overview of the project, its features, and setup instructions.

## Features

- **User Authentication**
  - Signup: Users can create a new account.
  - Login: Users can log into their accounts.

- **Home Page**
  - Displays a list of friends and servers.
  - Option to create a new Beacha server.

- **Settings Management**
  - Users can customize their experience by changing themes, server icons, text fonts, colors, user icons, and usernames.

- **Server Management**
  - Manage server settings including server information, boosts, emojis, bots, roles, and channels.
  - Options to manage AI settings.

## Project Structure

```
Beacha
├── src
│   ├── bot.ts
│   ├── commands
│   │   ├── signup.ts
│   │   ├── login.ts
│   │   ├── home.ts
│   │   ├── settings.ts
│   │   └── serverManagement.ts
│   ├── events
│   │   └── ready.ts
│   ├── utils
│   │   └── helpers.ts
│   └── types
│       └── index.ts
├── config
│   └── config.json
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd Beacha
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Configure the bot:
   - Update the `config/config.json` file with your bot token and other settings.

5. Run the bot:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.