## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`
Собрать с помощью комаанды 
- `npm run storybook:build`
Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
    args: {
        children: 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
            + '\n'
            + 'import { Theme } from \'shared/lib\';\n'
            + 'import { StoreDecorator, ThemeDecorator } from \'shared/config\';\n'
            + 'import { Code } from \'./Code\';\n'
            + '\n'
            + 'const meta = {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    tags: [\'autodocs\'],',
    },
} as Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
```
