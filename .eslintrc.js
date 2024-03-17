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
        'react-hooks',
        '@typescript-eslint',
        'i18next',
        'unused-imports',
        'import-path-checker-fsd',
    ],
    rules: {
        'no-unused-vars': 'off',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'max-len': ['error', {
            code: 120,
            ignoreComments: true,
            ignoreUrls: true,
            tabWidth: 4,
        }],
        'no-unsafe-optional-chaining': 0,
        'jsx-quotes': ['error', 'prefer-double'],
        'no-restricted-globals': ['error', 'event', 'fdescribe'],
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'consistent-return': 'off',
        'react/jsx-indent': [2, 4, {
            checkAttributes: true,
            indentLogicalExpressions: true,
        }],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.tsx', '.ts'],
        }],
        'react/function-component-definition': [2, {
            namedComponents: ['arrow-function'],
        }],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'unused-imports/no-unused-imports': 'error',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'import/order': [
            'error',
            {
                'newlines-between': 'always-and-inside-groups',
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'type',
                    'object',
                ],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                    {
                        pattern: '@storybook/react',
                        group: 'external',
                    },
                    {
                        pattern: '*.scss',
                        group: 'object',
                    },
                ],
            },

        ],
        'i18next/no-literal-string': [2, {
            markupOnly: true,
            ignoreAttribute: [
                'data-testid',
                'to',
                'as',
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
                'theme',
                'titleWrap',
                'featureName',
            ],
        }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/control-has-associated-label': 'off', // выруби если чо
        'import-path-checker-fsd/absolute-path-checker': ['error', { alias: '@' }],
        'import-path-checker-fsd/import-only-from-public-api': ['error',
            {
                alias: '@',
                ignoreDirs: [
                    'shared/assets',
                    'shared/api',
                    'shared/const',
                ],
                testingFilePatterns: [
                    '**/*.testProps.ts',
                    '**/*.test.{ts,tsx}',
                    '**/*.stories.{ts,tsx}',
                    '**/StoreDecorator.tsx',
                    '**/ThemeDecorator.tsx',
                    '**/componentRender.tsx',

                ],
            }],
        'import-path-checker-fsd/import-only-from-the-lower-layers': ['error',
            {
                alias: '@',
                testingFilePatterns: [
                    '**/*.testProps.ts',
                    '**/*.test.{ts,tsx}',
                    '**/*.stories.{ts,tsx}',
                    '**/StoreDecorator.tsx',
                    '**/ThemeDecorator.tsx',
                    '**/componentRender.tsx',
                ],
                ignoreImportPatterns: ['**/StoreProvider', '**/User'],
                ignoreTypeImports: true,
            }],
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
                '**/src/shared/lib/testing/**/*.{ts,tsx}',
                '**/src/shared/config/Storybook/**/*.{ts,tsx}',
                '**/config/**/*.{ts,tsx}',
                '**/scripts/**/*.{ts,js}',
                './vite.config.ts',
            ],
            rules: {
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
};
