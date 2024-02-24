export interface ArticleRatingSchema {
    id: number;
    articleId: string;
    feedback?: string;
    rate: number;
    userId: string;
}
