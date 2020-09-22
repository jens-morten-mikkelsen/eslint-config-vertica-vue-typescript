# eslint-config-vertica-vue-typescript

> eslint-config for Vue (2 and 3) with Typescript

See [eslint-plugin-vue](https://eslint.vuejs.org/rules/) for available rules for Vue.
See [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules) for available rules for Typescript.

I recommend that you use this package on projects that are setup using vue-cli, however it should work on any projects.

To use it how ever you have to manually install `eslint-plugin-vue` [See usage](#usage)

## Installation

This config requires several peer dependencies. So I recommended to use the install-peerdeps command:

```sh
npx install-peerdeps --dev eslint-config-vertica-vue-typescript
``` 

Add a `.eslintrc.js` file to your project [See eslint for documentation](https://eslint.org/docs/user-guide/configuring)
I recommend that you use a setup like this in your config:
```js
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'eslint-config-vertica-vue-typescript',
        '@vue/typescript' //<-- this must be last if not using prettier [See @vue/eslint-config-typescript usage](https://www.npmjs.com/package/@vue/eslint-config-typescript#usage)
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};
```

## Usage

This package comes with 2 rulesets.

Simply add the ruleset that you want to use to your `.eslintrc.js` `extends` section.
And your ready to roll.

### Vue 3 `eslint-config-vertica-vue-typescript`

This ruleset is the configuration for projects using Vue 3 with Typescript

An example `.eslintrc.js` `extends` section:

```js
extends: [
    'eslint-config-vertica-vue-typescript',
    '@vue/typescript'
]
```

### Vue 2 `eslint-config-vertica-vue-typescript/vue2-config`

This ruleset is the configuration for projects using Vue 2 with Typescript

An example `.eslintrc.js` `extends` section:

```js
extends: [
    'eslint-config-vertica-vue-typescript/vue2-config',
    '@vue/typescript'
]
```

## Known issues and errors

While testing these rulesets i have found an error that i had a hard time finding the proper solution for, because the error message was kind of vague.

### TypeError: Cannot read property 'typeAnnotation' of undefined

When this error happens, it looks like it is because there is interfaces in the project, that the rulesets are implemented on, has functions that doesn't have a return type.
eg.
```js
interface Overlay {
    hide();
}
```

Will fail with this error:
```sh
ERROR  TypeError: Cannot read property 'typeAnnotation' of undefined
Occurred while linting C:\projects\_personal\sanTest1\src\core\offcanvas-overlay\overlayOrchestrator.ts:2
```

to fix this error simply add the expected return type of the method eg.
```js
interface Overlay {
    hide(): Promise<void>;
}
```

then run the linter again and it should work.
And when run with lint --fix, or just lint in some cases, the code should be refactored to look like this:
```js
interface Overlay {
    hide: () => Promise<void>;
}
```