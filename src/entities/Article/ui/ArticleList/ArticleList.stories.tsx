import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';
import TestImg from '@/shared/assets/test/storybook.jpg';
import { Article } from '../../model/types/article';
import { ArticleList } from './ArticleList';

const article = {
    id: 1,
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: TestImg,
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: 1,
        username: 'Mjbaron',
        avatar: TestImg,
    },
    type: [
        'IT',
        'SCIENCE',
        'POLITICS',
        'ECONOMICS',
    ],
    blocks: [
        {
            id: 1,
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
} as Article;

const meta = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    tags: ['autodocs'],
    args: {
        articles: new Array(17).fill(0).map((item, index) => ({
            ...article,
            id: index + 1,
        })),
    },
} as Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkSmall: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {
        view: 'SMALL',
    },
};
export const LightSmall: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {
        view: 'SMALL',
    },
};

export const DarkBig: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {
        view: 'BIG',
    },
};
export const LightBig: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {
        view: 'BIG',
    },
};

export const DarkLoadingSmall: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {
        view: 'SMALL',
        isLoading: true,
    },
};
export const LightLoadingSmall: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {
        view: 'SMALL',
        isLoading: true,
    },
};

export const DarkLoadingBig: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {
        view: 'BIG',
        isLoading: true,
    },
};
export const LightLoadingBig: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {
        view: 'BIG',
        isLoading: true,
    },
};
