import { User } from '../types';
import { getUserByUsername, createSession } from '../utils/helpers';

export async function execute(username: string, password: string): Promise<string> {
    const user: User | null = await getUserByUsername(username);

    if (!user) {
        return 'User not found. Please check your username.';
    }

    if (user.password !== password) {
        return 'Incorrect password. Please try again.';
    }

    await createSession(user.id);
    return `Welcome back, ${user.username}! You are now logged in.`;
}