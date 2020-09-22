﻿// noinspection SpellCheckingInspection
module.exports = {
    extends: [
        'plugin:vue/recommended' // see: https://eslint.vuejs.org/rules/#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead-for-vue-js-2-x
    ],
    rules: {
        // region Base rules

        // endregion

        // region Essential

        // endregion

        // region Strongly recommended
        'vue/attribute-hyphenation': ['error', 'never'], // TBD
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never'
        }],
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'always',
                'normal': 'never',
                'component': 'always'
            },
            'svg': 'always',
            'math': 'always'
        }],
        'vue/max-attributes-per-line': ['warn', {
            singleline: 1,
            multiline: {
                max: 1,
                allowFirstLine: true
            }
        }
        ],
        'vue/multiline-html-element-content-newline': ['error', {
            'ignoreWhenEmpty': true,
            'ignores': [],
            'allowEmptyLines': false
        }],
        // 'vue/one-component-per-file': ['error'], // TODO: not in current stable version, comes in v7
        'vue/require-default-prop': ['error'],
        // 'vue/require-explicit-emits': ['error'], // TODO: not in current stable version, comes in v7
        'vue/require-prop-types': ['error'],
        'vue/singleline-html-element-content-newline': ['error', {
            'ignoreWhenNoAttributes': false,
            'ignoreWhenEmpty': true,
            'ignores': []
        }],
        // endregion

        // region Recommended
        'vue/attributes-order': ['error', {
            'order': [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'UNIQUE',
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'OTHER_ATTR',
                'EVENTS',
                'CONTENT'
            ],
            'alphabetical': true
        }],
        'vue/component-tags-order': ['error', {
            'order': ['template', 'script', 'style']
        }],
        'vue/order-in-components': ['error', {
            'order': [
                'el',
                'name',
                'key',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                ['components', 'directives', 'filters'],
                'extends',
                'mixins',
                ['provide', 'inject'],
                'ROUTER_GUARDS',
                'layout',
                'middleware',
                'validate',
                'scrollToTop',
                'transition',
                'loading',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'emits',
                'setup',
                'asyncData',
                'data',
                'fetch',
                'head',
                'computed',
                'watch',
                'watchQuery',
                'LIFECYCLE_HOOKS',
                'methods',
                ['template', 'render'],
                'renderError'
            ]
        }],
        // endregion

        // region UnCategorized
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            'registeredComponentsOnly': true,
            'ignores': []
        }],
        // 'vue/html-comment-content-newline': ['warn'], // TODO: not in current stable version, comes in v7
        // 'vue/html-comment-content-spacing': ['warn'], // TODO: not in current stable version, comes in v7
        // 'vue/html-comment-indent': ['warn'], // TODO: not in current stable version, comes in v7
        'vue/match-component-file-name': ['error', {
            'extensions': [
                'jsx',
                'vue'
            ],
            'shouldMatchCase': true
        }],
        // 'vue/no-duplicate-attr-inheritance': ['warn'], // TODO: not in current stable version, comes in v7
        // 'vue/no-empty-component-block': ['error'], // TODO: not in current stable version, comes in v7
        // 'vue/no-multiple-objects-in-class': ['warn'], // TODO: not in current stable version, comes in v7
        'vue/no-reserved-component-names': ['error'],
        'vue/no-static-inline-styles': ['warn'],
        'vue/no-unsupported-features': ['warn', {
            'version': '^3.0.0-0'
        }],
        /*'vue/no-unused-properties': ['warn', { // TODO: not in current stable version, comes in v7
            'groups': [
                'props',
                'data',
                'computed'
            ]
        }],*/
        // 'vue/no-useless-mustaches': ['error'], // TODO: not in current stable version, comes in v7
        // 'vue/no-useless-v-bind': ['error'], // TODO: not in current stable version, comes in v7
        'vue/padding-line-between-blocks': ['warn', 'always'],
        'vue/v-on-function-call': ['error', 'never'],
        // endregion

        // region Extension Rules
        'vue/eqeqeq': ['warn', 'smart'],
        // 'vue/no-extra-parens': ['warn'], // TODO: not in current stable version, comes in v7
        'vue/no-irregular-whitespace': ['warn']

        // endregion
    }
};
