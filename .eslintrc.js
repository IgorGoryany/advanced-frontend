module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    rules: {
        'consistent-return': 'off',
        'react/jsx-indent': [2, 4, {
            checkAttributes: true,
            indentLogicalExpressions: true,
        }],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.tsx'],
        }],
        'react/function-component-definition': [2, {
            namedComponents: ['arrow-function', 'function-declaration'],
        }],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [2, {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'max-len': ['error', {
            code: 120,
            ignoreComments: true,
            ignoreUrls: true,
            tabWidth: 4,
        }],
        'no-unsafe-optional-chaining': 0,
        'jsx-quotes': ['error', 'prefer-double'],
        'no-restricted-globals': ['error', 'event', 'fdescribe'],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-param-reassign': 'off',
    },

    globals: {
        __IS_DEV__: true,
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    }],
};
