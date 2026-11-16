import { pathToFileURL } from 'node:url';

const plugin = (await import(pathToFileURL(process.argv[2]).href)).default;

function link(node, parent) {
    if (!node || typeof node !== 'object') return node;
    if (Array.isArray(node)) {
        node.forEach((child) => link(child, parent));
        return node;
    }
    if (typeof node.type === 'string') {
        node.parent = parent;
        for (const [key, value] of Object.entries(node)) if (key !== 'parent') link(value, node);
    }
    return node;
}

function walk(node, visitors) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
        node.forEach((child) => walk(child, visitors));
        return;
    }
    if (typeof node.type !== 'string') return;
    visitors[node.type]?.(node);
    for (const [key, value] of Object.entries(node)) if (key !== 'parent') walk(value, visitors);
}

function run(rule, filename, ...nodes) {
    const reports = [];
    const context = { filename, report: (found) => reports.push(found.messageId + (found.data?.name ? `:${found.data.name}` : '')) };
    const visitors = plugin.rules[rule].create(context);
    for (const node of nodes) walk(link(node, undefined), visitors);
    return reports;
}

const id = (name) => ({ type: 'Identifier', name });
const text = (value) => ({ type: 'Literal', value });
const template = (...parts) => ({
    type: 'TemplateLiteral',
    quasis: parts.map((part) => ({ type: 'TemplateElement', value: { cooked: part, raw: part } })),
    expressions: parts.slice(1).map(() => id('value'))
});
const plus = (left, right) => ({ type: 'BinaryExpression', operator: '+', left, right });
const member = (object, name) => ({ type: 'MemberExpression', computed: false, object, property: id(name) });
const call = (callee, ...args) => ({ type: 'CallExpression', callee: typeof callee === 'string' ? id(callee) : callee, arguments: args });
const object = (...names) => ({
    type: 'ObjectExpression',
    properties: names.map((name) => ({ type: 'Property', key: id(name), value: id(name) }))
});
const markup = (value) => ({ type: 'SvelteLiteral', value });
const mustache = (expression) => ({ type: 'SvelteMustacheTag', expression });
const href = (...value) => ({ type: 'SvelteAttribute', key: { type: 'SvelteName', name: 'href' }, value });
const statement = (expression) => ({ type: 'ExpressionStatement', expression });
const block = (...body) => ({ type: 'BlockStatement', body });
const loadFunction = (...body) => ({
    type: 'VariableDeclaration',
    declarations: [{ type: 'VariableDeclarator', id: id('load'), init: { type: 'ArrowFunctionExpression', body: block(...body) } }]
});
const caught = (name, ...body) => ({
    type: 'TryStatement',
    block: block(),
    handler: { type: 'CatchClause', param: id(name), body: block(...body) }
});
const when = (test, consequent) => ({ type: 'IfStatement', test, consequent });

const api = (resource, operation, ...args) => call(member(member(id('api'), resource), operation), ...args);
const bodyMessage = (name) => statement(member(member(id(name), 'body'), 'message'));

const results = {
    links: run(
        'no-string-page-links',
        'Page.svelte',
        href(markup('/')),
        href(markup('/notes/'), mustache(member(id('note'), 'id'))),
        href(mustache(text('/login'))),
        href(markup('/notes/new')),
        href(markup('/notes/'), mustache(id('id')), markup('?tab=files')),
        href(markup('/api/docs')),
        href(markup('https://example.com/notes')),
        href(markup('//cdn.example.com/notes')),
        href(mustache(call(member(id('routes'), 'notes')))),
        statement(call('goto', template('/notes/', ''))),
        statement(call('goto', plus(text('/notes/'), member(id('created'), 'id')))),
        statement(call('redirect', text(307), text('/login'))),
        statement(call('goto', text('/docs/guide/intro'))),
        statement(call('goto', text('/nowhere')))
    ),
    loadFile: run(
        'fetch-in-load',
        'src/routes/notes/+page.ts',
        loadFunction(
            statement(api('notes', 'list')),
            statement(api('notes', 'get', member(id('params'), 'id'))),
            statement(api('notes', 'get', id('id'), object('fetch'))),
            statement(api('notes', 'get', id('id'), object('signal'))),
            statement(api('notes', 'get', id('id'), id('options'))),
            statement(call(member(id('other'), 'list')))
        ),
        statement(api('notes', 'list'))
    ),
    otherFile: run('fetch-in-load', 'src/lib/notes.ts', loadFunction(statement(api('notes', 'list')))),
    messages: run(
        'no-error-body-message',
        'Form.svelte',
        caught('error', bodyMessage('error')),
        caught('failure', when(call('isApiError', id('failure'), text('notes.get')), block(bodyMessage('failure')))),
        caught('error', when(call('isApiError', id('other'), text('notes.get')), block(bodyMessage('error')))),
        caught('error', bodyMessage('response')),
        bodyMessage('error')
    ),
    recommended: Object.keys(plugin.configs.recommended[0].rules)
};

console.log(JSON.stringify(results));
