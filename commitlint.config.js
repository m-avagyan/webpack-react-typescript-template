module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['chore', 'docs', 'feat', 'fix', 'refactor', 'revert', 'unit', 'test', 'wip']],
    },
};
