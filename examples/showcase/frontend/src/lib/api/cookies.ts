import { consentStore, typedCookie } from './client.js';

export const cookies = {
    boardMine: typedCookie<boolean, boolean>('board-mine', { kind: 'boolean', default: false, maxAge: 7776000, path: '/', sameSite: 'lax', secure: false, category: 'preferences' })
};

export const cookieConsent = consentStore(['preferences'] as const, [{ name: 'board-mine', path: '/', category: 'preferences' }]);
