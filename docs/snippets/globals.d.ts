declare let notes: import('#api').Note[];
declare let note: import('#api').Note;
declare let draft: import('#api').NoteInput;
declare let errors: Record<string, string[]>;
declare let task: { due: import('#api').IsoDate };
declare let file: File;
declare let id: number;
declare let progress: number;

declare function showErrors(fields: Record<string, string[]>): void;
declare function showError(message: string): void;
declare function showToast(message: string, options?: { action?: string; onAction?: () => void }): void;
declare function render(notes: import('#api').Note[]): void;
