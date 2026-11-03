export interface Note {
    id: number;
    title: string;
    body: string;
    tags: string[];
    status: 'ACTIVE' | 'ARCHIVED';
}

export interface NoteInput {
    title: string;
    body?: string;
    tags?: string[];
}

export interface NoteStats {
    total: number;
    archived: number;
    tags: Record<string, number>;
}

export interface NotesExport {
    notes: Note[];
}

export interface Problem {
    message: string;
}

export interface PublicConfig {
    appName: string;
    maxTitleLength: number;
}
