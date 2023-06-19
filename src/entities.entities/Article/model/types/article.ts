import { User } from 'entities.entities/User';

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: number;
    type: ArticleBlockType;
}

export interface ArticleBlockCode extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleBlockText extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[]
}

export interface ArticleBlockImage extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    title?: string;
    src: string
}

export type ArticleBlock = ArticleBlockCode | ArticleBlockText | ArticleBlockImage

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
}

export type ArticlesView = 'BIG' | 'SMALL'

export interface Article {
    id: number;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    user: User,
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export interface ArticleDetailsSchema {
    articleDetailsData?: Article;
    isLoading?: boolean;
    error?: string;
}
