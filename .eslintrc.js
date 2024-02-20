module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
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
        'ubgbigtv-fsd',
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
            namedComponents: ['arrow-function'],
        }],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [2, {
            markupOnly: true,
            ignoreAttribute: [
                'data-testid',
                'to',
                'name',
                'position',
                'border',
                'target',
                'justify',
                'align',
                'direction',
                'gap',
                'role',
                'Tag',
            ],
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
        'no-undef': 'off',
        'jsx-a11y/control-has-associated-label': 'off', // выруби если чо
        'ubgbigtv-fsd/path-checker': 'error',
    },

    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: [
                '**/src/**/*.{test,stories}.{ts,tsx}',
                '**/src/shared/ui/**/*.tsx',
            ],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
                'react/jsx-props-no-spreading': 'off',
            },
        },
        {
            files: [
                '**/src/**/*.{test,stories}.{ts,tsx}',
                '**/src/shared/lib/tests/**/*.{ts,tsx}',
                '**/src/shared/config/Storybook/**/*.{ts,tsx}',
                '**/config/**/*.{ts,tsx}',
            ],
            rules: {
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
};
