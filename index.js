module.exports = {
    extends: [
        './configs/vue3-eslint.rules.config.js',
        'eslint:recommended',
        './configs/eslint.config.typescript.js'
    ],
    rules: {
        indent: ['error', 4],
        quotes: 'off',
        semi: 'off',
        'array-bracket-spacing': ['error'],
        'block-spacing': ['error'],
        'brace-style': 'off', // set in eslint.config.typescript
        'comma-dangle': ['error'],
        'comma-spacing': 'off', // set in eslint.config.typescript
        'comma-style': ['error'],
        'computed-property-spacing': ['error'],
        'eqeqeq': ['error', 'smart'],
        'func-call-spacing': 'off', // set in eslint.config.typescript
        'keyword-spacing': 'off', // set in eslint.config.typescript
        'lines-between-class-members': 'off', // set in eslint.config.typescript
        'no-dupe-class-members': 'off', // set in eslint.config.typescript
        'no-extra-parens': 'off', // set in eslint.config.typescript
        'no-extra-semi': 'off', // set in eslint.config.typescript
        'no-invalid-this': 'off', // set in eslint.config.typescript
        'no-multiple-empty-lines': ['warn', {
            max: 1,
            maxEOF: 1,
            maxBOF: 0
        }],
        'no-shadow': ['warn'], // TODO: TBD if this should be used... Should have been set in eslint.config.typescript, but is not in the currently working version in the setup.
        'no-unused-expressions': 'off', // set in eslint.config.typescript
        'no-use-before-define': 'off', // set in eslint.config.typescript
        'no-useless-constructor': 'off', // set in eslint.config.typescript
        'object-curly-newline': ['error', {
            'multiline': true,
            'minProperties': 1
        }],
        'object-property-newline': ['warn', {
            'allowAllPropertiesOnSameLine': true
        }],
        'padded-blocks': ['warn', 'never'],
        'require-await': 'off', // set in eslint.config.typescript
        'space-infix-ops': ['error']
    }
};
