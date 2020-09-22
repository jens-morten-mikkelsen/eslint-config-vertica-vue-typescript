module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        '@vue/typescript/recommended'
    ],
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/array-type': ['warn'],
        '@typescript-eslint/consistent-type-assertions': ['warn', {
            'assertionStyle': 'as',
            'objectLiteralTypeAssertions': 'allow-as-parameter' // TODO: TBD: brug 'allow-as-parameter' eller 'never'. 'never' giver fejl på parametre/argumenter der bliver sendt inline med 'as T' hvilket betyder at man (så vidt jeg kan se) SKAL lave en variable til sine parametre/argumenter inden de bliver sendt over (er ikke fixable)  
        }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-member-accessibility': ['off'],
        '@typescript-eslint/member-delimiter-style': ['warn'],
        // '@typescript-eslint/member-ordering': ['warn'],
        '@typescript-eslint/method-signature-style': ['warn'],
        '@typescript-eslint/naming-convention': ['warn', {
            selector: 'enumMember',
            format: ['PascalCase']
        }],
        // '@typescript-eslint/no-confusing-non-null-assertion': ['warn'], // Not in 2.34.0
        // '@typescript-eslint/no-implicit-any-catch': ['warn'], // Not in 2.34.0
        // '@typescript-eslint/no-invalid-void-type': ['warn'], // Not in 2.34.0
        '@typescript-eslint/no-parameter-properties': ['warn'],
        // '@typescript-eslint/no-require-imports': ['warn'], // TODO: Decide if this should be used or not. If it should be used we have to use file-loader, and possibly webpack
        // '@typescript-eslint/prefer-enum-initializers': ['warn'], // Not in 2.34.0
        '@typescript-eslint/prefer-function-type': ['warn'],
        '@typescript-eslint/prefer-optional-chain': ['warn'],
        // '@typescript-eslint/prefer-ts-expect-error': ['warn'], // Cannot be used with Typescript 3.9 or above
        '@typescript-eslint/type-annotation-spacing': ['warn'],
        
        // region Extension rules
        '@typescript-eslint/brace-style': ['error'],
        '@typescript-eslint/comma-spacing': ['error'],
        '@typescript-eslint/default-param-last': ['error'],
        '@typescript-eslint/func-call-spacing': ['error'],
        '@typescript-eslint/keyword-spacing': ['warn'],
        '@typescript-eslint/lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true
        }],
        '@typescript-eslint/no-dupe-class-members': ['error'],
        '@typescript-eslint/no-extra-parens': ['warn'], // Might be broken in older solutions (not working in Sanistaal)
        '@typescript-eslint/no-extra-semi': ['warn'],
        // '@typescript-eslint/no-shadow': ['warn'], // Not in 2.34.0
        '@typescript-eslint/no-unused-expressions': ['error', {
            'allowTernary': false
        }],
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/quotes': ['error', 'single'],
        // '@typescript-eslint/require-await': ['error'], // Maybe broken in 2.34.0
        '@typescript-eslint/semi': ['error', 'always']
        // endregion
    },
    'overrides': [
        {
            // rules specifically for TypeScript and vue
            'files': ['*.ts', '*.tsx', '*.vue'],
            'rules': {
                /*'@typescript-eslint/explicit-function-return-type': ['warn', {
                    // if true, only functions which are part of a declaration will be checked
                    allowExpressions: false,
                    // if true, type annotations are also allowed on the variable of a function expression rather than on the function directly
                    allowTypedFunctionExpressions: false, //(When set to false, types are required on store getters arrow functions)
                    // if true, functions immediately returning another function expression will not be checked
                    allowHigherOrderFunctions: true,
                    // if true, concise arrow functions that start with the void keyword will not be checked
                    allowConciseArrowFunctionExpressionsStartingWithVoid: true
                }],*/
                '@typescript-eslint/explicit-member-accessibility': ['warn']
            }
        },
        {
            // rules specifically for Typescript and Javascript files
            'files': ['*.ts', '*.tsx', '*.js', '*.jsx'],
            'rules': {
                '@typescript-eslint/no-invalid-this': ['error']
            }
        }
    ]
};
