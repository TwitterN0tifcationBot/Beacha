export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    settings: UserSettings;
}

export interface UserSettings {
    theme: string;
    serverIcon: string;
    textFont: string;
    color: string;
    userIcon: string;
    username: string;
}

export interface Server {
    id: string;
    name: string;
    ownerId: string;
    boosts: number;
    emojis: string[];
    bots: string[];
    roles: Role[];
    channels: Channel[];
}

export interface Role {
    id: string;
    name: string;
    permissions: string[];
}

export interface Channel {
    id: string;
    name: string;
    type: 'text' | 'voice';
}

export interface Command {
    name: string;
    description: string;
    execute: (args: string[]) => void;
}