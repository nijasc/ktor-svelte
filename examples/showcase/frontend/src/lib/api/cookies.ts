import { typedCookie } from './client.js';

export const cookies = {
    boardMine: typedCookie<boolean, boolean>('board-mine', { kind: 'boolean', default: false, maxAge: 7776000, path: '/', sameSite: 'lax', secure: false })
};
