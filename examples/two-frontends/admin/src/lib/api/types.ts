export interface Greeting {
    message: string;
}

export const Greeting = {
    empty: (): Greeting => ({
        message: '',
    }),
};
