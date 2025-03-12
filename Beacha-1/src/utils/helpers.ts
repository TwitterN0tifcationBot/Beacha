// This file contains utility functions that assist with various tasks throughout the bot, such as message formatting or validation.

export function formatMessage(content: string): string {
    return `**${content}**`;
}

export function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export function validateUsername(username: string): boolean {
    return username.length >= 3 && username.length <= 20;
}

export function generateRandomId(): string {
    return Math.random().toString(36).substr(2, 9);
}