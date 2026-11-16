const { routes } = await import(process.argv[2]);
const on = (id: string | null) => ({ route: { id } });

const results = {
    exact: {
        open: routes.notes.isActive(on('/(app)/notes')),
        other: routes.notes.isActive(on('/about')),
        noRoute: routes.notes.isActive(on(null)),
        child: routes.notes.isActive(on('/(app)/notes/[id]'))
    },
    below: {
        open: routes.notes.isActive(on('/(app)/notes'), { below: true }),
        child: routes.notes.isActive(on('/(app)/notes/[id]'), { below: true }),
        deeper: routes.notes.isActive(on('/(other)/notes/[id]/edit'), { below: true }),
        similarName: routes.notes.isActive(on('/(app)/notebooks'), { below: true }),
        other: routes.notes.isActive(on('/about'), { below: true })
    },
    home: {
        open: routes.home.isActive(on('/'), { below: true }),
        anyOtherPage: routes.home.isActive(on('/about'), { below: true })
    },
    ariaCurrent: [
        routes.notes.ariaCurrent(on('/(app)/notes')) ?? null,
        routes.notes.ariaCurrent(on('/(app)/notes/[id]')) ?? null,
        routes.notes.ariaCurrent(on('/(app)/notes/[id]'), { below: true }) ?? null,
        routes.notes.ariaCurrent(on('/about'), { below: true }) ?? null
    ],
    stillBuildsUrls: [routes.notes(), routes.notesId({ id: 4 })],
    id: routes.notesId.id
};

console.log(JSON.stringify(results));
